/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */

import { InputControlDataType } from "@jaspersoft/jv-tools";

const DECIMAL_SEPARATOR = "\\.";
const GROUPING_SEPARATOR = ",";
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

export const checkIfNumber = (value: string) => {
  const result = parseNumber(value);
  return result !== null;
};

export const getValueForVerificationText = (
  dataType: InputControlDataType,
  isVerifyingMin: boolean,
) => {
  if (isVerifyingMin) {
    return dataType?.minValue;
  }
  return dataType?.maxValue;
};

const getVerificationText = (
  dataType: InputControlDataType,
  isVerifyingMin: boolean,
) => {
  if (isVerifyingMin) {
    return dataType?.strictMin === true ? "greater" : "greater or equal";
  }
  return dataType?.strictMax === true ? "lower" : "lower or equal";
};
export const verifyLimit = ({
  dataType,
  maxOrMinValAsNumber,
  valAsNumber,
  isVerifyingMin,
}: {
  dataType: InputControlDataType | undefined;
  maxOrMinValAsNumber: number | null;
  valAsNumber: number;
  isVerifyingMin: boolean;
}): { helperText: string; isError: boolean } => {
  let helperText = "";
  let isError = false;
  if (dataType === undefined || maxOrMinValAsNumber === null) {
    return { helperText, isError };
  }
  // verify the number is under the limits of the data type
  let conditionalIsMet;
  if (isVerifyingMin) {
    conditionalIsMet =
      dataType?.strictMin === true
        ? valAsNumber > (maxOrMinValAsNumber as number)
        : valAsNumber >= (maxOrMinValAsNumber as number);
  } else {
    conditionalIsMet =
      dataType?.strictMax === true
        ? valAsNumber < (maxOrMinValAsNumber as number)
        : valAsNumber <= (maxOrMinValAsNumber as number);
  }
  if (conditionalIsMet) {
    return { helperText, isError };
  }
  // TODO: in the future, this message need to be considered for i18n:
  helperText = `Verify the number is ${getVerificationText(
    dataType,
    isVerifyingMin,
  )} than ${getValueForVerificationText(dataType, isVerifyingMin)}.`;
  isError = true;
  return { helperText, isError };
};
