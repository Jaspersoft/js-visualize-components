/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { VisualizeUriConfig } from "../../../";
export const URI_LOCATION_FOR_VIZ = "/client/visualize.js";

export const getDomainFromUri = (uri: string | VisualizeUriConfig): string => {
  if (typeof uri !== "string") {
    // it means the user provided a configuration for visualize.
    const server = uri.server.endsWith("/")
      ? uri.server.slice(0, -1)
      : uri.server;
    const contextPath = uri.contextPath.startsWith("/")
      ? uri.contextPath
      : `/${uri.contextPath}`;
    return `${server}${contextPath}`;
  }
  // it means the user provided a string for JRS. Let's assume the location for Viz it's always the same.
  // TODO: to verify the ending for VIZ.js URL -- URI_LOCATION_FOR_VIZ
  try {
    const [serverInfo] = uri.split(URI_LOCATION_FOR_VIZ);
    const url = new URL(serverInfo);
    return `${url.protocol}//${url.host}${url.pathname}`;
  } catch (error) {
    console.error(`Invalid URI provided: ${uri}. Error: `, error);
    return "";
  }
};
