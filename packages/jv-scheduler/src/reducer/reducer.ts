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
} from "../constants/actionConstants";
import { defaultState } from "../constants/schedulerConstants";

export const initialState = defaultState;

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TIME_ZONES:
      return {
        ...state,
        userTimeZones: action.payload.userTimeZones,
      };
    case SET_OUTPUT_FORMATS:
      return {
        ...state,
        outputFormats: action.payload.outputFormats,
      };
    case SET_SCHEDULER_UI_CONFIG:
      return {
        ...state,
        schedulerUIConfig: action.payload.schedulerUIConfig,
      };
    case SET_REPOSITORY_FOLDER_DATA:
      return {
        ...state,
        folderData: { ...state.folderData, ...action.payload.folderData },
      };
    case SET_FAKE_ROOT:
      return {
        ...state,
        fakeRoot: action.payload.fakeRoot,
      };
    case SET_PROPERTIES_DETAILS:
      return {
        ...state,
        scheduleInfo: {
          ...state.scheduleInfo,
          ...action.payload?.newScheduleInfo,
        },
      };
    case SET_SCHEDULE_APIS_FAILURE_ERROR:
      return {
        ...state,
        scheduleApisFailure: {
          ...state.scheduleApisFailure,
          ...action.payload?.failedApi,
        },
      };
    case SET_VISITED_TABS:
      return {
        ...state,
        visitedTabs: action.payload?.tabs,
      };
    case SET_ACTIVE_TAB:
      return {
        ...state,
        currentActiveTab: action.payload?.activeTab,
      };
    // case SET_USER_LOCALE:
    //     return {
    //         ...state,
    //         userLocale: action.payload.userLocale
    //     }
    default:
      return state;
  }
};
