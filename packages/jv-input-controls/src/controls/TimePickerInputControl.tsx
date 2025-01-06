/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { JVTimePicker } from "@jaspersoft/jv-ui-components";
import {
  getDateFormatIfAny,
  getMinAndMaxSettings,
} from "../utils/DateInputControlUtils";
import {
  InputControlProperties,
  InputControlValidationRule,
} from "@jaspersoft/jv-tools";
import { useControlClasses } from "./hooks/useControlClasses";
import { useLiveDateFormattedState } from "./hooks/useLiveDateFormattedState";
import { getTheInitialValue } from "../utils/DefaultValueUtils";
import { useState } from "react";
import { validateValueAgainstICValidationRules } from "../utils/ErrorMessageUtils";
import { getInputControlProperties } from "./BaseInputControl";

export type TimePickerICType = "material";

export interface TimeICProps extends InputControlProperties {
  className?: string;
  views?: Array<"hours" | "minutes" | "seconds">;
  disabled?: boolean;
}

export const TimePickerInputControl = (props: TimeICProps) => {
  let dateFormat = getDateFormatIfAny(
    props.validationRules as InputControlValidationRule[],
    "HH:mm:ss",
  );
  const [errorText, setErrorText] = useState<string>("");
  const minAndMaxSettings = getMinAndMaxSettings(props.dataType, {
    minKey: "minTime",
    maxKey: "maxTime",
  });
  const liveState = useLiveDateFormattedState({
    initialValue: getTheInitialValue(props.state?.value) || "",
    format: dateFormat,
    callback: (newValue) => {
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
  });
  const controlClasses = useControlClasses([], props);
  const views = props.views || ["hours", "minutes", "seconds"];
  return (
    <JVTimePicker
      {...minAndMaxSettings}
      id={props.id}
      label={props.label}
      readOnly={props.readOnly}
      disabled={!!props.disabled}
      views={views}
      onChange={liveState.onChange}
      value={liveState.value}
      className={`${controlClasses.join(" ")} ${props.className || ""}`}
      timeSteps={{ hours: 1, minutes: 1, seconds: 1 }}
      format={dateFormat}
      disableIgnoringDatePartForTimeValidation={true}
      error={errorText}
    />
  );
};
