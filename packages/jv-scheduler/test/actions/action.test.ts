import configureMockStore from "redux-mock-store";
import {
  setApiFailure,
  setOutputFormats,
  setUserTimeZones,
  setPropertiesDetails,
  setSchedulerUIConfig,
  setRepositoryFolderData,
  setFakeRootData,
  setTabsConfig,
  setVisitedTab,
  setCurrentActiveTab,
  setStepperProperties,
  setVisibleFields,
  scheduleValidationError,
  getOutputFormats,
  getUserTimeZones,
  getFolderData,
  getFakeRootData,
  setParametersTabConfig,
  currentTabValidationError,
  allTabValidationError,
  createScheduleJob,
  parametersTabErrorOrLoading,
} from "../../src/actions/action";
import {
  SET_SCHEDULE_APIS_FAILURE_ERROR,
  SET_OUTPUT_FORMATS,
  SET_USER_TIME_ZONES,
  SET_PROPERTIES_DETAILS,
  SET_SCHEDULER_UI_CONFIG,
  SET_REPOSITORY_FOLDER_DATA,
  SET_FAKE_ROOT,
  SET_TABS_CONFIG,
  SCHEDULE_ERROR_OCCURRED,
  SET_VISITED_TABS,
  SET_ACTIVE_TAB,
  SET_STEPPER_PROPERTIES,
  SET_VISIBLE_FIELDS,
  SET_PARAMETERS_TAB_CONFIG,
  SET_PARAMETERS_TAB_LOADING,
} from "../../src/constants/actionConstants";
import {
  createDummySchedule,
  createSchedule,
  getFakeRootDataFromService,
  getOutputFormatsFromService,
  getRepositoryFolderData,
  getUserTimezonesFromService,
} from "../../src/services/schedulerServices";
import thunk from "redux-thunk";
import { removeRootFolderPath } from "../../src/utils/treeUtils";
import {
  getErrorsForCurrentTab,
  getStateOfCurrentActiveTab,
} from "../../src/utils/schedulerUtils";
import { allTabs } from "../../src/constants/schedulerConstants";

jest.mock("../../src/services/schedulerServices");
jest.mock("../../src/utils/treeUtils", () => ({
  removeRootFolderPath: jest.fn(),
}));
jest.mock("../../src/utils/schedulerUtils", () => ({
  getErrorsForCurrentTab: jest.fn(),
  getStateOfCurrentActiveTab: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Action Creators", () => {
  let store: any;
  let handleStateChange: jest.Mock;
  let handleCreateScheduleAPI: jest.Mock;
  let enableCreateBtn: jest.Mock;

  beforeEach(() => {
    store = mockStore({
      currentActiveTab: "tab1",
      stepperConfiguration: { show: true },
      schedulerUIConfig: {
        events: { scheduleBtnClick: jest.fn() },
        dryRun: false,
      },
      scheduleInfo: {
        scheduleJobDescription: "Test Description",
        scheduleJobName: "Test Name",
        outputFormats: { outputFormat: ["pdf"] },
        mailNotification: { resultSendType: "SEND_ATTACHMENT" },
        repositoryDestination: {},
      },
    });
    handleCreateScheduleAPI = jest.fn();
    handleStateChange = jest.fn();
    enableCreateBtn = jest.fn();
  });

  it("should create an action to set API failure", () => {
    const failedApi = { userOutputFormatApiFailure: true };
    const failedApiName = "userOutputFormatApiFailure";
    const expectedAction = {
      type: SET_SCHEDULE_APIS_FAILURE_ERROR,
      payload: { failedApi, failedApiName },
    };
    expect(setApiFailure(failedApi, failedApiName)).toEqual(expectedAction);
  });
  it("should create an action to set output formats", () => {
    const outputFormats = ["PDF", "HTML"];
    const expectedAction = {
      type: SET_OUTPUT_FORMATS,
      payload: { outputFormats },
    };
    expect(setOutputFormats(outputFormats)).toEqual(expectedAction);
  });
  it("should create an action to set user time zones", () => {
    const timeZones = ["UTC", "PST"];
    const expectedAction = {
      type: SET_USER_TIME_ZONES,
      payload: { userTimeZones: timeZones },
    };
    expect(setUserTimeZones(timeZones)).toEqual(expectedAction);
  });
  it("should create an action to set properties details", () => {
    const scheduleInfo = { someProperty: "someValue" };
    const expectedAction = {
      type: SET_PROPERTIES_DETAILS,
      payload: { newScheduleInfo: scheduleInfo },
    };
    expect(setPropertiesDetails(scheduleInfo)).toEqual(expectedAction);
  });
  it("should create an action to set scheduler UI config", () => {
    const schedulerUIConfig = {
      resourceURI: "/test",
      server: "https://test.com",
      contextPath: "test-pro",
    };
    const expectedAction = {
      type: SET_SCHEDULER_UI_CONFIG,
      payload: { schedulerUIConfig },
    };
    expect(setSchedulerUIConfig(schedulerUIConfig)).toEqual(expectedAction);
  });
  it("should create an action to set repository folder data", () => {
    const folderData = { folder1: "data1", folder2: "data2" };
    const expectedAction = {
      type: SET_REPOSITORY_FOLDER_DATA,
      payload: { folderData },
    };
    expect(setRepositoryFolderData(folderData)).toEqual(expectedAction);
  });
  it("should create an action to set fake root data", () => {
    const fakeRootData = { key: "value" };
    const expectedAction = {
      type: SET_FAKE_ROOT,
      payload: { fakeRoot: fakeRootData },
    };
    expect(setFakeRootData(fakeRootData)).toEqual(expectedAction);
  });
  it("should create an action to set tabs configuration", () => {
    const tabsConfiguration = {
      currentActiveTab: "schedule",
      tabsConfiguration: {
        tabsToShow: [
          {
            key: "schedule",
            label: "Schedule",
            value: "schedule",
          },
          {
            key: "parameters",
            label: "Parameters",
            value: "parameters",
          },
        ],
      },
    };
    const expectedAction = {
      type: SET_TABS_CONFIG,
      payload: tabsConfiguration,
    };
    expect(setTabsConfig(tabsConfiguration)).toEqual(expectedAction);
  });
  it("should create an action to set visited tabs", () => {
    const tabs = ["tab1", "tab2"];
    const expectedAction = {
      type: SET_VISITED_TABS,
      payload: { tabs },
    };
    expect(setVisitedTab(tabs)).toEqual(expectedAction);
  });

  it("should create an action to set the current active tab", () => {
    const activeTab = "schedule";
    const expectedAction = {
      type: SET_ACTIVE_TAB,
      payload: { activeTab },
    };
    expect(setCurrentActiveTab(activeTab)).toEqual(expectedAction);
  });

  it("should create an action to set stepper properties", () => {
    const updatedStepperData = {
      baseOutputFilename: "testFile",
      name: "test",
    };
    const expectedAction = {
      type: SET_STEPPER_PROPERTIES,
      payload: { updatedStepperData },
    };
    expect(setStepperProperties(updatedStepperData)).toEqual(expectedAction);
  });

  it("should create an action to set visible fields", () => {
    const fieldsVisibility = {
      baseOutputFilename: true,
    };
    const expectedAction = {
      type: SET_VISIBLE_FIELDS,
      payload: { fieldsVisibility },
    };
    expect(setVisibleFields(fieldsVisibility)).toEqual(expectedAction);
  });

  it("should create an action for schedule validation error", () => {
    const errors = { folderURI: "someError" };
    const expectedAction = {
      type: SCHEDULE_ERROR_OCCURRED,
      payload: { errors },
    };
    expect(scheduleValidationError(errors)).toEqual(expectedAction);
  });
  it("creates SET_SCHEDULE_APIS_FAILURE_ERROR when fetching output formats fails", async () => {
    const error = { error: "Failed to fetch" };
    (getOutputFormatsFromService as jest.Mock).mockResolvedValue(error);

    const expectedActions = [
      {
        type: SET_SCHEDULE_APIS_FAILURE_ERROR,
        payload: {
          failedApi: { userOutputFormatApiFailure: true },
          failedApiName: "userOutputFormatApiFailure",
        },
      },
    ];

    await store.dispatch(getOutputFormats() as any);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("dispatches SET_OUTPUT_FORMATS and SET_SCHEDULE_APIS_FAILURE_ERROR when fetching output formats is successful", async () => {
    const outputFormats = { dashboard: { outputFormats: ["PDF", "HTML"] } };
    (getOutputFormatsFromService as jest.Mock).mockResolvedValue(outputFormats);

    const expectedActions = [
      { type: SET_OUTPUT_FORMATS, payload: { outputFormats: ["PDF", "HTML"] } },
      {
        type: SET_SCHEDULE_APIS_FAILURE_ERROR,
        payload: {
          failedApi: { userOutputFormatApiFailure: false },
          failedApiName: "",
        },
      },
    ];

    await store.dispatch(getOutputFormats() as any);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("dispatches SET_PROPERTIES_DETAILS and SET_USER_TIME_ZONES when fetching time zones is successful", async () => {
    const timezones = [{ code: "UTC" }, { code: "PST" }];
    (getUserTimezonesFromService as jest.Mock).mockResolvedValue(timezones);

    const expectedActions = [
      {
        type: SET_PROPERTIES_DETAILS,
        payload: { newScheduleInfo: { outputTimeZone: "UTC" } },
      },
      { type: SET_USER_TIME_ZONES, payload: { userTimeZones: timezones } },
      {
        type: SET_SCHEDULE_APIS_FAILURE_ERROR,
        payload: {
          failedApi: { userTimezoneApiFailure: false },
          failedApiName: "",
        },
      },
    ];

    await store.dispatch(getUserTimeZones() as any);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("dispatches SET_PROPERTIES_DETAILS with specified timezone and SET_USER_TIME_ZONES when fetching time zones is successful", async () => {
    const timezones = [{ code: "UTC" }, { code: "PST" }];
    (getUserTimezonesFromService as jest.Mock).mockResolvedValue(timezones);

    const expectedActions = [
      {
        type: SET_PROPERTIES_DETAILS,
        payload: { newScheduleInfo: { outputTimeZone: "PST" } },
      },
      { type: SET_USER_TIME_ZONES, payload: { userTimeZones: timezones } },
      {
        type: SET_SCHEDULE_APIS_FAILURE_ERROR,
        payload: {
          failedApi: { userTimezoneApiFailure: false },
          failedApiName: "",
        },
      },
    ];

    await store.dispatch(getUserTimeZones("PST") as any);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("dispatches SET_SCHEDULE_APIS_FAILURE_ERROR when fetching time zones fails", async () => {
    const error = { error: "Failed to fetch" };
    (getUserTimezonesFromService as jest.Mock).mockResolvedValue(error);

    const expectedActions = [
      {
        type: SET_PROPERTIES_DETAILS,
        payload: { newScheduleInfo: { outputTimeZone: "UTC" } },
      },
      {
        type: SET_SCHEDULE_APIS_FAILURE_ERROR,
        payload: {
          failedApi: { userTimezoneApiFailure: true },
          failedApiName: "userTimezoneApiFailure",
        },
      },
    ];

    await store.dispatch(getUserTimeZones("UTC") as any);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("dispatches SET_REPOSITORY_FOLDER_DATA and SET_SCHEDULE_APIS_FAILURE_ERROR when fetching folder data is successful", async () => {
    const folderPath = "/test/path";
    const repositoryData = {
      resourceLookup: { folder1: "data1", folder2: "data2" },
    };
    (getRepositoryFolderData as jest.Mock).mockResolvedValue(repositoryData);
    (removeRootFolderPath as jest.Mock).mockReturnValue(folderPath);

    const expectedActions = [
      {
        type: SET_REPOSITORY_FOLDER_DATA,
        payload: {
          folderData: { [folderPath]: repositoryData.resourceLookup },
        },
      },
      {
        type: SET_SCHEDULE_APIS_FAILURE_ERROR,
        payload: {
          failedApi: { treeLoadApiFailure: false },
          failedApiName: "",
        },
      },
    ];

    await store.dispatch(getFolderData(folderPath) as any);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("dispatches SET_SCHEDULE_APIS_FAILURE_ERROR when fetching folder data fails", async () => {
    const folderPath = "/test/path";
    const error = { error: "Failed to fetch" };
    (getRepositoryFolderData as jest.Mock).mockResolvedValue(error);
    (removeRootFolderPath as jest.Mock).mockReturnValue(folderPath);

    const expectedActions = [
      {
        type: SET_SCHEDULE_APIS_FAILURE_ERROR,
        payload: {
          failedApi: { treeLoadApiFailure: true },
          failedApiName: "treeLoadApiFailure",
        },
      },
    ];

    await store.dispatch(getFolderData(folderPath) as any);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("dispatches SET_FAKE_ROOT and SET_SCHEDULE_APIS_FAILURE_ERROR when fetching fake root data is successful", async () => {
    const fakeRootData = [{ id: "1", name: "root" }];
    (getFakeRootDataFromService as jest.Mock).mockResolvedValue(fakeRootData);

    const expectedActions = [
      {
        type: SET_SCHEDULE_APIS_FAILURE_ERROR,
        payload: {
          failedApi: { initialTreeDataLoadApiFailure: false },
          failedApiName: "",
        },
      },
      { type: SET_FAKE_ROOT, payload: { fakeRoot: fakeRootData } },
    ];

    await store.dispatch(getFakeRootData() as any);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("dispatches SET_SCHEDULE_APIS_FAILURE_ERROR when fetching fake root data fails", async () => {
    const error = { error: "Failed to fetch" };
    (getFakeRootDataFromService as jest.Mock).mockResolvedValue(error);

    const expectedActions = [
      {
        type: SET_SCHEDULE_APIS_FAILURE_ERROR,
        payload: {
          failedApi: { initialTreeDataLoadApiFailure: true },
          failedApiName: "initialTreeDataLoadApiFailure",
        },
      },
    ];

    await store.dispatch(getFakeRootData() as any);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should create an action to set parameters tab config", () => {
    const expectedAction = {
      type: SET_PARAMETERS_TAB_CONFIG,
      payload: { parametersTabConfig: undefined },
    };
    expect(setParametersTabConfig(undefined)).toEqual(expectedAction);
  });

  it("dispatches SET_STEPPER_PROPERTIES and SCHEDULE_ERROR_OCCURRED when stepper is shown", async () => {
    const currentTabValues = { someTabData: "value" };
    const currentTabErrors = { someError: "error" };

    (getStateOfCurrentActiveTab as jest.Mock).mockReturnValue(currentTabValues);
    (getErrorsForCurrentTab as jest.Mock).mockResolvedValue(currentTabErrors);

    const expectedActions = [
      {
        type: SET_STEPPER_PROPERTIES,
        payload: { updatedStepperData: currentTabValues },
      },
      { type: SCHEDULE_ERROR_OCCURRED, payload: { errors: currentTabErrors } },
    ];

    await store.dispatch(currentTabValidationError(handleStateChange) as any);
    expect(store.getActions()).toEqual(expectedActions);
    expect(handleStateChange).toHaveBeenCalled();
  });

  it("dispatches SCHEDULE_ERROR_OCCURRED when stepper is not shown", async () => {
    store = mockStore({
      currentActiveTab: "tab1",
      scheduleInfo: { someData: "value" },
      stepperConfiguration: { show: false },
    });
    const currentTabErrors = { someError: "error" };

    (getErrorsForCurrentTab as jest.Mock).mockResolvedValue(currentTabErrors);

    const expectedActions = [
      { type: SCHEDULE_ERROR_OCCURRED, payload: { errors: currentTabErrors } },
    ];

    await store.dispatch(currentTabValidationError(handleStateChange) as any);
    expect(store.getActions()).toEqual(expectedActions);
    expect(handleStateChange).toHaveBeenCalled();
  });

  it("dispatches SCHEDULE_ERROR_OCCURRED and SET_VISITED_TABS when errors are present", async () => {
    const currentStateError = { someError: "error" };
    (getErrorsForCurrentTab as jest.Mock).mockResolvedValue(currentStateError);

    const expectedActions = [
      { type: SCHEDULE_ERROR_OCCURRED, payload: { errors: currentStateError } },
      { type: SET_VISITED_TABS, payload: { tabs: allTabs } },
    ];

    await store.dispatch(allTabValidationError(handleCreateScheduleAPI) as any);
    expect(store.getActions()).toEqual(expectedActions);
    expect(handleCreateScheduleAPI).toHaveBeenCalledWith(true);
  });

  it("dispatches SCHEDULE_ERROR_OCCURRED and does not set visited tabs when no errors are present", async () => {
    const currentStateError = { someError: "" };
    (getErrorsForCurrentTab as jest.Mock).mockResolvedValue(currentStateError);

    const expectedActions = [
      { type: SCHEDULE_ERROR_OCCURRED, payload: { errors: currentStateError } },
    ];

    await store.dispatch(allTabValidationError(handleCreateScheduleAPI) as any);
    expect(store.getActions()).toEqual(expectedActions);
    expect(handleCreateScheduleAPI).toHaveBeenCalledWith(false);
  });

  it("dispatches SET_SCHEDULE_APIS_FAILURE_ERROR with false when schedule creation is successful", async () => {
    const jobInfo = { id: "123" };
    (createSchedule as jest.Mock).mockResolvedValue(jobInfo);

    const expectedActions = [
      {
        type: SET_SCHEDULE_APIS_FAILURE_ERROR,
        payload: {
          failedApi: { createScheduleApiFailure: false },
          failedApiName: "",
        },
      },
    ];

    await store.dispatch(createScheduleJob(enableCreateBtn) as any);
    expect(store.getActions()).toEqual(expectedActions);
    expect(
      store.getState().schedulerUIConfig.events.scheduleBtnClick,
    ).toHaveBeenCalledWith(true, jobInfo);
    expect(enableCreateBtn).toHaveBeenCalled();
  });

  it("dispatches SET_SCHEDULE_APIS_FAILURE_ERROR with true when schedule creation fails", async () => {
    const error = new Error("Failed to create schedule");
    (createSchedule as jest.Mock).mockRejectedValue(error);

    const expectedActions = [
      {
        type: SET_SCHEDULE_APIS_FAILURE_ERROR,
        payload: {
          failedApi: { createScheduleApiFailure: true },
          failedApiName: "createScheduleApiFailure",
        },
      },
    ];

    await store.dispatch(createScheduleJob(enableCreateBtn) as any);
    expect(store.getActions()).toEqual(expectedActions);
    expect(
      store.getState().schedulerUIConfig.events.scheduleBtnClick,
    ).toHaveBeenCalledWith(false, error);
    expect(enableCreateBtn).toHaveBeenCalled();
  });

  it("uses createDummySchedule when dryRun is true", async () => {
    store = mockStore({
      schedulerUIConfig: {
        events: { scheduleBtnClick: jest.fn() },
        dryRun: true,
      },
      scheduleInfo: {
        scheduleJobDescription: "Test Description",
        scheduleJobName: "Test Name",
        outputFormats: { outputFormat: ["pdf"] },
        mailNotification: { resultSendType: "SEND_ATTACHMENT" },
        repositoryDestination: {},
      },
    });
    const jobInfo = { id: "123" };
    (createDummySchedule as jest.Mock).mockResolvedValue(jobInfo);

    const expectedActions = [
      {
        type: SET_SCHEDULE_APIS_FAILURE_ERROR,
        payload: {
          failedApi: { createScheduleApiFailure: false },
          failedApiName: "",
        },
      },
    ];

    await store.dispatch(createScheduleJob(enableCreateBtn) as any);
    expect(store.getActions()).toEqual(expectedActions);
    expect(
      store.getState().schedulerUIConfig.events.scheduleBtnClick,
    ).toHaveBeenCalledWith(true, jobInfo);
    expect(enableCreateBtn).toHaveBeenCalled();
  });
  it("should create an action to set parameters tab loading state", () => {
    const parametersTabConfig = { isLoaded: true, isError: false };
    const expectedAction = {
      type: SET_PARAMETERS_TAB_LOADING,
      payload: { parametersTabConfig },
    };

    expect(parametersTabErrorOrLoading(parametersTabConfig)).toEqual(
      expectedAction,
    );
  });

  it("should create an action to set parameters tab error state", () => {
    const parametersTabConfig = { isLoaded: false, isError: true };
    const expectedAction = {
      type: SET_PARAMETERS_TAB_LOADING,
      payload: { parametersTabConfig },
    };

    expect(parametersTabErrorOrLoading(parametersTabConfig)).toEqual(
      expectedAction,
    );
  });
});
