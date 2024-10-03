/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { InputControlProperties } from "@jaspersoft/jv-tools";

const isSelect = (props: InputControlProperties) => {
  return props.type === "multiSelect" || props.type === "singleSelect";
};

const getFirstDefaultValueOrArray = (
  props: InputControlProperties & {
    params?: { [key: string]: string[] };
  },
): undefined | boolean | string[] => {
  if (!props || !props.params) {
    return undefined;
  }
  if (props.type === "bool") {
    return props.params?.[props.id]?.at(0) === "true";
  }
  return props.params?.[props.id];
};

/**
 * Get the default value from the properties. The default value will be determined as follows:
 * 1. Check if the "params" is defined in the properties
 * 2. If the "state.value" is defined in the properties
 * 3. If the control is a select control, return an empty array. Otherwise, return an empty string.
 * @param props
 */
export const getDefaultValueFromProps = (
  props: InputControlProperties & {
    params?: { [key: string]: string[] };
  },
): string | boolean | string[] => {
  let defaultValue;
  if (props.params?.[props.id] !== undefined) {
    defaultValue = getFirstDefaultValueOrArray(props);
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
  return isSelect(props) ? [] : props.type === "bool" ? false : "";
};
