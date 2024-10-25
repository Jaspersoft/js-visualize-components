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
import { useErrorMsg } from "./hooks/useErrorMsg";
import { useLiveDateFormattedState } from "./hooks/useLiveDateFormattedState";
import { getTheInitialValue } from "../utils/DefaultValueUtils";

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

  const liveState = useLiveDateFormattedState({
    initialValue: getTheInitialValue(props.state?.value) || "",
    format: dateFormat,
  });
  const controlClasses = useControlClasses([], props);
  const views = props.views || ["hours", "minutes", "seconds"];
  const minAndMaxSettings = getMinAndMaxSettings(props.dataType, {
    minKey: "minTime",
    maxKey: "maxTime",
  });
  const errorText = useErrorMsg({
    textValue: liveState.value,
    props,
    minAndMaxDate: minAndMaxSettings,
  });
  const { events, ...remainingProps } = props;
  return (
    <JVTimePicker
      {...{ ...remainingProps, ...minAndMaxSettings }}
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
