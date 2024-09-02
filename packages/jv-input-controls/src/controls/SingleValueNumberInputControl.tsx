import { JVTextField } from "@jaspersoft/jv-ui-components";
import { BaseInputControlProps } from "./BaseInputControl";
import { useControlClasses } from "./hooks/useControlClasses";
import { useLiveState } from "./hooks/useLiveState";
import { useNumberErrorMsg } from "./hooks/useNumberErrorMsgs";

export type NumberICType = "number";

export interface NumberICProps extends BaseInputControlProps {
  variant?: "standard" | "filled" | "outlined" | undefined;
  className?: string;
}

/**
 * Number Input Control Component
 *
 * Will handle the numbers as a text based input
 * @param props
 * @constructor
 */
export const SingleValueNumberInputControl = (props: NumberICProps) => {
  const {
    className,
    mandatory,
    readOnly,
    visible,
    dataType,
    validationRules,
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
  const errorText = useNumberErrorMsg({
    textValue: liveState.value,
    props,
  });
  return (
    <JVTextField
      {...remainingProps}
      variant={props.variant || "outlined"}
      className={`${className || ""}`}
      textFieldClassName={`${controlClasses.join(" ")}`}
      InputProps={theInputProps}
      type="text"
      error={errorText}
    />
  );
};
