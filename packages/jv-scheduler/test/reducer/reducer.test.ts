import { rootReducer, initialState } from "../../src/reducer/reducer";
import {
  SET_OUTPUT_FORMATS,
  SET_SCHEDULE_APIS_FAILURE_ERROR,
  SET_REPOSITORY_FOLDER_DATA,
  SET_SCHEDULER_UI_CONFIG,
  SET_USER_TIME_ZONES,
  SET_PROPERTIES_DETAILS,
  SET_FAKE_ROOT,
  SET_VISITED_TABS,
  SET_ACTIVE_TAB,
  SET_STEPPER_PROPERTIES,
  SET_TABS_CONFIG,
  SET_VISIBLE_FIELDS,
  SCHEDULE_ERROR_OCCURRED,
  SET_STEPPER_CONFIG,
  SET_VISUALIZE_DATA,
  SET_PARAMETERS_TAB_LOADING,
  SET_PARAMETERS_TAB_CONFIG,
} from "../../src/constants/actionConstants";

describe("rootReducer", () => {
  it("should return the initial state", () => {
    expect(rootReducer(undefined, { type: "", payload: {} })).toEqual(
      initialState,
    );
  });

  it("should handle SET_USER_TIME_ZONES", () => {
    const action = {
      type: SET_USER_TIME_ZONES,
      payload: { userTimeZones: [{ code: "UTC", description: "UTC" }] },
    };
    const expectedState = {
      ...initialState,
      userTimeZones: action.payload.userTimeZones,
    };
    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SET_OUTPUT_FORMATS", () => {
    const action = {
      type: SET_OUTPUT_FORMATS,
      payload: { outputFormats: ["pdf"] },
    };
    const expectedState = {
      ...initialState,
      outputFormats: action.payload.outputFormats,
    };
    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SET_SCHEDULER_UI_CONFIG", () => {
    const action = {
      type: SET_SCHEDULER_UI_CONFIG,
      payload: { schedulerUIConfig: { server: "localhost" } },
    };
    const expectedState = {
      ...initialState,
      schedulerUIConfig: action.payload.schedulerUIConfig,
    };
    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SET_REPOSITORY_FOLDER_DATA", () => {
    const action = {
      type: SET_REPOSITORY_FOLDER_DATA,
      payload: { folderData: { folder: "data" } },
    };
    const expectedState = {
      ...initialState,
      folderData: { ...initialState.folderData, ...action.payload.folderData },
    };
    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SET_FAKE_ROOT", () => {
    const action = {
      type: SET_FAKE_ROOT,
      payload: { fakeRoot: { id: "root" } },
    };
    const expectedState = {
      ...initialState,
      fakeRoot: action.payload.fakeRoot,
    };
    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SET_PROPERTIES_DETAILS", () => {
    const action = {
      type: SET_PROPERTIES_DETAILS,
      payload: { newScheduleInfo: { name: "test" } },
    };
    const expectedState = {
      ...initialState,
      scheduleInfo: {
        ...initialState.scheduleInfo,
        ...action.payload.newScheduleInfo,
      },
    };
    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SET_SCHEDULE_APIS_FAILURE_ERROR", () => {
    const action = {
      type: SET_SCHEDULE_APIS_FAILURE_ERROR,
      payload: { failedApi: { error: "error" }, failedApiName: "apiName" },
    };
    const expectedState = {
      ...initialState,
      scheduleApisFailure: {
        ...initialState.scheduleApisFailure,
        ...action.payload.failedApi,
      },
      lastApiCalledFailed: action.payload.failedApiName,
    };
    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SET_VISITED_TABS", () => {
    const action = { type: SET_VISITED_TABS, payload: { tabs: ["tab1"] } };
    const expectedState = { ...initialState, visitedTabs: action.payload.tabs };
    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SET_ACTIVE_TAB", () => {
    const action = { type: SET_ACTIVE_TAB, payload: { activeTab: "tab1" } };
    const expectedState = {
      ...initialState,
      currentActiveTab: action.payload.activeTab,
    };
    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SET_STEPPER_PROPERTIES", () => {
    const action = {
      type: SET_STEPPER_PROPERTIES,
      payload: { updatedStepperData: { step: 1 } },
    };
    const expectedState = {
      ...initialState,
      stepperState: {
        ...initialState.stepperState,
        ...action.payload.updatedStepperData,
      },
    };
    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SET_STEPPER_CONFIG", () => {
    const action = { type: SET_STEPPER_CONFIG, payload: { show: true } };
    const expectedState = {
      ...initialState,
      stepperConfiguration: action.payload,
    };
    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SET_TABS_CONFIG", () => {
    const action = {
      type: SET_TABS_CONFIG,
      payload: {
        currentActiveTab: "tab1",
        tabsConfiguration: { tabsToShow: [] },
      },
    };
    const expectedState = {
      ...initialState,
      currentActiveTab: action.payload.currentActiveTab,
      tabsConfiguration: action.payload.tabsConfiguration,
    };
    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SET_VISIBLE_FIELDS", () => {
    const action = {
      type: SET_VISIBLE_FIELDS,
      payload: { fieldsVisibility: { field: true } },
    };
    const expectedState = {
      ...initialState,
      fieldsVisibility: {
        ...initialState.fieldsVisibility,
        ...action.payload.fieldsVisibility,
      },
    };
    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SCHEDULE_ERROR_OCCURRED", () => {
    const action = {
      type: SCHEDULE_ERROR_OCCURRED,
      payload: { errors: { error: "error" } },
    };
    const expectedState = {
      ...initialState,
      scheduleErrors: {
        ...initialState.scheduleErrors,
        ...action.payload.errors,
      },
    };
    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SET_VISUALIZE_DATA", () => {
    const action = { type: SET_VISUALIZE_DATA, payload: { visualize: true } };
    const expectedState = {
      ...initialState,
      visualize: action.payload.visualize,
    };
    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SET_PARAMETERS_TAB_LOADING", () => {
    const action = {
      type: SET_PARAMETERS_TAB_LOADING,
      payload: { parametersTabConfig: { isLoaded: true, isError: false } },
    };
    const expectedState = {
      ...initialState,
      parametersTabLoading: action.payload.parametersTabConfig,
    };
    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SET_PARAMETERS_TAB_CONFIG", () => {
    const action = {
      type: SET_PARAMETERS_TAB_CONFIG,
      payload: { parametersTabConfig: { config: "config" } },
    };
    const expectedState = {
      ...initialState,
      parametersTabConfig: action.payload.parametersTabConfig,
    };
    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });
});
