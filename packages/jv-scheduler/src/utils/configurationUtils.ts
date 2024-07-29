import {
  stepInfo,
  defaultTabsToShow,
  tabsData,
  tabsDefaultOrder,
  defaultStepInfo,
} from "../constants/schedulerConstants";

const isTabVisible = (config: any) => {
  return !!config?.show;
};

export const getTabsAndStepsToShow = (tabsConfig: any, tabsOrder: string[]) => {
  let tabsToShow = [],
    stepsToShow = [];
  if (Array.isArray(tabsConfig)) {
    tabsToShow = tabsConfig;
    stepsToShow = defaultStepInfo;
  } else {
    tabsOrder.forEach((tab: string) => {
      if (isTabVisible(tabsConfig[tab])) {
        tabsToShow.push(tabsData[tab]);
        stepInfo.push(stepInfo[tab]);
      }
    });
  }
  return { tabsToShow, stepsToShow };
};

export const getTabsConfig = (tabsConfig: any) => {
  const { tabsToShow, stepsToShow } = getTabsAndStepsToShow(
    tabsConfig.tab || defaultTabsToShow,
    tabsConfig.tabsOrder || tabsDefaultOrder,
  );
  return {
    tabsToShow,
    stepsToShow,
  };
};
