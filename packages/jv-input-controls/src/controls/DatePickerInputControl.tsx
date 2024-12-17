/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { JVDatePicker } from "@jaspersoft/jv-ui-components";
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
import { validateValueAgainstICValidationRules } from "../utils/ErrorMessageUtils";
import { useState } from "react";
import { getInputControlProperties } from "./BaseInputControl";

export type DatePickerICType = "material";

export interface DateICProps extends InputControlProperties {
  className?: string;
  views?: Array<"year" | "month" | "day">;
  disabled?: boolean;
}

export const DatePickerInputControl = (props: DateICProps) => {
  let dateFormat = getDateFormatIfAny(
    props.validationRules as InputControlValidationRule[],
    "YYYY-MM-DD",
  ).toUpperCase();

  const [errorText, setErrorText] = useState<string>("");
  const minAndMaxSettings = getMinAndMaxSettings(props.dataType, {
    minKey: "minDate",
    maxKey: "maxDate",
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
  return (
    <JVDatePicker
      id={props.id}
      label={props.label}
      {...{ ...minAndMaxSettings }}
      onChange={liveState.onChange}
      value={liveState.value}
      className={`${controlClasses.join(" ")} ${props.className || ""}`}
      error={errorText}
    />
  );
};
