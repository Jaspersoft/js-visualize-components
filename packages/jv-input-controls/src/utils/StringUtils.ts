/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

export const getParamsForICCascadingReq = (slaveDependencies: string[]) => {
  return slaveDependencies.reduce((accum, current) => {
    accum += current + ";";
    return accum;
  }, "");
};
