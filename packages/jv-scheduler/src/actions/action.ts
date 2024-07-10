import {
  SET_OUTPUT_FORMATS,
  SET_USER_TIME_ZONES,
} from "../constants/actionConstants";
import {
  getOutputFormatsFromService,
  getUserTimezonesFromService,
} from "../services/schedulerServices";

// export const setUserLocale = (supportedLocale) => {
//    return {
//         type: SET_USER_LOCALE,
//         payload: {
//             userLocale: supportedLocale
//         }
//     }
// }

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

export const getOutputFormats = () => {
  return async (dispatch) => {
    const outputFormats = await getOutputFormatsFromService();
    if (outputFormats.error) {
      // dispatch error action
    } else {
      dispatch(setOutputFormats(outputFormats.dashboard.outputFormats));
    }
  };
};

export const getUserTimeZones = () => {
  return async (dispatch) => {
    const timezones = await getUserTimezonesFromService();
    if (timezones.error) {
      // dispatch error action
    } else {
      dispatch(setUserTimeZones(timezones));
    }
  };
};
