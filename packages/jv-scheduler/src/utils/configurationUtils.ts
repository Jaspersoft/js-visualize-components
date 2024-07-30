import {
  stepInfo,
  defaultTabsToShow,
  tabsData,
  tabsDefaultOrder,
  ScheduleDefaultState,
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
    config.tabs.tabsData || defaultTabsToShow,
    config.tabs.tabsOrder || tabsDefaultOrder,
  );
  return {
    tabsToShow,
    stepsToShow,
    currentActiveTab: config.tabs.activeTab || tabsToShow[0].value,
  };
};

export const getSchedulerData = (resourceUri: string) => {
  return {
    ...ScheduleDefaultState,
    repositoryDestination: {
      ...ScheduleDefaultState.repositoryDestination,
      folderURI: `/${getUriParts(resourceUri, true).join("/")}`,
    },
  };
};
