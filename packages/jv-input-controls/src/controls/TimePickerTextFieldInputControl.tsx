/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */

import { DateTimeTextField as JVDateTimeTextField } from "@jaspersoft/jv-ui-components/material-ui/DateTimeTextField/DateTimeTextField";
import { getMinAndMaxSettings } from "../utils/DateInputControlUtils";
import { BaseInputControlProps, ICValidationRule } from "./BaseInputControl";
import { useControlClasses } from "./hooks/useControlClasses";
import { useLiveState } from "./hooks/useLiveState";
import { useErrorMsg } from "./hooks/useErrorMsg";

export type TimeICType = "default";

export interface TimeTextFieldICProps extends BaseInputControlProps {
  className?: string;
  disabled?: boolean;
}

export const TimePickerTextFieldInputControl = (
  props: TimeTextFieldICProps,
) => {
  const {
    readOnly,
    mandatory,
    visible,
    dataType,
    validationRules,
    events,
    ...remainingProps
  } = props;
  const liveState = useLiveState(props.state?.value || "");
  const controlClasses = useControlClasses([], props);
  const inputProps: any = {};
  if (readOnly) {
    inputProps.readOnly = true;
  }
  const minAndMaxSettings = getMinAndMaxSettings(dataType, {
    minKey: "min",
    maxKey: "max",
  });
  const errorText = useErrorMsg({
    textValue: liveState.value,
    props,
    minAndMaxDate: minAndMaxSettings,
  });
  const theInputProps = {
    ...inputProps,
    ...liveState,
  };
  return (
    <JVDateTimeTextField
      {...remainingProps}
      type="time"
      className={`${props.className || ""}`}
      textFieldClassName={`jv-mInputTime ${controlClasses.join(" ")}`}
      InputProps={{ ...theInputProps }}
      inputProps={{ ...minAndMaxSettings }}
      error={errorText}
    />
  );
};
