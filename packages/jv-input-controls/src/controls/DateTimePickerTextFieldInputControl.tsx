/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { JVDateTimeTextField } from "@jaspersoft/jv-ui-components";
import { getMinAndMaxSettings } from "../utils/DateInputControlUtils";
import { InputControlProperties } from "@jaspersoft/jv-tools";
import { useControlClasses } from "./hooks/useControlClasses";
import { useLiveState } from "./hooks/useLiveState";
import { getTheInitialValue } from "../utils/DefaultValueUtils";
import { useState } from "react";
import { validateValueAgainstICValidationRules } from "../utils/ErrorMessageUtils";
import { getInputControlProperties } from "./BaseInputControl";

export type DateTimeICType = "default";

export interface DateTimeTextFieldICProps extends InputControlProperties {
  className?: string;
  disabled?: boolean;
}

export const DateTimePickerTextFieldInputControl = (
  props: DateTimeTextFieldICProps,
) => {
  const { readOnly, dataType } = props;
  const minAndMaxSettings = getMinAndMaxSettings(dataType, {
    minKey: "min",
    maxKey: "max",
  });
  const [errorText, setErrorText] = useState<string>("");
  const liveState = useLiveState(
    getTheInitialValue(props.state?.value) || "",
    (newValue: string) => {
      const { errorMsg } = validateValueAgainstICValidationRules(
        newValue,
        liveState.value,
        props,
        "",
        minAndMaxSettings,
      );
      setErrorText(errorMsg);
      props.handleIcChange!(getInputControlProperties(props, newValue), {
        [props.id]: errorMsg,
      });
    },
  );
  const controlClasses = useControlClasses([], props);
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
    <JVDateTimeTextField
      id={props.id}
      label={props.label}
      disabled={!!props.disabled}
      type="datetime-local"
      className={`${props.className || ""}`}
      textFieldClassName={`jv-mInputDatetime ${controlClasses.join(" ")}`}
      InputProps={{ ...theInputProps }}
      inputProps={{ ...minAndMaxSettings }}
      error={errorText}
    />
  );
};
