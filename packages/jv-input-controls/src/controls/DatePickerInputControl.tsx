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
import { useErrorMsg } from "./hooks/useErrorMsg";
import { useLiveDateFormattedState } from "./hooks/useLiveDateFormattedState";
import { getTheInitialValue } from "../utils/DefaultValueUtils";

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

  const liveState = useLiveDateFormattedState({
    initialValue: getTheInitialValue(props.state?.value) || "",
    format: dateFormat,
  });
  const controlClasses = useControlClasses([], props);
  const minAndMaxSettings = getMinAndMaxSettings(props.dataType, {
    minKey: "minDate",
    maxKey: "maxDate",
  });
  const errorText = useErrorMsg({
    textValue: liveState.value,
    props,
    minAndMaxDate: minAndMaxSettings,
  });
  const { events, ...remainingProps } = props;
  return (
    <JVDatePicker
      {...{ ...remainingProps, ...minAndMaxSettings }}
      onChange={liveState.onChange}
      value={liveState.value}
      className={`${controlClasses.join(" ")} ${props.className || ""}`}
      error={errorText}
    />
  );
};
