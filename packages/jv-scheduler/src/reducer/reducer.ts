import {
  SET_OUTPUT_FORMATS,
  SET_USER_TIME_ZONES,
} from "../constants/actionConstants";

export const initialState = {
  userTimeZones: [],
  outputFormats: [],
  // userLocale: []
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TIME_ZONES:
      return {
        ...state,
        userTimeZones: action.payload.timezones,
      };
    case SET_OUTPUT_FORMATS:
      return {
        ...state,
        outputFormats: action.payload.outputFormats,
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
