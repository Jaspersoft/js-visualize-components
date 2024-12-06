/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { InputControlProperties } from "@jaspersoft/jv-tools";

export const isSelectInputControl = (props: InputControlProperties) => {
  return props.type === "multiSelect" || props.type === "singleSelect";
};

const getFirstDefaultValueOrArray = (
  props: InputControlProperties & {
    params?: { [key: string]: string[] };
  },
): undefined | boolean | string | string[] => {
  if (isSelectInputControl(props)) {
    // this is the only case that returns an ARRAY!
    return props.params?.[props.id];
  }
  if (props.type === "bool") {
    return props.params?.[props.id]?.at(0) === "true";
  }
  return props.params?.[props.id]?.at(0);
};
/**
 * This method will return the values from the options that are selected. The Select InputControls works differently
 * than the other ICs.
 * @param props
 */
const getValuesFromOptions = (props: InputControlProperties): string[] => {
  if (
    props === undefined ||
    props.state === undefined ||
    props.state.options === undefined
  ) {
    return [];
  }
  return props
    .state!.options!.filter((opt) => opt.selected)
    .map((opt) => opt.value);
};

/**
 * Get the default value from the properties or params. The default value will be determined as follows:
 * 1. Check if the "params" is defined in the properties and get the values from it. If it's a Select, then it will
 * return an array. Otherwise, it will return a string.
 * 2. If the IC is a Select and the "state.value.options" is defined in the properties. Then, it will return the
 * values from each option that it's property selected=true.
 * 3. If the "state.value" is defined in the properties. Then, it will return the value from it. If it's a boolean
 * IC, then it will return a boolean. Otherwise, it will return a string.
 * 4. If the code reaches here, means there is no default value set for the IC. The code will set one for it: If the
 * control is a boolean, then the default value is false. Otherwise, it is an empty string.
 * @param props
 */
export const getDefaultValueFromParamsAndProps = (
  props: InputControlProperties & {
    params?: { [key: string]: string[] };
  },
): string | boolean | string[] => {
  let defaultValue;
  if (props.params?.[props.id] !== undefined) {
    defaultValue = getFirstDefaultValueOrArray(props);
  }
  if (defaultValue === undefined && isSelectInputControl(props)) {
    // then we have to get the values from the options returned by the server.
    defaultValue = getValuesFromOptions(props);
  }
  if (defaultValue === undefined && props.state?.value !== undefined) {
    defaultValue =
      props.type === "bool"
        ? props.state?.value === "true"
        : props.state?.value;
  }
  if (defaultValue !== undefined) {
    return defaultValue;
  }
  return props.type === "bool" ? false : "";
};

export const getTheInitialValue = (
  initialValue: undefined | string | string[] | boolean,
) => {
  return initialValue !== undefined && Array.isArray(initialValue)
    ? String(initialValue[0])
    : String(initialValue);
};

export const getTheInitialValueForSingleSelectInputControl = (
  initialValue: undefined | string | string[],
): string | string[] => {
  if (initialValue === undefined) {
    return "";
  }
  if (Array.isArray(initialValue)) {
    if (initialValue.length === 0) {
      return "";
    }
    return initialValue;
  }
  return "";
};
