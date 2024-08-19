import axios from "axios";
import store from "../store/store";
import { getFakeRootRepositoryData } from "../utils/schedulerUtils";

export const checkPermissionOnFolder = async (folder: string) => {
  let csrfToken = await getCSRFToken();
  try {
    const response = await axios.get(
      `${store.getState().schedulerUIConfig.server}/rest_v2/resources${folder}`,
      {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          OWASP_CSRFTOKEN: csrfToken,
        },
      },
    );
    return response.data;
  } catch (error) {
    return { error: "Failed to check permission folder" };
  }
};

export const getUserTimezonesFromService = async () => {
  try {
    const response = await axios.get(
      `${store.getState().schedulerUIConfig.server}/rest_v2/settings/userTimeZones`,
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
      `${store.getState().schedulerUIConfig.server}/rest_v2/settings/alertingSettings`,
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

export const getInputControls = async () => {
  const reportUri = "AI_ML/RevenueDetailReport";
  let csrfToken = await getCSRFToken();
  csrfToken = csrfToken ? csrfToken.split(":")[1] : null;
  try {
    const response = await axios.post(
      `${store.getState().schedulerUIConfig.server}/rest_v2/reports${reportUri}/inputControls/ProductFamily/values/pagination?freshData=false&includeTotalCount=true`,
      {
        reportParameter: [
          {
            name: "ProductFamily",
            offset: 0,
            limit: 100,
            select: "selectedValues",
          },
        ],
      },
      {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          OWASP_CSRFTOKEN: csrfToken,
        },
      },
    );
    return response.data;
  } catch (error) {
    return { error: "Failed to fetch input controls" };
  }
};

export const getCSRFToken = async () => {
  try {
    // noinspection TypeScriptValidateTypes
    const response = await axios.post(
      `${store.getState().schedulerUIConfig.server}/JavaScriptServlet`,
      {},
      {
        headers: {
          "Fetch-Csrf-Token": "1",
        },
      },
    );
    return response.data;
  } catch (error) {
    return { error: "Failed to fetch CSRF token" };
  }
};

export const getRepositoryFolderData = async (folderPath: string) => {
  let csrfToken = await getCSRFToken();
  csrfToken = csrfToken ? csrfToken.split(":")[1] : null;
  try {
    const response = await axios.get(
      `${store.getState().schedulerUIConfig.server}/rest_v2/api/resources?folderUri=${encodeURIComponent(folderPath)}&recursive=false&type=folder&offset=0&limit=5000&forceTotalCount=true&forceFullPage=true`,
      {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          OWASP_CSRFTOKEN: csrfToken,
        },
      },
    );
    return response.data;
  } catch (error) {
    return { error: "Failed to fetch repository folder data" };
  }
};

function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export const getFakeRootDataFromService = async () => {
  let csrfToken = await getCSRFToken();
  csrfToken = csrfToken ? csrfToken.split(":")[1] : null;
  try {
    const response = await axios.get(
      `${store.getState().schedulerUIConfig.server}/flow.html?_flowId=searchFlow&method=getNode&provider=repositoryExplorerTreeFoldersProvider&uri=/&depth=1`,
      {
        withCredentials: true,
        headers: {
          Accept: "text/html",
          OWASP_CSRFTOKEN: csrfToken,
        },
      },
    );
    return getFakeRootRepositoryData(decodeHtml(response.data));
  } catch (error) {
    return { error: "Failed to fetch base folder data" };
  }
};

export const createSchedule = async (scheduleInfo: any) => {
  let csrfToken = await getCSRFToken();
  csrfToken = csrfToken ? csrfToken.split(":")[1] : null;

  return axios.put(
    `${store.getState().schedulerUIConfig.server}/rest_v2/jobs`,
    {
      ...scheduleInfo,
    },
    {
      withCredentials: true,
      headers: {
        Accept: "application/job+json",
        "Content-Type": "application/job+json",
        OWASP_CSRFTOKEN: csrfToken,
      },
    },
  );
};
