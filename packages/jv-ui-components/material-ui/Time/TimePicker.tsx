/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */
import { FormHelperText } from "@mui/material";
import { TimePicker as MuiTimePicker } from "@mui/x-date-pickers/TimePicker";
import { forwardRef } from "react";
import {
  prepareErrorHelperTextParams,
  setTodayToTime,
} from "../Date/Date.Utils";
import { extractPropForDateAttr } from "../DateTime/DateTimePicker";

export const TimePicker = forwardRef((props: any, ref) => {
  const { value, minTime, maxTime, ...remainingProps } = props;

  let otherProps = extractPropForDateAttr({}, "value", setTodayToTime(value));
  otherProps = extractPropForDateAttr(otherProps, "minTime", minTime);
  otherProps = extractPropForDateAttr(otherProps, "maxTime", maxTime);

  // error props:
  const { hasErrorText, errorTextId } = prepareErrorHelperTextParams(props);

  return (
    <>
      <MuiTimePicker {...{ ...remainingProps, ...otherProps }} />
      {hasErrorText && (
        <FormHelperText className={`jv-mInput-error mui`} id={errorTextId}>
          {props.error}
        </FormHelperText>
      )}
    </>
  );
});
