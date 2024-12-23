/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { InputControlOption } from "@jaspersoft/jv-tools";

export const generateValueBasedOnOptions = (
  options: InputControlOption[],
  value: string | string[],
) => {
  let valueUpdated: string[] | null = null;
  if (options === undefined) {
    return null;
  }
  const selectedOnes: InputControlOption[] = options.filter(
    ({ selected }) => selected,
  );
  const theValue: string[] = Array.isArray(value) ? value : [value];
  if (
    options.length >= 0 && // TODO check initial loading.
    !options.some((option) => theValue.includes(option.value))
  ) {
    valueUpdated = selectedOnes.map(({ value }) => value);
  }
  return {
    valueUpdated,
    isSelectLoading: false,
  };
};
