/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import {
  stepInfo,
  tabsInfo,
  tabsDefaultOrder,
  ScheduleDefaultState,
  SCHEDULE_TAB,
  PARAMETERS_TAB,
  OUTPUT_TAB,
  NOTIFICATIONS_TAB,
  manadatoryHiddenField,
  typeOfFields,
  simpleTriggerState,
  SEND_ATTACHMENT,
  SEND_LINK,
  defaultFieldVisibility,
  mapFieldName,
  validationMessages,
} from "../constants/schedulerConstants";
import { getLengthOfObject, getUriParts } from "./schedulerUtils";
import { validator } from "../validations/scheduleValidators";
import { checkPermissionOnResource } from "../services/schedulerServices";

const isResourceWritable = (item: any) => {
  return item.permissionMask !== 0;
};

const checkAvailabilityOfBasicConfig = (
  resourceURI: string,
  server: string,
) => {
  const error: { [key: string]: string } = {};
  if (!resourceURI) {
    error["resource.uri.missing.configuration"] =
      "resourceURI is required in the configuration";
  } else if (!server) {
    error["server.missing.configuration"] =
      "server is required in the configuration";
  }
  return error;
};

const checkRequiredDataForHiddenTabs = (tabName: string, tabData: any) => {
  const error: { [key: string]: string } = {};
  switch (tabName) {
    case SCHEDULE_TAB: {
      const { label } = tabData;
      if (!label) {
        error["label.missing.value.schedule.tab.hidden.configuration"] =
          "Value for label is required in the configuration when schedule tab is hidden";
      }
      break;
    }
    case PARAMETERS_TAB: {
      break;
    }
    case OUTPUT_TAB: {
      const { baseOutputFilename } = tabData;
      if (!baseOutputFilename) {
        error[
          "baseOutputFilename.hidden.missing.value.output.tab.hidden.configuration"
        ] =
          "Value for baseOutputFilename is required in the configuration when output tab is hidden";
      }
      break;
    }
    case NOTIFICATIONS_TAB: {
      const { address, subject } = tabData,
        isAddressArray = Array.isArray(address);
      if (!address || !subject) {
        if (!address)
          error[
            "address.hidden.missing.value.notification.tab.hidden.configuration"
          ] =
            "Value for address is required in the configuration when notifications tab is hidden";
        if (!subject)
          error["subject.hidden.missing.value.configuration"] =
            "Value for subject is required in the configuration when notifications tab is hidden";
      } else if (!isAddressArray || (isAddressArray && address.length === 0)) {
        error["address.not.in.proper.format"] =
          "Value for address should be an array of strings";
      }
      break;
    }
  }
  return error;
};

const checkValidDate = (date: string) => {
  return true;
};
const checkValueOfFolderUri = (uri: string) => {
  return true;
};
const validate = (propertName: string, propertyValue: string) => {
  switch (propertName) {
    case "startTime": {
      if (propertyValue !== "now" && !checkValidDate(propertyValue)) {
        return { error: "Entered incorrect value for startTime" };
      }
      break;
    }
    case "resultSendType": {
      if (
        propertyValue !== SEND_ATTACHMENT &&
        !checkValueOfFolderUri(propertyValue)
      ) {
        return { error: "Entered incorrect value for resultSendType" };
      }
      break;
    }
  }
  return { error: null };
};

const getStartTimeValue = (value: string) => {
  const isNow = value === "now";
  return {
    startType: isNow ? 1 : 2,
    startDate: isNow ? null : value,
  };
};

const getReportAccessValue = (value: string) => {
  const isSendAsAttachment = value === SEND_ATTACHMENT;
  return {
    resultSendType: isSendAsAttachment ? SEND_ATTACHMENT : SEND_LINK,
    folderURI: isSendAsAttachment ? null : value,
  };
};

const getValuesForRadio = (value: string, field: string) => {
  switch (field) {
    case "startTime": {
      const { error } = validate("startTime", value);
      if (error) {
        return { error };
      }
      return getStartTimeValue(value);
    }
    case "resultSendType": {
      const { error } = validate("resultSendType", value);
      if (error) {
        return { error };
      }
      return getReportAccessValue(value);
    }
  }
};

const checkFieldDataValidity = (fieldsData: any) => {
  const promises: Array<any> = [];
  let error: { [key: string]: string } = {},
    fieldsVisibility: { [key: string]: string } = {},
    fieldConvertedData: { [key: string]: string } = {},
    fieldsSupportedValues: { [key: string]: string } = {};

  Object.keys(fieldsData).forEach((field: string) => {
    const type: string = typeOfFields[field] as string;
    switch (type) {
      case "simple":
        {
          if (
            fieldsData[field].show === false &&
            manadatoryHiddenField.indexOf(field) > -1 &&
            !fieldsData[field].value
          ) {
            promises.push(
              Promise.resolve({
                [`${field}.hidden.missing.value.configuration`]: `Value for ${field} is required in the configuration when ${field} is hidden`,
              }),
            );
          } else {
            const fieldName: string = mapFieldName[field] || field,
              error: { [key: string]: string | any } = validator(
                fieldName,
                fieldsData[field].value,
                {},
              );
            promises.push({
              [`${field}.invalid`]: validationMessages[error[`${fieldName}`]],
            });
            fieldConvertedData[fieldName] = fieldsData[field].value;
            fieldsVisibility[fieldName] =
              fieldsData[field].show === undefined
                ? true
                : fieldsData[field].show;
            if (fieldsData[field]?.supportedValues)
              fieldsSupportedValues[fieldName] =
                fieldsData[field]?.supportedValues;
          }
        }
        break;
      case "radio": {
        const { show, value } = fieldsData[field];
        if (
          show === false &&
          manadatoryHiddenField.indexOf(field) > -1 &&
          !value
        ) {
          promises.push(
            Promise.resolve({
              [`${field}.hidden.missing.value.configuration`]: `Value for ${field} is required in the configuration when ${field} is hidden`,
            }),
          );
        } else {
          const fieldValue: any = getValuesForRadio(value, field);
          if (fieldValue.error) {
            error[`${field}.invalid`] =
              validationMessages[fieldValue.error[`${field}`]];
          } else {
            fieldConvertedData = { ...fieldConvertedData, ...fieldValue };
            fieldsVisibility[field] = show === undefined ? true : show;
          }
        }
        break;
      }
    }
  });
  return Promise.all(promises).then((data) => {
    let validationPromise = {};
    data.forEach((item: any) => {
      Object.keys(item).forEach((key) => {
        if (item[key]) {
          validationPromise = { ...validationPromise, ...item };
        }
      });
    });
    return {
      error: { ...validationPromise, ...error },
      fieldsVisibility,
      fieldConvertedData,
      fieldsSupportedValues,
    };
  });
};

const checkResourceUriIsRightOrHavePermission = async (
  resourceURI: string,
  server: string,
) => {
  let error: { [key: string]: string } = {};
  const response = await checkPermissionOnResource(resourceURI, server);
  if (response.permissionMask) {
    if (!isResourceWritable(response)) {
      error["resource.access.denied"] =
        "You don't have permission to schedule this resource";
    }
  } else {
    error["resource.not.found"] = "Resource URI was not found";
  }
  return error;
};

const setDefaultValuesForFields = (
  fieldConvertedData: any,
  resourceURI: string,
) => {
  const {
    baseOutputFilename,
    scheduleJobDescription,
    scheduleJobName,
    messageText,
    subject,
    address = [],
    resultSendType = SEND_LINK,
    outputFormat = ["pdf"],
    outputTimeZone = "Asia/Calcutta",
    startType = "1",
    recurrenceInterval = 1,
    recurrenceIntervalUnit = "DAY",
    startDate = null,
    outputDescription,
    folderURI,
  } = fieldConvertedData;

  const scheduleInfo = {
      ...ScheduleDefaultState,
      baseOutputFilename,
      scheduleJobName,
      scheduleJobDescription,
      mailNotification: {
        messageText,
        subject,
        toAddresses: {
          address,
        },
        resultSendType,
      },
      outputFormats: {
        outputFormat,
      },
      outputTimeZone,
      trigger: {
        simpleTrigger: {
          ...simpleTriggerState,
          startType: parseInt(startType),
          recurrenceInterval,
          recurrenceIntervalUnit,
          startDate,
        },
      },
      source: {
        reportUnitURI: resourceURI,
        parameters: {
          parameterValues: {},
        },
      },
      repositoryDestination: {
        ...ScheduleDefaultState.repositoryDestination,
        outputDescription,
        folderURI: folderURI
          ? folderURI
          : `/${getUriParts(resourceURI, true).join("/")}`,
        saveToRepository: true,
      },
    },
    stepperDefaultState = {
      scheduleJobName,
      scheduleJobDescription,
      address: address.length ? address : undefined,
      subject: subject,
      messageText: messageText,
      recurrenceInterval,
      recurrenceIntervalUnit,
      startDate,
      baseOutputFilename,
      outputDescription,
      resultSendType: SEND_LINK,
      outputFormat,
      outputTimeZone,
    };

  return {
    scheduleInfo,
    stepperDefaultState,
  };
};

export const getSchedulerData = async (scheduleConfig: any) => {
  const { resourceURI, tabs, server, stepper } = scheduleConfig || {};
  const { tabsData = {}, tabsOrder } = tabs || {};

  // check resourceURI, server, contextPath are provided by user
  let error: { [key: string]: any } = checkAvailabilityOfBasicConfig(
    resourceURI,
    server,
  );
  if (!!getLengthOfObject(error)) {
    return { error };
  }

  // check whether resourceURI is correct and has permission to view.
  error = await checkResourceUriIsRightOrHavePermission(resourceURI, server);
  if (!!getLengthOfObject(error)) {
    return { error };
  }

  const tabsConfig = tabsOrder?.length > 0 ? tabsOrder : tabsDefaultOrder;
  const stepsToShow: any[] = [],
    tabsToShow: any[] = [];
  type TabKeys = "parameters" | "schedule" | "output" | "notifications";

  tabsConfig.map((tab: TabKeys) => {
    stepsToShow.push(stepInfo[tab]);
    tabsToShow.push(tabsInfo[tab]);
  });

  // find out hidden tabs
  const hiddenTabs = tabsDefaultOrder.filter(
    (tab) => tabsConfig.indexOf(tab) === -1,
  );

  // check we have data for all hidden tabs
  hiddenTabs.forEach((tab) => {
    const dataForTab = tabsData?.[tab];
    const tabError = checkRequiredDataForHiddenTabs(tab, dataForTab);
    if (getLengthOfObject(tabError)) {
      error[tab] = { ...tabError };
    }
  });
  if (getLengthOfObject(error)) {
    return { error };
  }

  const {
    schedule = {},
    output = {},
    notifications = {},
    parameters = {},
  } = tabsData;

  const scheduleDefaultValues = schedule || {},
    outputDefaultValues = output || {},
    notificationsDefaultValues = notifications || {},
    parametersDefaultValues = parameters || {};

  // check whether we have all data for hidden fields
  const inputFieldsInfo = {
    ...scheduleDefaultValues,
    ...outputDefaultValues,
    ...notificationsDefaultValues,
    ...parametersDefaultValues,
  };

  const {
    error: fieldsErrs,
    fieldsVisibility,
    fieldConvertedData,
    fieldsSupportedValues,
  } = await checkFieldDataValidity(inputFieldsInfo);

  if (getLengthOfObject(fieldsErrs)) {
    return { error: fieldsErrs };
  }

  const { scheduleInfo, stepperDefaultState } = setDefaultValuesForFields(
    fieldConvertedData,
    resourceURI,
  );

  return {
    showStepper: stepper?.show === false ? stepper.show : true,
    stepperDefaultState,
    scheduleInfo,
    tabsToShow,
    stepsToShow,
    fieldsSupportedValues,
    currentActiveTab: tabsConfig[0],
    fieldsVisibility: { ...defaultFieldVisibility, ...fieldsVisibility },
  };
};
