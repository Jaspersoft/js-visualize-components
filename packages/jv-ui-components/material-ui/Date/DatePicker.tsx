import { FormHelperText } from "@mui/material";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers";
import { forwardRef } from "react";
import { extractPropForDateAttr } from "../DateTime/DateTimePicker";
import { prepareErrorHelperTextParams } from "./Date.Utils";

export const DatePicker = forwardRef((props: any, ref) => {
  const { defaultValue, value, minDate, maxDate, ...remainingProps } = props;
  let otherProps = extractPropForDateAttr({}, "value", value);
  otherProps = extractPropForDateAttr(otherProps, "defaultValue", defaultValue);
  otherProps = extractPropForDateAttr(otherProps, "minDate", minDate);
  otherProps = extractPropForDateAttr(otherProps, "maxDate", maxDate);

  // error props:
  const { hasErrorText, errorTextId } = prepareErrorHelperTextParams(props);

  return (
    <>
      <MuiDatePicker {...{ ...remainingProps, ...otherProps }} />
      {hasErrorText && (
        <FormHelperText className={`jv-mInput-error mui`} id={errorTextId}>
          {props.error}
        </FormHelperText>
      )}
    </>
  );
});
