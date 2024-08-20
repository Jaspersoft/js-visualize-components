import { Dispatch } from "redux";
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
  SCHEDULE_ERROR_OCCURRED,
  SET_VISIBLE_FIELDS,
} from "../constants/actionConstants";
import { allTabs } from "../constants/schedulerConstants";
import {
  createSchedule,
  getFakeRootDataFromService,
  getOutputFormatsFromService,
  getRepositoryFolderData,
  getUserTimezonesFromService,
} from "../services/schedulerServices";
import { ISchedulerUIConfig } from "../types/schedulerUIConfigTypes";
import {
  IApiFailed,
  IScheduleErrors,
  IScheduleInfo,
  IState,
  IStoreData,
} from "../types/scheduleType";
import {
  getErrorsForCurrentTab,
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

export const setVisibleFields = (fieldsVisibility: any) => {
  return {
    type: SET_VISIBLE_FIELDS,
    payload: { fieldsVisibility },
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
    dispatch(setVisibleFields(schedulerData.fieldsVisibility));

    dispatch(setPropertiesDetails(JSON.parse(JSON.stringify(scheduleInfo))));
  };
};
export const scheduleValidationError = (errors: IScheduleErrors) => {
  return {
    type: SCHEDULE_ERROR_OCCURRED,
    payload: { errors },
  };
};
export const currentTabValidationError = (handleStateChange: () => void) => {
  return async (dispatch: Dispatch, getState: () => IState) => {
    const { currentActiveTab, scheduleInfo: scheduleCurrentStateValues } =
        getState(),
      currentTabValues = getStateOfCurrentActiveTab(
        currentActiveTab,
        scheduleCurrentStateValues,
      );
    handleStateChange();
    dispatch(setStepperProperties(currentTabValues));
    const currentTabErrs = await getErrorsForCurrentTab(
      currentActiveTab,
      scheduleCurrentStateValues,
    );
    dispatch(scheduleValidationError(currentTabErrs));
  };
};

export const allTabValidationError = (
  handleCreateScheduleAPI: (isErrorOccured: boolean) => void,
) => {
  return async (dispatch: Dispatch, getState: () => IState) => {
    const { scheduleInfo: currentState } = getState();
    const currentStateError = await getErrorsForCurrentTab("all", currentState);
    dispatch(scheduleValidationError(currentStateError));
    const isErrPresent = Object.values(currentStateError).some((item) => item);
    if (isErrPresent) {
      dispatch(setVisitedTab([...allTabs]));
      handleCreateScheduleAPI(true);
    } else {
      handleCreateScheduleAPI(false);
    }
  };
};

export const createAlert = (enableCreateBtn: () => void) => {
  return async (dispatch: any, getState: () => IState) => {
    try {
      const { scheduleJobDescription, scheduleJobName, ...rest } =
        getState().scheduleInfo;
      await createSchedule({
        label: scheduleJobName,
        description: scheduleJobDescription,
        ...rest,
      });
      dispatch(setApiFailure({ createScheduleApiFailure: false }));
    } catch (err) {
      dispatch(setApiFailure({ createScheduleApiFailure: true }));
    } finally {
      enableCreateBtn();
    }
  };
};
