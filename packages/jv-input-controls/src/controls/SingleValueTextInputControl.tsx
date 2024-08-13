import { TextField as JVTextField } from "@jaspersoft/jv-ui-components/material-ui/TextField/TextField";
import {
  BaseInputControlProps,
  getBaseInputControlProps,
  ICValidationRule,
} from "./BaseInputControl";
import { useControlClasses } from "./hooks/useControlClasses";
import { useLiveState } from "./hooks/useLiveState";
import { useErrorMsg } from "./hooks/useErrorMsg";

export type TextFieldICType = "textField";

export interface TextFieldICProps extends BaseInputControlProps {
  variant?: "standard" | "filled" | "outlined" | undefined;
  className?: string;
}

/**
 * Text Input Control Component
 *
 * Will handle the text based input controls
 * @param props
 * @constructor
 */
export const SingleValueTextInputControl = (props: TextFieldICProps) => {
  const {
    className,
    mandatory,
    readOnly,
    visible,
    validationRules,
    dataType,
    events,
    ...remainingProps
  } = props;
  const liveState = useLiveState(props.state?.value || "");
  const controlClasses = useControlClasses([], props);
  // inputProps is needed to handle readOnly by TextField from MUI natively:
  const inputProps: any = {};
  if (readOnly) {
    inputProps.readOnly = true;
  }
  const theInputProps = { ...inputProps, ...liveState };
  const errorText = useErrorMsg({
    textValue: liveState.value,
    isMandatory: mandatory,
    validationRules: validationRules as ICValidationRule[],
    props,
  });
  return (
    <JVTextField
      {...remainingProps}
      variant={props.variant || "outlined"}
      className={`${className || ""}`}
      textFieldClassName={`${controlClasses.join(" ")}`}
      InputProps={theInputProps}
      error={errorText}
    />
  );
};
