import {
  SET_OUTPUT_FORMATS,
  SET_SCHEDULE_APIS_FAILURE_ERROR,
  SET_SCHEDULER_UI_CONFIG,
  SET_USER_TIME_ZONES,
} from "../constants/actionConstants";

export const initialState = {
  userTimeZones: [],
  outputFormats: [],
  schedulerUIConfig: {},
  folderData: {},
  scheduleApisFailure: {
    userTimezoneApiFailure: false,
    userOutputFormatApiFailure: false,
  },
};

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
    case SET_SCHEDULE_APIS_FAILURE_ERROR:
      return {
        ...state,
        scheduleApisFailure: {
          ...state.scheduleApisFailure,
          ...action.payload?.failedApi,
        },
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
