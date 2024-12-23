/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

export const getParamsForICCascadingReq = (dependencies: string[]) => {
  return dependencies.reduce((accum, current, cIndex) => {
    const endOfString = cIndex === dependencies.length - 1 ? "" : ";";
    return accum + current + endOfString;
  }, "");
};
