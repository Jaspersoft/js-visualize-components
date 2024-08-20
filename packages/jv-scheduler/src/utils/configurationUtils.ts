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
} from "../constants/schedulerConstants";
import { getLengthOfObject, getUriParts } from "./schedulerUtils";

const checkForStringOrNumber = (element) => {
  return (
    typeof element === "string" ||
    (typeof element === "number" && !isNaN(element))
  );
};

const checkAvailabilityOfBasicConfig = (
  resourceURI: string,
  server: string,
  contextPath: string,
) => {
  const error = {};
  if (!resourceURI) {
    error.resourceUri = "resourceURI is required in the configuration";
    console.error("resourceURI is required in the configuration");
  } else if (!server) {
    error.server = "server is required in the configuration";
    console.error("server is required in the configuration");
  } else if (!contextPath) {
    error.contextPath = "contextPath is required in the configuration";
    console.error("contextPath is required in the configuration");
  }
  return error;
};

const checkRequiredDataForHiddenTabs = (tabName: string, tabData: any) => {
  const error = {};
  switch (tabName) {
    case SCHEDULE_TAB: {
      const { label } = tabData;
      if (!label) {
        console.error(
          "Value for label is required in the configuration when schedule tab is hidden",
        );
        error.label =
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
        console.error(
          "Value for baseOutputFilename is required in the configuration when output tab is hidden",
        );
        error.baseOutputFilename =
          "Value for baseOutputFilename is required in the configuration when output tab is hidden";
      }
      break;
    }
    case NOTIFICATIONS_TAB: {
      const { address, subject } = tabData;
      if (!address || !subject) {
        console.error(
          "Value for address and subject is required in the configuration when notifications tab is hidden",
        );
        error.address =
          "Value for address is required in the configuration when notifications tab is hidden";
        error.subject =
          "Value for subject is required in the configuration when notifications tab is hidden";
      } else if (Array.isArray(address) || !checkForStringOrNumber(address)) {
        console.error(
          "Value for address should be a string or number or array of strings or numbers",
        );
        error.address =
          "Value for address should be a string or number or array of strings or numbers";
      }
      break;
    }
  }
  return error;
};

const checkFieldValueIsIncorrect = (field: string) => {
  // if value is correct return field name and value
  // if value is not correct return error

  return field;
};

const checkValidDate = (date: string) => {
  return true;
};
const checkValueOfFolderUri = (uri: string) => {
  return true;
};
const validate = (propertName, propertyValue) => {
  switch (propertName) {
    case "startTime": {
      if (propertyValue !== "now" && !checkValidDate(propertyValue)) {
        return { error: "Entered incorrect value for startTime" };
      }
      break;
    }
    case "reportAccessType": {
      if (
        propertyValue !== "SEND_ATTACHMENT" &&
        !checkValueOfFolderUri(propertyValue)
      ) {
        return { error: "Entered incorrect value for reportAccessType" };
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
  const isSendAsAttachment = value === "SEND_ATTACHMENT";
  return {
    resultSendType: isSendAsAttachment ? "SEND_ATTACHMENT" : "SEND",
    folderURI: isSendAsAttachment ? null : value,
  };
};
const getValuesForRadio = (value, field) => {
  switch (field) {
    case "startTime": {
      const { error } = validate("startTime", value);
      if (error) {
        return { error };
      }
      return getStartTimeValue(value);
    }
    case "reportAccessType": {
      const { error } = validate("reportAccessType", value);
      if (error) {
        return { error };
      }
      return getReportAccessValue(value);
    }
  }
};

const checkFieldDataValidity = (fieldsData: any) => {
  let error = {},
    fieldsVisibility = {},
    fieldConvertedData = {};

  Object.keys(fieldsData).forEach((field) => {
    const type = typeOfFields[field];
    switch (type) {
      case "simple": {
        if (
          fieldsData[field].showField === false &&
          manadatoryHiddenField.indexOf(field) > -1 &&
          !fieldsData[field].value
        ) {
          console.error(`${field} is required in the configuration`);
          error[field] = `${field} is required in the configuration`;
        } else {
          const fieldValue = checkFieldValueIsIncorrect(
            fieldsData[field].value,
          );
          if (fieldValue.error) {
            console.error(`${field} is not valid`);
            error[`${field}ValErr`] = `${field} is not valid`;
          } else {
            fieldConvertedData[field] = fieldValue;
            fieldsVisibility[field] =
              fieldsData[field].showField === undefined
                ? true
                : fieldsData[field].showField;
          }
        }
        break;
      }
      case "radio": {
        const { showField, value, options } = fieldsData[field];
        if (
          showField === false &&
          manadatoryHiddenField.indexOf(field) > -1 &&
          !value
        ) {
          console.error(`${field} is required in the configuration`);
          error[field] = `${field} is required in the configuration`;
        } else {
          const fieldValue = getValuesForRadio(value, field);
          if (fieldValue.error) {
            console.error(fieldValue.error);
            error[`${field}ValErr`] = fieldValue.error;
          } else {
            fieldConvertedData = { ...fieldConvertedData, ...fieldValue };
            fieldsVisibility[field] =
              showField === undefined ? true : showField;
          }
        }
        break;
      }
    }
  });
  return { error, fieldsVisibility, fieldConvertedData };
};

const setDefaultValuesForFields = (
  fieldConvertedData: any,
  resourceURI: string,
) => {
  const {
    baseOutputFilename = "",
    description = "",
    label = "",
    messageText = "",
    subject = "",
    address = [],
    resultSendType = "SEND",
    outputFormat = ["pdf"],
    outputTimeZone = "Asia/Calcutta",
    startType = "1",
    recurrenceInterval = 1,
    recurrenceIntervalUnit = "DAY",
    startDate = null,
    outputDescription = "",
    folderURI,
  } = fieldConvertedData;

  return {
    ...ScheduleDefaultState,
    baseOutputFilename,
    scheduleJobName: label,
    scheduleJobDescription: description,
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
    },
    repositoryDestination: {
      ...ScheduleDefaultState.repositoryDestination,
      outputDescription,
      folderURI: folderURI
        ? folderURI
        : `/${getUriParts(resourceURI, true).join("/")}`,
      saveToRepository: true,
    },
  };
};

export const getSchedulerData = (scheduleConfig: any) => {
  const { resourceURI, tabs, contextPath, server } = scheduleConfig || {};
  const { tabsData = {}, tabsOrder } = tabs || {};

  // check resourceURI, server, contextPath are provided by user
  let error = checkAvailabilityOfBasicConfig(resourceURI, server, contextPath);
  if (!!getLengthOfObject(error)) {
    return { error };
  }

  // check whether resourceURI is correct and has permission to view.

  const tabsConfig = tabsOrder.length > 0 ? tabsOrder : tabsDefaultOrder;
  const stepsToShow = [],
    tabsToShow = [];
  tabsConfig.map((tab) => {
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
    const tabError = checkRequiredDataForHiddenTabs(
      tab,
      dataForTab?.defaultValues,
    );
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

  const scheduleDefaultValues = schedule.defaultValues || {},
    outputDefaultValues = output.defaultValues || {},
    notificationsDefaultValues = notifications.defaultValues || {},
    parametersDefaultValues = parameters.defaultValues || {};

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
  } = checkFieldDataValidity(inputFieldsInfo);
  if (getLengthOfObject(fieldsErrs)) {
    return { error };
  }

  const scheduleInfo = setDefaultValuesForFields(
    fieldConvertedData,
    resourceURI,
  );

  return {
    scheduleInfo,
    tabsToShow,
    stepsToShow,
    currentActiveTab: tabsConfig[0],
    fieldsVisibility,
  };
};