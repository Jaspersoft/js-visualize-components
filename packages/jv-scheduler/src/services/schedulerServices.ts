import axios from "axios";

export const getUserTimezonesFromService = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/jasperserver-pro/rest_v2/settings/userTimeZones",
      {
        headers: {
          Accept: "application/json",
        },
      },
    );
    return response.data;
  } catch (error) {
    return { error: "Failed to fetch user timezones" };
  }
};

export const getOutputFormatsFromService = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/jasperserver-pro/rest_v2/settings/alertingSettings",
      {
        headers: {
          Accept: "application/json",
        },
      },
    );
    return response.data;
  } catch (error) {
    return { error: "Failed to fetch output options" };
  }
};

// export const getSupportedLocale = async() => {
//   try {
//     const response = await axios.get("http://localhost:8080/jasperserver-pro/rest_v2/settings/visualizeSettings", {
//       headers: {
//         'Accept': 'application/json'
//       }
//     });
//     return response.data.availableLocales;
//   } catch (error) {
//     return { error: 'Failed to fetch output options' };
//   }
// }

export const getInputControls = async () => {
  const reportUri = "AI_ML/RevenueDetailReport";
  try {
    const response = await axios.get(
      `http://localhost:8080/jasperserver-pro/rest_v2/reports${reportUri}/inputControls/ProductFamily/values/pagination?freshData=false&includeTotalCount=true`,
      {
        headers: {
          Accept: "application/json",
        },
      },
    );
    return response.data;
  } catch (error) {
    return { error: "Failed to fetch input controls" };
  }
};
