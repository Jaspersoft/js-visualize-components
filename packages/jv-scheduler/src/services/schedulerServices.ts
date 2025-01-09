/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import axios from "axios";
import store from "../store/store";
import { IState } from "../types/scheduleType";
import { PUBLIC_FOLDER, ROOT_FOLDER } from "../constants/schedulerConstants";

const getServer = () => {
  return `${(store.getState() as IState)?.visualize.server}`;
};

const computePermissionMask = (extra: { [key: string]: any }) => {
  let mask = 2;
  extra.isWritable && (mask = mask | 4);
  extra.isRemovable && (mask = mask | 16);
  extra.isAdministrable && (mask = 1);
  return mask;
};

const extractRootLevelDataFromHtmlResponse = (html: string) => {
  // The length for '<div id='treeNodeText'>' is 23:
  const START_DIV_LENGTH = 23;
  // The length for '</div>' is 6:
  const END_DIV_LENGTH = 6;
  // Length for start + end is 29:
  const WRAPPING_DIV_LENGTH = 29;

  const htmlTrimmed = html.trim();
  if (htmlTrimmed.length <= WRAPPING_DIV_LENGTH) {
    return {};
  }
  const jsonAsText = htmlTrimmed.substring(
    START_DIV_LENGTH,
    htmlTrimmed.length - END_DIV_LENGTH,
  );
  return JSON.parse(jsonAsText);
};

const getFakeRootRepositoryData = (data: string) => {
  const extractedData: {
    children: any[];
    label: string;
    extra: { [key: string]: any };
  } = extractRootLevelDataFromHtmlResponse(data);
  const publicFolder = extractedData.children.find(
      (item: any) => item.uri === PUBLIC_FOLDER,
    ),
    fakeRoot = [
      {
        id: ROOT_FOLDER,
        label: extractedData.label,
        uri: "/",
        resourceType: "folder",
        permissionMask: computePermissionMask(extractedData.extra),
      },
    ];
  if (publicFolder) {
    fakeRoot.push({
      id: PUBLIC_FOLDER,
      label: publicFolder.label,
      uri: PUBLIC_FOLDER,
      resourceType: "folder",
      permissionMask: computePermissionMask(publicFolder.extra),
    });
  }
  return fakeRoot;
};

export const checkPermissionOnResource = async (
  resource: string,
  server?: string,
) => {
  try {
    const response = await axios.get(
      `${server ? server : getServer()}/rest_v2/resources${resource}`,
      {
        withCredentials: true,
        headers: {
          Accept: "application/json",
        },
      },
    );
    return response.data;
  } catch (error) {
    return { error: "Failed to check permission folder" };
  }
};

export const getUserTimezonesFromService = async (server?: string) => {
  try {
    const response = await axios.get(
      `${server ? server : getServer()}/rest_v2/settings/userTimeZones`,
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

export const getOutputFormatsFromService = async (server?: string) => {
  try {
    const response = await axios.get(
      `${server ? server : getServer()}/rest_v2/settings/alertingSettings`,
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

export const getRepositoryFolderData = async (folderPath: string) => {
  try {
    const response = await axios.get(
      `${getServer()}/rest_v2/api/resources?folderUri=${encodeURIComponent(folderPath)}&recursive=false&type=folder&offset=0&limit=5000&forceTotalCount=true&forceFullPage=true`,
      {
        withCredentials: true,
        headers: {
          Accept: "application/json",
        },
      },
    );
    return response.data;
  } catch (error) {
    return { error: "Failed to fetch repository folder data" };
  }
};

function decodeHtml(html: string) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export const getFakeRootDataFromService = async () => {
  try {
    const response = await axios.get(
      `${getServer()}/flow.html?_flowId=searchFlow&method=getNode&provider=repositoryExplorerTreeFoldersProvider&uri=/&depth=1`,
      {
        withCredentials: true,
        headers: {
          Accept: "text/html",
        },
      },
    );
    return getFakeRootRepositoryData(decodeHtml(response.data));
  } catch (error) {
    return { error: "Failed to fetch base folder data" };
  }
};

export const createSchedule = async (scheduleInfo: any) => {
  return axios.put(
    `${getServer()}/rest_v2/jobs`,
    {
      ...scheduleInfo,
    },
    {
      withCredentials: true,
      headers: {
        Accept: "application/job+json",
        "Content-Type": "application/job+json",
        "x-requested-with": "XMLHttpRequest, OWASP CSRFGuard Project",
        "X-Remote-Domain": getServer(),
        "X-Suppress-Basic": "true",
      },
    },
  );
};

export const createDummySchedule = async (scheduleInfo: any) => {
  return Promise.resolve(scheduleInfo);
};
