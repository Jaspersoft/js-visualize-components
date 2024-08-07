import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers";
import { forwardRef } from "react";
import { extractPropForDateAttr } from "../DateTime/DateTimePicker";

export const DatePicker = forwardRef((props: any, ref) => {
  const { defaultValue, value, minDate, maxDate, ...remainingProps } = props;
  let otherProps = extractPropForDateAttr({}, "value", value);
  otherProps = extractPropForDateAttr(otherProps, "defaultValue", defaultValue);
  otherProps = extractPropForDateAttr(otherProps, "minDate", minDate);
  otherProps = extractPropForDateAttr(otherProps, "maxDate", maxDate);
  return <MuiDatePicker {...{ ...remainingProps, ...otherProps }} />;
});
