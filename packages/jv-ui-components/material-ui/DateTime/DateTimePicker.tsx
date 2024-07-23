import { DateTimePicker as MuiDateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { forwardRef } from "react";
import castValueIfNeeded from "../Date/Date.Utils";

const extractProp = (otherProps: {}, propName: string, value: any): {} => {
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

  let otherProps = extractProp({}, "value", value);
  otherProps = extractProp(otherProps, "minDateTime", minDateTime);
  otherProps = extractProp(otherProps, "maxDateTime", maxDateTime);

  const allProps = { ...remainingProps, ...otherProps };
  return <MuiDateTimePicker {...allProps} />;
});
