import { DateTimePicker as MuiDateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { forwardRef } from "react";
import castValueIfNeeded from "../Date/Date.Utils";

export const DateTimePicker = forwardRef((props: any, ref) => {
  const { value, ...remainingProps } = props;

  let otherProps = {};
  if (value) {
    otherProps = { value: castValueIfNeeded(value) };
  }
  return <MuiDateTimePicker {...{ ...remainingProps, ...otherProps }} />;
});
