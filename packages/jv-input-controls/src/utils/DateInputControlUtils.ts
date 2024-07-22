/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */

import { ICDataType } from "../controls/BaseInputControl";

export interface MinAndMaxSettings {
  min?: string;
  max?: string;
}

const getMaxDateIfStrict = (dataType: ICDataType): string => {
  if (!dataType.strictMax) {
    return dataType.maxValue!;
  }
  const date = new Date(dataType.maxValue!);
  // we have to subtract 1 day to the max value
  date.setDate(date.getDate() - 1);
  return date.toISOString().split(".")[0];
};

const getMinDateIfStrict = (dataType: ICDataType): string => {
  if (!dataType.strictMin) {
    return dataType.minValue!;
  }
  const date = new Date(dataType.minValue!);
  // we have to add 1 day to the min value
  date.setDate(date.getDate() + 1);
  return date.toISOString().split(".")[0];
};

export const getMinAndMaxSettings = (
  dataType: ICDataType | undefined,
): MinAndMaxSettings => {
  const minAndMaxSettings: MinAndMaxSettings = {};
  if (dataType === undefined) {
    return minAndMaxSettings;
  }
  if (dataType!.minValue) {
    minAndMaxSettings.min = getMinDateIfStrict(dataType);
  }
  if (dataType!.maxValue) {
    minAndMaxSettings.max = getMaxDateIfStrict(dataType);
  }
  return minAndMaxSettings;
};
