/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */

import { ICDataType, ICDateValidationRule } from "../controls/BaseInputControl";

const getMaxDateIfStrict = (dataType: ICDataType): string => {
  if (!dataType.maxValue) {
    return "";
  }
  if (!dataType.strictMax) {
    return dataType.maxValue!;
  }
  if (dataType.type === "time") {
    return dataType.maxValue!;
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
    return dataType.minValue!;
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
  validationRules: ICDateValidationRule[],
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
