import {
  SET_SCHEDULE_APIS_FAILURE_ERROR,
  SET_OUTPUT_FORMATS,
  SET_REPOSITORY_FOLDER_DATA,
  SET_SCHEDULER_UI_CONFIG,
  SET_USER_TIME_ZONES,
  SET_PROPERTIES_DETAILS,
  SET_FAKE_ROOT,
  SET_VISITED_TABS,
  SET_ACTIVE_TAB,
  SET_STEPPER_PROPERTIES,
  SET_TABS_CONFIG,
} from "../constants/actionConstants";
import {
  getFakeRootDataFromService,
  getOutputFormatsFromService,
  getRepositoryFolderData,
  getUserTimezonesFromService,
} from "../services/schedulerServices";
import { ISchedulerUIConfig } from "../types/schedulerUIConfigTypes";
import { IScheduleInfo, IStoreData } from "../types/schedulerTypes";
import { IApiFailed } from "../types/scheduleType";
import {
  getStateOfCurrentActiveTab,
  getUriParts,
} from "../utils/schedulerUtils";

// export const setUserLocale = (supportedLocale) => {
//    return {
//         type: SET_USER_LOCALE,
//         payload: {
//             userLocale: supportedLocale
//         }
//     }
// }
export const setApiFailure = (failedApi: IApiFailed) => {
  return {
    type: SET_SCHEDULE_APIS_FAILURE_ERROR,
    payload: { failedApi },
  };
};

export const setOutputFormats = (outputFormats) => {
  return {
    type: SET_OUTPUT_FORMATS,
    payload: {
      outputFormats: outputFormats,
    },
  };
};

export const setUserTimeZones = (timeZones) => {
  return {
    type: SET_USER_TIME_ZONES,
    payload: {
      userTimeZones: timeZones,
    },
  };
};

export const setPropertiesDetails = (
  scheduleInfo: IScheduleInfo | IStoreData,
) => {
  return {
    type: SET_PROPERTIES_DETAILS,
    payload: { newScheduleInfo: scheduleInfo },
  };
};

export const setSechedulerUIConfig = (
  schedulerUIConfig: ISchedulerUIConfig,
) => {
  return {
    type: SET_SCHEDULER_UI_CONFIG,
    payload: {
      schedulerUIConfig: schedulerUIConfig,
    },
  };
};

export const setRepositoryFolderData = (folderData) => {
  return {
    type: SET_REPOSITORY_FOLDER_DATA,
    payload: {
      folderData: folderData,
    },
  };
};

export const setFakeRootData = (fakeRootData) => {
  return {
    type: SET_FAKE_ROOT,
    payload: {
      fakeRoot: fakeRootData,
    },
  };
};

export const setTabsConfig = (tabsConfiguration: any) => {
  return {
    type: SET_TABS_CONFIG,
    payload: tabsConfiguration,
  };
};

export const setVisitedTab = (tabs: string[]) => {
  return {
    type: SET_VISITED_TABS,
    payload: { tabs },
  };
};

export const setCurrentActiveTab = (activeTab: string) => {
  return {
    type: SET_ACTIVE_TAB,
    payload: { activeTab },
  };
};

export const setStepperProperties = (updatedStepperData: any) => {
  return {
    type: SET_STEPPER_PROPERTIES,
    payload: { updatedStepperData },
  };
};

export const getOutputFormats = () => {
  return async (dispatch) => {
    const outputFormats = await getOutputFormatsFromService();
    if (outputFormats.error) {
      dispatch(setApiFailure({ userOutputFormatApiFailure: true }));
    } else {
      dispatch(setOutputFormats(outputFormats.dashboard.outputFormats));
      dispatch(setApiFailure({ userOutputFormatApiFailure: false }));
    }
  };
};

export const getUserTimeZones = () => {
  return async (dispatch) => {
    const timezones = await getUserTimezonesFromService();
    if (timezones.error) {
      dispatch(setApiFailure({ userTimezoneApiFailure: true }));
    } else {
      dispatch(setUserTimeZones(timezones));
      dispatch(setApiFailure({ userTimezoneApiFailure: false }));
    }
  };
};

export const getFolderData = (folderPath: string) => {
  return async (dispatch) => {
    let folderName;
    if (folderPath.startsWith("/public")) {
      folderName = folderPath;
    } else {
      const uriParts = getUriParts(folderPath, false);
      uriParts.shift();
      folderName = `/${uriParts.join("/")}`;
    }
    const repositoryData = await getRepositoryFolderData(folderName);
    if (repositoryData.error) {
      // dispatch error action
    } else {
      const folderData = repositoryData.resourceLookup || {};
      dispatch(setRepositoryFolderData({ [folderPath]: folderData }));
    }
  };
};

export const getFakeRootData = () => {
  return async (dispatch) => {
    const getRootData = await getFakeRootDataFromService();
    if (getRootData.error) {
      // dispatch error action
    } else {
      dispatch(setFakeRootData(getRootData));
    }
  };
};

export const currentTabValidator = (newTabVal) => {
  return async (dispatch, getState) => {
    const { currentActiveTab, scheduleInfo } = getState(),
      currentTabValues = getStateOfCurrentActiveTab(
        currentActiveTab,
        scheduleInfo,
      );
    // handleStateChange();
    dispatch(setStepperProperties(currentTabValues));
    dispatch(setCurrentActiveTab(newTabVal));
    // const currentTabErrs = await getErrorsForCurrentTab(currentActiveTab, alertCurrentStateValues);
    // dispatch(alertValidationError(currentTabErrs));
  };
};

export const setInitialPluginState = (schedulerData, schedulerUIConfig) => {
  return async (dispatch) => {
    const { tabsToShow, stepsToShow, scheduleInfo, currentActiveTab } =
      schedulerData;
    dispatch(setSechedulerUIConfig(schedulerUIConfig));
    dispatch(getUserTimeZones());
    dispatch(getOutputFormats());
    dispatch(
      setTabsConfig({
        currentActiveTab,
        tabsConfiguration: { tabsToShow, stepsToShow },
      }),
    );
    dispatch(setPropertiesDetails(scheduleInfo));
  };
};
