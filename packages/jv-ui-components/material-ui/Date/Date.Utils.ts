/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */

import dayjs from "dayjs";

const castValueIfNeeded = (theValue: dayjs.Dayjs): dayjs.Dayjs => {
  return theValue instanceof dayjs ? theValue : dayjs(theValue);
};

export const setTodayToTime = (time: string): dayjs.Dayjs => {
  const [hours, minutes, seconds] = time.split(":");
  return dayjs()
    .hour(parseInt(hours, 10))
    .minute(parseInt(minutes, 10))
    .second(parseInt(seconds, 10));
};

export default castValueIfNeeded;
