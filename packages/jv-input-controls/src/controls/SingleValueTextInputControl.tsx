import { TextField as JVTextField } from "@jaspersoft/jv-ui-components/material-ui/TextField/TextField";
import { ChangeEvent, useState } from "react";
import BaseInputControl, { BaseInputControlProps } from "./BaseInputControl";
import { useLiveState } from "./hooks/useLiveState";
import { useControlClasses } from "./hooks/useControlClasses";

export type TextFieldICType = "textField";

export interface TextFieldICProps extends BaseInputControlProps {
  defaultValue?: string;
  value?: string;
  variant?: "standard" | "filled" | "outlined" | undefined;
  size?: "large";
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
  const liveState = useLiveState(props.state?.value || "");
  const controlClasses = useControlClasses([], props);
  return (
    <JVTextField
      id={props.id}
      key={props.id}
      InputProps={liveState}
      className={controlClasses.join(" ")}
      variant="outlined"
    />
  );
};
