/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { InputControlProperties } from "@jaspersoft/jv-tools";

const isSelect = (props: InputControlProperties) => {
  return props.type === "multiSelect" || props.type === "singleSelect";
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
): string | string[] => {
  let defaultValue;
  if (props.params?.[props.id]) {
    defaultValue = props.params[props.id];
  }
  if (!defaultValue && props.state?.value) {
    defaultValue = props.state?.value;
  }
  if (defaultValue) {
    return defaultValue;
  }
  return isSelect(props) ? [] : "";
};
