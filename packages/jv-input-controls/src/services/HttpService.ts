/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */
import { InputControlProperties } from "@jaspersoft/jv-tools";
import { getParamsForICCascadingReq } from "../utils/StringUtils";

const formatValueForIc = (ic: InputControlProperties) => {
  if (Array.isArray(ic.state!.value!)) {
    return ic.state!.value!.map((value) => value.toString());
  } else {
    return [ic.state!.value!.toString()];
  }
};

const extractDependenciesValues = (
  dependencies: string[],
  inputControls: InputControlProperties[],
) => {
  let dependenciesBody: { [x: string]: string[] } = {};
  for (const slaveDep of dependencies) {
    const icFromState = inputControls.find(({ id }) => {
      return id === slaveDep;
    });
    dependenciesBody[slaveDep] = formatValueForIc(icFromState!);
  }
  return dependenciesBody;
};

const getICCascadingOptionsForRequest = (
  inputControls: InputControlProperties[],
  icUpdated: InputControlProperties,
  server: string,
  uri: string,
): { url: string; options: RequestInit } => {
  const slaveStr = getParamsForICCascadingReq(icUpdated.slaveDependencies!);
  const url =
    server +
    "/rest_v2/reports" +
    uri +
    "/inputControls/" +
    slaveStr +
    "/values?freshData=false&includeTotalCount=true";
  const reqBody = {
    ...extractDependenciesValues(icUpdated.masterDependencies!, inputControls),
    ...extractDependenciesValues(icUpdated.slaveDependencies!, inputControls),
    [icUpdated.id]: [...formatValueForIc(icUpdated)],
  };
  return {
    url,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Remote-Domain": window.location.origin,
        "X-Suppress-Basic": "true",
      },
      body: JSON.stringify(reqBody),
      credentials: "include",
    },
  };
};

export const doRequest = (
  url: string,
  options: RequestInit,
): Promise<Response> => {
  return fetch(url, options);
};

export const fetchCascadingICs = ({
  inputControls,
  icUpdated,
  server,
  uri,
}: {
  inputControls: InputControlProperties[];
  icUpdated: InputControlProperties;
  server: string;
  uri: string;
}): Promise<Response> => {
  const { url, options } = getICCascadingOptionsForRequest(
    inputControls,
    icUpdated,
    server,
    uri,
  );
  return doRequest(url, options);
};
