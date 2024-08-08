import {
  stepInfo,
  tabsInfo,
  tabsDefaultOrder,
  ScheduleDefaultState,
  simpleTriggerState,
  SCHEDULE_TAB,
  PARAMETERS_TAB,
  OUTPUT_TAB,
  NOTIFICATIONS_TAB,
  manadatoryHiddenField,
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

const checkHiddenFieldData = (fieldsData: any) => {
  const error = {},
    fieldsVisibility = {};
  Object.keys(fieldsData).forEach((field) => {
    if (
      fieldsData[field].showField === false &&
      manadatoryHiddenField.indexOf(field) > -1 &&
      !fieldsData[field].value
    ) {
      console.error(`${field} is required in the configuration`);
      error[field] = `${field} is required in the configuration`;
    } else {
      fieldsVisibility[field] =
        fieldsData[field].showField === undefined
          ? true
          : fieldsData[field].showField;
    }
  });
  return { error, fieldsVisibility };
};

export const getSchedulerData = (scheduleConfig: any) => {
  const { resourceURI, tabs, contextPath, server } = scheduleConfig || {};
  const { tabsData = {}, tabsOrder } = tabs || {};
  let error = checkAvailabilityOfBasicConfig(resourceURI, server, contextPath);
  // check resourceURI, server, contextPath are provided by user
  if (!!getLengthOfObject(error)) {
    return { error };
  }

  // check whether resourceURI is correct and has permission to view.

  const tabsConfig = tabsOrder || tabsDefaultOrder;

  const stepsToShow = [],
    tabsToShow = [];
  tabsConfig.map((tab) => {
    stepsToShow.push(stepInfo[tab]);
  });
  tabsConfig.map((tab) => {
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
    if (!!getLengthOfObject(tabError)) {
      error[tab] = checkRequiredDataForHiddenTabs(
        tab,
        dataForTab?.defaultValues,
      );
    }
  });
  if (!!getLengthOfObject(error)) {
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

  const { error: fieldsErrs, fieldsVisibility } =
    checkHiddenFieldData(inputFieldsInfo);
  if (!!getLengthOfObject(fieldsErrs)) {
    return { error };
  }

  const {
    baseOutputFilename,
    outputDescription,
    outputFormat,
    outputTimeZone,
  } = outputDefaultValues;
  const { address, messageText, subject, reportAccessType } =
    notificationsDefaultValues;
  const {
    label,
    description,
    startTime,
    recurrenceInterval,
    recurrenceIntervalUnit,
  } = scheduleDefaultValues;
  const {
    value: resultSendType,
    folderURI,
    saveToRepository,
  } = reportAccessType || {};
  const { startType, startDate } = startTime || {};

  const scheduleInfo = {
    ...ScheduleDefaultState,
    baseOutputFilename: baseOutputFilename?.value || "",
    scheduleJobDescription: description?.value || "",
    scheduleJobName: label?.value || "",
    mailNotification: {
      messageText: messageText?.value || "",
      subject: subject?.value || "",
      toAddresses: {
        address: address?.value || [],
      },
      resultSendType: resultSendType || "SEND",
    },
    outputFormats: {
      outputFormat: outputFormat?.value || ["pdf"],
    },
    outputTimeZone: outputTimeZone?.value || "Asia/Calcutta",
    trigger: {
      simpleTrigger: {
        ...simpleTriggerState,
        startType: startType?.value || 1,
        recurrenceInterval: recurrenceInterval?.value || 1,
        recurrenceIntervalUnit: recurrenceIntervalUnit?.value || "DAY",
        startDate: startDate?.value || null,
      },
    },
    repositoryDestination: {
      ...ScheduleDefaultState.repositoryDestination,
      outputDescription: outputDescription?.value || "",
      folderURI:
        folderURI?.value || `/${getUriParts(resourceURI, true).join("/")}`,
      saveToRepository: true,
    },
  };

  return {
    scheduleInfo,
    tabsToShow,
    stepsToShow,
    currentActiveTab: tabsConfig[0],
    fieldsVisibility,
  };
};
