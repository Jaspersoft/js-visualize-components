import {
  stepInfo,
  defaultTabsToShow,
  tabsData,
  tabsDefaultOrder,
  ScheduleDefaultState,
  simpleTriggerState,
  SCHEDULE_TAB,
  PARAMETERS_TAB,
  OUTPUT_TAB,
  NOTIFICATIONS_TAB,
} from "../constants/schedulerConstants";
import { getUriParts } from "./schedulerUtils";

const isTabVisible = (config: any) => {
  return !!config?.show;
};

export const getTabsAndStepsToShow = (tabsConfig: any, tabsOrder: string[]) => {
  let tabsToShow = [],
    stepsToShow = [];
  if (Array.isArray(tabsConfig)) {
    tabsToShow = tabsOrder.map((tab) => tabsData[tab]);
    stepsToShow = tabsOrder.map((tab) => stepInfo[tab]);
  } else {
    tabsOrder.forEach((tab: string) => {
      if (isTabVisible(tabsConfig[tab])) {
        tabsToShow.push(tabsData[tab]);
        stepsToShow.push(stepInfo[tab]);
      }
    });
  }
  return { tabsToShow, stepsToShow };
};

export const getTabsConfig = (config: any) => {
  const { tabsToShow, stepsToShow } = getTabsAndStepsToShow(
    config.tabs?.tabsData || defaultTabsToShow,
    config.tabs?.tabsOrder || tabsDefaultOrder,
  );
  let currentActiveTab;
  if (
    config.tabs?.activeTab &&
    tabsToShow.filter((tab) => tab.value === config.tabs.activeTab).length
  ) {
    currentActiveTab = config.tabs?.activeTab;
  } else {
    currentActiveTab = tabsToShow[0].value;
  }
  return {
    tabsToShow,
    stepsToShow,
    currentActiveTab,
  };
};

const checkForStringOrNumber = (element) => {
  return (
    typeof element === "string" ||
    (typeof element === "number" && !isNaN(element))
  );
};

const getRequiredFiledData = (fieldName: string, tabData: any) => {
  switch (fieldName) {
    case SCHEDULE_TAB: {
      const { label } = tabData;
      if (!label) {
        console.error(
          "Value for label is required in the configuration when schedule tab is hidden",
        );
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
      }
      break;
    }
    case NOTIFICATIONS_TAB: {
      const { address, subject } = tabData;
      if (!address || !subject) {
        console.error(
          "Value for address and subject is required in the configuration when notifications tab is hidden",
        );
      } else if (Array.isArray(address) || !checkForStringOrNumber(address)) {
        console.error(
          "Value for address should be a string or number or array of strings or numbers",
        );
      }
      break;
    }
  }
};

export const checkAllTheHiddenTabsValuesPresent = (
  tabsToShow: string[],
  tabsData: any,
) => {
  tabsToShow.forEach((tab) => {
    if (!isTabVisible(tabsData[tab])) {
      getRequiredFiledData(tab, tabsData[tab].defaultValues);
    }
  });
};

export const getSchedulerData = (resourceUri: string, tabsData: any) => {
  const {
    schedule = {},
    output = {},
    notifications = {},
    parameters = {},
  } = tabsData || {};
  const schduleDefaultValues = schedule.defaultValues || {},
    outputDefaultValues = output.defaultValues || {},
    notificationsDefaultValues = notifications.defaultValues || {},
    parametersDefaultValues = parameters.defaultValues || {};
  const {
    baseOutputFilename,
    outputDescription,
    outputFormat,
    outputTimeZone,
  } = outputDefaultValues;
  const { address, messageText, subject, reportAccessType } =
    notificationsDefaultValues;
  const { label, description, recurrence, startTime } = schduleDefaultValues;
  const { recurrenceInterval, recurrenceIntervalUnit } = recurrence || {};
  const {
    value: resultSendType,
    folderURI,
    saveToRepository,
  } = reportAccessType || {};
  const { startType, startDate } = startTime || {};

  return {
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
      folderURI:
        folderURI?.value || `/${getUriParts(resourceUri, true).join("/")}`,
      saveToRepository: true,
    },
  };
};
