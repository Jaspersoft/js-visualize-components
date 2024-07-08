import {SET_OUTPUT_FORMATS, SET_USER_TIME_ZONES} from "../constants/actionConstants";

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
            outputFormats: outputFormats
        }
    }
}

export const setUserTimeZones = (timeZones) => {
    return {
        type: SET_USER_TIME_ZONES,
        payload: {
            userTimeZones: timeZones
        }
    }
}