/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */

const DECIMAL_SEPARATOR = "\\.";
const GROUPING_SEPARATOR = ",";
const SPACE_SEPARATOR = "\\s";
const MAX_INT = Number.MAX_SAFE_INTEGER
  ? Number.MAX_SAFE_INTEGER + 1
  : 9007199254740992;
const MIN_INT = Number.MIN_SAFE_INTEGER
  ? Number.MIN_SAFE_INTEGER - 1
  : -9007199254740992;

const DECIMAL_NUMBER_PATTERN = new RegExp(
  "^-?([1-9]{1}[0-9]{0,2}(" +
    GROUPING_SEPARATOR +
    "[0-9]{3})*(" +
    DECIMAL_SEPARATOR +
    "[0-9]+)?|[1-9]{1}[0-9]{0,}(" +
    DECIMAL_SEPARATOR +
    "[0-9]+)?|0(" +
    DECIMAL_SEPARATOR +
    "[0-9]+)?)$",
);
const INTEGER_NUMBER_PATTERN = new RegExp(
  "^-?([1-9]{1}[0-9]{0,2}(" +
    GROUPING_SEPARATOR +
    "[0-9]{3})*|[1-9]{1}[0-9]{0,}|0)$",
);

export const parseNumber = (value: string) => {
  DECIMAL_NUMBER_PATTERN.lastIndex = 0; // reset the regex.
  if (!DECIMAL_NUMBER_PATTERN.test(value)) {
    // not valid.
    return null;
  }
  value = value
    .replace(new RegExp(GROUPING_SEPARATOR, "g"), "")
    .replace(new RegExp(DECIMAL_SEPARATOR, "g"), ".");
  const result = +value;
  if (result > MIN_INT && result < MAX_INT) {
    return result;
  }
  if (window.console) {
    window.console.warn(
      value +
        " is out of the [" +
        (MIN_INT + 1) +
        ", " +
        (MAX_INT - 1) +
        "] bounds. " +
        "Parsing results may be corrupted. Use string representation instead. " +
        "For more details see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number.",
    );
  }
  return null;
};
