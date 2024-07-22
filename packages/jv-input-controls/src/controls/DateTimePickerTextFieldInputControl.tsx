/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */

import { DateTimeTextField as JVDateTimeTextField } from "@jaspersoft/jv-ui-components/material-ui/DateTimeTextField/DateTimeTextField";
import { getMinAndMaxSettings } from "../utils/DateInputControlUtils";
import { getMandatoryErrorMessage } from "../utils/ErrorMessageUtils";
import {
  BaseInputControlProps,
  ICDateValidationRule,
} from "./BaseInputControl";
import { useControlClasses } from "./hooks/useControlClasses";
import { useLiveState } from "./hooks/useLiveState";

export type DateTimeICType = "default";

export interface DateTimeTextFieldICProps extends BaseInputControlProps {
  className?: string;
  disabled?: boolean;
}

export const DateTimePickerTextFieldInputControl = (
  props: DateTimeTextFieldICProps,
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
  const helperText =
    mandatory && !liveState.value.trim()
      ? getMandatoryErrorMessage(validationRules as ICDateValidationRule[])
      : "";
  const minAndMaxSettings = getMinAndMaxSettings(dataType);
  const theInputProps = {
    ...inputProps,
    ...liveState,
  };
  return (
    <JVDateTimeTextField
      {...remainingProps}
      type="datetime-local"
      className={`jv-mInputDatetime ${controlClasses.join(" ")} ${props.className || ""}`}
      InputProps={{ ...theInputProps }}
      inputProps={{ ...minAndMaxSettings }}
      error={helperText}
    />
  );
};
