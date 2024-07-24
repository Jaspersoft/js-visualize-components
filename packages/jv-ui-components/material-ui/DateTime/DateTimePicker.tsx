import { DateTimePicker as MuiDateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { forwardRef } from "react";
import castValueIfNeeded from "../Date/Date.Utils";

export const extractPropForDateAttr = (
  otherProps: {},
  propName: string,
  value: any,
): {} => {
  if (value === undefined) {
    return otherProps;
  }
  return {
    ...otherProps,
    [propName]: castValueIfNeeded(value),
  };
};

export const DateTimePicker = forwardRef((props: any, ref) => {
  const { value, minDateTime, maxDateTime, ...remainingProps } = props;

  let otherProps = extractPropForDateAttr({}, "value", value);
  otherProps = extractPropForDateAttr(otherProps, "minDateTime", minDateTime);
  otherProps = extractPropForDateAttr(otherProps, "maxDateTime", maxDateTime);

  const allProps = { ...remainingProps, ...otherProps };
  return <MuiDateTimePicker {...allProps} />;
});
