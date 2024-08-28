/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */

import { ICDataType, ICValidationRule } from "../controls/BaseInputControl";
import { getValueForVerificationText } from "./NumberUtils";
import { isEmptyObject } from "./ObjectUtils";

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

const formatDateIfNeeded = (
  piece: number,
  isMonth = false,
): number | string => {
  if (isMonth) {
    return piece + 1 < 10 ? `0${piece + 1}` : piece + 1;
  }
  return piece < 10 ? `0${piece}` : piece;
};

const formatFullDate = (date: Date): string => {
  return `${date.getFullYear()}-${formatDateIfNeeded(date.getMonth(), true)}-${formatDateIfNeeded(
    date.getDate(),
  )}T${formatDateIfNeeded(date.getHours())}:${formatDateIfNeeded(date.getMinutes())}:${formatDateIfNeeded(date.getSeconds())}`;
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

  if (dataType.type === "date") {
    // we have to subtract 1 day to the max value
    date.setDate(date.getDate() - 1);
    return date.toISOString().split("T")[0];
  }
  // it is datetime:
  date.setSeconds(date.getSeconds() - 1);
  return formatFullDate(date);
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
  if (dataType.type === "date") {
    // we have to add 1 day to the min value
    date.setDate(date.getDate() + 1);
    return date.toISOString().split("T")[0];
  }
  // it is datetime:
  date.setSeconds(date.getSeconds() + 1);
  return formatFullDate(date);
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
  return isEmptyObject(minAndMaxSettings) ? null : minAndMaxSettings;
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
  helperText = `Verify the ${dataType.type === "time" ? "time" : "date"} is ${getDateVerificationText(
    dataType,
    isVerifyingMin,
  )} ${getValueForVerificationText(dataType, isVerifyingMin)}.`;
  isError = true;
  return { helperText, isError };
};
