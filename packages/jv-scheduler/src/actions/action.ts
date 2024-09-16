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
  SET_STEPPER_CONFIG,
  SET_VISUALIZE_DATA,
  SET_PARAMETERS_TAB_LOADING,
} from "../constants/actionConstants";
import { allTabs } from "../constants/schedulerConstants";
import {
  createSchedule,
  getFakeRootDataFromService,
  getOutputFormatsFromService,
  getRepositoryFolderData,
  getUserTimezonesFromService,
} from "../services/schedulerServices";
import {
  IApiFailed,
  IFakeRootData,
  IFieldsVisibility,
  IScheduleErrors,
  IScheduleInfo,
  ISchedulerInitialPluginData,
  SchedulerConfigProps,
  IState,
  IStepperData,
  IStoreData,
  ITabsConfiguration,
} from "../types/scheduleType";
import {
  getErrorsForCurrentTab,
  getStateOfCurrentActiveTab,
} from "../utils/schedulerUtils";
import { removeRootFolderPath } from "../utils/treeUtils";

export const setApiFailure = (
  failedApi: IApiFailed | undefined,
  failedApiName: string,
) => {
  return {
    type: SET_SCHEDULE_APIS_FAILURE_ERROR,
    payload: { failedApi, failedApiName },
  };
};

export const setOutputFormats = (outputFormats: string[]) => {
  return {
    type: SET_OUTPUT_FORMATS,
    payload: {
      outputFormats: outputFormats,
    },
  };
};

export const setUserTimeZones = (timeZones: string[]) => {
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
  schedulerUIConfig: SchedulerConfigProps,
) => {
  return {
    type: SET_SCHEDULER_UI_CONFIG,
    payload: {
      schedulerUIConfig: schedulerUIConfig,
    },
  };
};

export const setRepositoryFolderData = (folderData: {}) => {
  return {
    type: SET_REPOSITORY_FOLDER_DATA,
    payload: {
      folderData: folderData,
    },
  };
};

export const setFakeRootData = (fakeRootData: {}) => {
  return {
    type: SET_FAKE_ROOT,
    payload: {
      fakeRoot: fakeRootData,
    },
  };
};

export const setTabsConfig = (tabsConfiguration?: ITabsConfiguration) => {
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

export const setStepperProperties = (updatedStepperData?: IStepperData) => {
  return {
    type: SET_STEPPER_PROPERTIES,
    payload: { updatedStepperData },
  };
};

export const setVisibleFields = (fieldsVisibility: IFieldsVisibility) => {
  return {
    type: SET_VISIBLE_FIELDS,
    payload: { fieldsVisibility },
  };
};

export const scheduleValidationError = (errors: IScheduleErrors) => {
  return {
    type: SCHEDULE_ERROR_OCCURRED,
    payload: { errors },
  };
};

export const setStepperConfig = (stepperConfiguration: {}) => {
  return {
    type: SET_STEPPER_CONFIG,
    payload: stepperConfiguration,
  };
};
export const setVisualizeObj = (visualize: any) => {
  return {
    type: SET_VISUALIZE_DATA,
    payload: { visualize },
  };
};
export const getOutputFormats = () => {
  return async (dispatch: Dispatch) => {
    const outputFormats = await getOutputFormatsFromService();
    if (outputFormats.error) {
      dispatch(
        setApiFailure(
          { userOutputFormatApiFailure: true },
          "userOutputFormatApiFailure",
        ),
      );
    } else {
      dispatch(setOutputFormats(outputFormats.dashboard.outputFormats));
      dispatch(setApiFailure({ userOutputFormatApiFailure: false }, ""));
    }
  };
};

export const getUserTimeZones = () => {
  return async (dispatch: Dispatch) => {
    const timezones = await getUserTimezonesFromService();
    if (timezones.error) {
      dispatch(
        setApiFailure(
          { userTimezoneApiFailure: true },
          "userTimezoneApiFailure",
        ),
      );
    } else {
      dispatch(setUserTimeZones(timezones));
      dispatch(setApiFailure({ userTimezoneApiFailure: false }, ""));
    }
  };
};

export const getFolderData = (folderPath: string) => {
  return async (dispatch: Dispatch) => {
    const repositoryData = await getRepositoryFolderData(
      removeRootFolderPath(folderPath),
    );
    if (repositoryData.error) {
      dispatch(
        setApiFailure({ treeLoadApiFailure: true }, "treeLoadApiFailure"),
      );
    } else {
      const folderData = repositoryData.resourceLookup || {};
      dispatch(setRepositoryFolderData({ [folderPath]: folderData }));
      dispatch(setApiFailure({ treeLoadApiFailure: false }, ""));
    }
  };
};

export const getFakeRootData = () => {
  return async (dispatch: Dispatch) => {
    const getRootData: IFakeRootData[] | { error?: string } =
      await getFakeRootDataFromService();
    if (getRootData && "error" in getRootData && getRootData.error) {
      dispatch(
        setApiFailure(
          { initialTreeDataLoadApiFailure: true },
          "initialTreeDataLoadApiFailure",
        ),
      );
    } else {
      dispatch(setApiFailure({ initialTreeDataLoadApiFailure: false }, ""));
      dispatch(setFakeRootData(getRootData));
    }
  };
};

export const currentTabValidator = (newTabVal: string) => {
  return async (dispatch: Dispatch, getState: any) => {
    const { currentActiveTab, scheduleInfo, stepperConfiguration } = getState(),
      currentTabValues = getStateOfCurrentActiveTab(
        currentActiveTab,
        scheduleInfo,
      );
    // handleStateChange();
    if (stepperConfiguration.show)
      dispatch(setStepperProperties(currentTabValues));
    dispatch(setCurrentActiveTab(newTabVal));
    // const currentTabErrs = await getErrorsForCurrentTab(currentActiveTab, alertCurrentStateValues);
    // dispatch(alertValidationError(currentTabErrs));
  };
};

export const setInitialPluginState = (
  schedulerData: ISchedulerInitialPluginData,
  schedulerUIConfig: SchedulerConfigProps,
  visualize: any,
) => {
  return async (dispatch: any) => {
    const {
      tabsToShow,
      stepsToShow,
      scheduleInfo,
      currentActiveTab,
      showStepper,
      stepperDefaultState,
    } = schedulerData;
    dispatch(setSechedulerUIConfig(schedulerUIConfig));
    dispatch(getUserTimeZones());
    dispatch(getOutputFormats());
    dispatch(
      setTabsConfig({
        currentActiveTab,
        tabsConfiguration: { tabsToShow, stepsToShow },
      }),
    );
    dispatch(setStepperProperties(stepperDefaultState));
    dispatch(setStepperConfig({ show: showStepper }));
    dispatch(setVisibleFields(schedulerData.fieldsVisibility));
    dispatch(setVisualizeObj(visualize));
    dispatch(setPropertiesDetails(JSON.parse(JSON.stringify(scheduleInfo))));
  };
};

export const currentTabValidationError = (handleStateChange: () => void) => {
  return async (dispatch: Dispatch, getState: () => IState) => {
    const {
        currentActiveTab,
        scheduleInfo: scheduleCurrentStateValues,
        stepperConfiguration,
      } = getState(),
      currentTabValues = getStateOfCurrentActiveTab(
        currentActiveTab,
        scheduleCurrentStateValues,
      );
    handleStateChange();
    if (stepperConfiguration?.show)
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

export const createScheduleJob = (enableCreateBtn: () => void) => {
  return async (dispatch: Dispatch, getState: () => IState) => {
    try {
      const {
        scheduleJobDescription,
        scheduleJobName,
        outputFormats,
        ...rest
      } = getState().scheduleInfo;
      const { outputFormat } = outputFormats;
      const capitlizedOutputFormat = outputFormat.map((item) =>
        item.toUpperCase(),
      );
      await createSchedule({
        label: scheduleJobName,
        description: scheduleJobDescription,
        outputFormats: {
          outputFormat: capitlizedOutputFormat,
        },
        ...rest,
      });
      dispatch(setApiFailure({ createScheduleApiFailure: false }, ""));
    } catch (err) {
      dispatch(
        setApiFailure(
          { createScheduleApiFailure: true },
          "createScheduleApiFailure",
        ),
      );
    } finally {
      enableCreateBtn();
    }
  };
};

export const parametersTabErrorOrLoading = (parametersTabConfig: {
  isLoaded: boolean;
  isError: boolean;
}) => {
  return {
    type: SET_PARAMETERS_TAB_LOADING,
    payload: { parametersTabConfig },
  };
};
