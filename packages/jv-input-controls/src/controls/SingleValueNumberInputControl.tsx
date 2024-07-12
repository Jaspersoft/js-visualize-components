import { TextField as JVTextField } from "@jaspersoft/jv-ui-components/material-ui/TextField/TextField";
import { BaseInputControlProps } from "./BaseInputControl";
import { useControlClasses } from "./hooks/useControlClasses";
import { useLiveState } from "./hooks/useLiveState";

export type NumberICType = "number";

export interface NumberICProps extends BaseInputControlProps {
  defaultValue?: string;
  value?: string;
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
export const SingleValueNumberInputControl = (props: NumberICProps) => {
  const {
    value: theValue,
    className,
    defaultValue,
    mandatory,
    readOnly,
    visible,
    ...remainingProps
  } = props;
  const liveState = useLiveState(
    +(props.state?.value || theValue || defaultValue || 0),
  );
  const controlClasses = useControlClasses([], props);
  // inputProps is needed to handle readOnly by TextField from MUI natively:
  const inputProps: any = {};
  if (readOnly) {
    inputProps.readOnly = true;
  }
  const theInputProps = { ...inputProps, ...liveState };
  return (
    <JVTextField
      {...remainingProps}
      variant={props.variant || "outlined"}
      className={`${controlClasses.join(" ")} ${className || ""}`}
      InputProps={theInputProps}
      type="number"
    />
  );
};
