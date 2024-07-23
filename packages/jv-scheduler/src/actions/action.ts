import {
  SET_SCHEDULE_APIS_FAILURE_ERROR,
  SET_OUTPUT_FORMATS,
  SET_SCHEDULER_UI_CONFIG,
  SET_USER_TIME_ZONES,
} from "../constants/actionConstants";
import {
  getOutputFormatsFromService,
  getUserTimezonesFromService,
} from "../services/schedulerServices";
import { ISchedulerUIConfig } from "../types/schedulerUIConfigTypes";
import { IApiFailed } from "../types/scheduleType";

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
