/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { JVTextField } from "@jaspersoft/jv-ui-components";
import { InputControlProperties } from "@jaspersoft/jv-tools";
import { useControlClasses } from "./hooks/useControlClasses";
import { useLiveState } from "./hooks/useLiveState";
import { useState } from "react";
import { validateValueAgainstICValidationRules } from "../utils/ErrorMessageUtils";
import { getInputControlProperties } from "./BaseInputControl";

export type TextFieldICType = "textField";

export interface TextFieldICProps extends InputControlProperties {
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
  const { className, readOnly } = props;
  const [errorText, setErrorText] = useState<string>("");
  const liveState = useLiveState(
    props.state?.value || "",
    (newValue: string) => {
      const { errorMsg } = validateValueAgainstICValidationRules(
        newValue,
        liveState.value,
        props,
        "",
        {},
      );
      setErrorText(errorMsg);
      props.handleIcChange!(getInputControlProperties(props, newValue), {
        [props.id]: errorMsg,
      });
    },
  );
  const controlClasses = useControlClasses([], props);
  // inputProps is needed to handle readOnly by TextField from MUI natively:
  const inputProps: any = {};
  if (readOnly) {
    inputProps.readOnly = true;
  }
  const theInputProps = {
    ...inputProps,
    value: liveState.value,
    onChange: liveState.onChange,
  };
  return (
    <JVTextField
      id={props.id}
      label={props.label}
      variant={props.variant || "outlined"}
      className={`${className || ""}`}
      textFieldClassName={`${controlClasses.join(" ")}`}
      InputProps={theInputProps}
      error={errorText}
    />
  );
};
