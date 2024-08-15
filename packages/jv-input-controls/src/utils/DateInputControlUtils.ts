/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */

import { ICDataType, ICValidationRule } from "../controls/BaseInputControl";
import { getValueForVerificationText } from "./NumberUtils";

const getDateFromTimeString = (timeString: string): Date => {
  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, seconds);
  return date;
};

const modifyTimeData = (timeString: string, isAdding: boolean): string => {
  const date = getDateFromTimeString(timeString);
  if (isAdding) {
    date.setSeconds(date.getSeconds() + 1);
  } else {
    date.setSeconds(date.getSeconds() - 1);
  }
  return date.toTimeString().split(" ")[0];
};

const getMaxDateIfStrict = (dataType: ICDataType): string => {
  if (!dataType.maxValue) {
    return "";
  }
  if (!dataType.strictMax) {
    return dataType.maxValue!;
  }
  if (dataType.type === "time") {
    // reduce in 1 second the time string
    return modifyTimeData(dataType.maxValue!, false);
  }
  const date = new Date(dataType.maxValue!);
  // we have to subtract 1 day to the max value
  date.setDate(date.getDate() - 1);
  if (dataType.type === "date") {
    return date.toISOString().split("T")[0];
  }
  return date.toISOString().split(".")[0];
};

const getMinDateIfStrict = (dataType: ICDataType): string => {
  if (!dataType.minValue) {
    return "";
  }
  if (!dataType.strictMin) {
    return dataType.minValue!;
  }
  if (dataType.type === "time") {
    return modifyTimeData(dataType.minValue!, true);
  }
  const date = new Date(dataType.minValue!);
  // we have to add 1 day to the min value
  date.setDate(date.getDate() + 1);
  if (dataType.type === "date") {
    return date.toISOString().split("T")[0];
  }
  return date.toISOString().split(".")[0];
};

export const getMinAndMaxSettings = (
  dataType: ICDataType | undefined,
  { minKey = "min", maxKey = "max" }: { minKey: string; maxKey: string },
) => {
  const minAndMaxSettings: any = {};
  if (dataType === undefined) {
    return minAndMaxSettings;
  }
  if (dataType!.minValue) {
    minAndMaxSettings[minKey] = getMinDateIfStrict(dataType);
  }
  if (dataType!.maxValue) {
    minAndMaxSettings[maxKey] = getMaxDateIfStrict(dataType);
  }
  return minAndMaxSettings;
};

export const getDateFormatIfAny = (
  validationRules: ICValidationRule[],
  defaultFormat = "YYYY-MM-DDTHH:mm:ss",
): string => {
  if (!validationRules) {
    return defaultFormat;
  }
  const rule = validationRules.find(
    (rule) => rule.dateTimeFormatValidationRule,
  );
  if (!rule) {
    return defaultFormat;
  }
  return rule!.dateTimeFormatValidationRule!.format || defaultFormat;
};

const getDateVerificationText = (
  dataType: ICDataType,
  isVerifyingMin: boolean,
) => {
  if (isVerifyingMin) {
    return dataType?.strictMin === true ? "after" : "after or exactly";
  }
  return dataType?.strictMax === true ? "before" : "before or exactly";
};

export const verifyDateLimit = ({
  dataType,
  maxOrMinDateAsString,
  dateAsString,
  isVerifyingMin,
}: {
  dataType: ICDataType | undefined;
  maxOrMinDateAsString: string | null;
  dateAsString: string;
  isVerifyingMin: boolean;
}): { helperText: string; isError: boolean } => {
  let helperText = "";
  let isError = false;
  if (dataType === undefined || maxOrMinDateAsString === null) {
    return { helperText, isError };
  }
  // verify the number is under the limits of the data type
  let conditionalIsMet;
  if (isVerifyingMin) {
    if (dataType.type === "time") {
      conditionalIsMet =
        getDateFromTimeString(dateAsString) >=
        getDateFromTimeString(maxOrMinDateAsString);
    } else {
      conditionalIsMet =
        new Date(dateAsString) >= new Date(maxOrMinDateAsString);
    }
  } else {
    if (dataType.type === "time") {
      conditionalIsMet =
        getDateFromTimeString(dateAsString) <=
        getDateFromTimeString(maxOrMinDateAsString);
    } else {
      conditionalIsMet =
        new Date(dateAsString) <= new Date(maxOrMinDateAsString);
    }
  }
  if (conditionalIsMet) {
    return { helperText, isError };
  }
  // TODO: in the future, this message need to be considered for i18n:
  helperText = `Verify the date is ${getDateVerificationText(
    dataType,
    isVerifyingMin,
  )} ${getValueForVerificationText(dataType, isVerifyingMin)}.`;
  isError = true;
  return { helperText, isError };
};
