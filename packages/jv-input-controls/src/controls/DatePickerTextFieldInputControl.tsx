/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */

import { DateTimeTextField as JVDateTimeTextField } from "@jaspersoft/jv-ui-components/material-ui/DateTimeTextField/DateTimeTextField";
import { getMinAndMaxSettings } from "../utils/DateInputControlUtils";
import {
  BaseInputControlProps,
  ICDateValidationRule,
} from "./BaseInputControl";
import { useControlClasses } from "./hooks/useControlClasses";
import { useLiveState } from "./hooks/useLiveState";
import { useMandatoryMsg } from "./hooks/useMandatoryMsg";

export type DateICType = "default";

export interface DateTextFieldICProps extends BaseInputControlProps {
  variant?: "standard" | "filled" | "outlined" | undefined;
  className?: string;
  disabled?: boolean;
}

export const DatePickerTextFieldInputControl = (
  props: DateTextFieldICProps,
) => {
  const {
    readOnly,
    mandatory,
    visible,
    dataType,
    validationRules,
    ...remainingProps
  } = props;
  const liveState = useLiveState(props.state?.value || "");
  const controlClasses = useControlClasses([], props);
  const inputProps: any = {};
  if (readOnly) {
    inputProps.readOnly = true;
  }
  const errorText = useMandatoryMsg({
    textValue: liveState.value,
    isMandatory: mandatory,
    validationRules: validationRules as ICDateValidationRule[],
  });
  const minAndMaxSettings = getMinAndMaxSettings(dataType, {
    minKey: "min",
    maxKey: "max",
  });
  const theInputProps = { ...inputProps, ...liveState };
  return (
    <JVDateTimeTextField
      {...remainingProps}
      type="date"
      variant={props.variant || "outlined"}
      className={`jv-mInputDate ${controlClasses.join(" ")} ${props.className || ""}`}
      InputProps={theInputProps}
      inputProps={{ ...minAndMaxSettings }}
      error={errorText}
    />
  );
};
