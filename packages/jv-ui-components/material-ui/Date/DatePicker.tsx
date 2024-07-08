import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers";
import { forwardRef } from "react";
import castValueIfNeeded from "./Date.Utils";

export const DatePicker = forwardRef((props: any, ref) => {
  const { defaultValue, value, ...remainingProps } = props;
  let otherProps = {};
  if (value) {
    otherProps = { value: castValueIfNeeded(value) };
  }
  if (defaultValue) {
    otherProps = {
      ...otherProps,
      defaultValue: castValueIfNeeded(defaultValue),
    };
  }
  return <MuiDatePicker {...{ ...remainingProps, ...otherProps }} />;
});
