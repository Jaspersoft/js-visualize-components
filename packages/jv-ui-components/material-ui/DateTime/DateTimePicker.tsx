import { FormHelperText } from "@mui/material";
import { DateTimePicker as MuiDateTimePicker } from "@mui/x-date-pickers";
import { forwardRef } from "react";
import castValueIfNeeded, {
  prepareErrorHelperTextParams,
} from "../Date/Date.Utils";

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
  // error props:
  const { hasErrorText, errorTextId } = prepareErrorHelperTextParams(props);

  const allProps = { ...remainingProps, ...otherProps };
  return (
    <>
      <MuiDateTimePicker {...allProps} />
      {hasErrorText && (
        <FormHelperText className={`jv-mInput-error mui`} id={errorTextId}>
          {props.error}
        </FormHelperText>
      )}
    </>
  );
});
