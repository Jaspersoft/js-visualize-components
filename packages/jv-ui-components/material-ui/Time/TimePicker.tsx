/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */
import { TimePicker as MuiTimePicker } from "@mui/x-date-pickers/TimePicker";
import { forwardRef } from "react";
import { setTodayToTime } from "../Date/Date.Utils";

export const TimePicker = forwardRef((props: any, ref) => {
  const { value, ...remainingProps } = props;

  let otherProps = {};
  if (value) {
    otherProps = { value: setTodayToTime(value) };
  }
  return <MuiTimePicker {...{ ...remainingProps, ...otherProps }} />;
});
