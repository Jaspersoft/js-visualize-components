/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { JVDateTimePicker } from "@jaspersoft/jv-ui-components";
import {
  getDateFormatIfAny,
  getMinAndMaxSettings,
} from "../utils/DateInputControlUtils";
import { InputControlProperties } from "@jaspersoft/jv-tools";
import { useControlClasses } from "./hooks/useControlClasses";
import { useLiveDateFormattedState } from "./hooks/useLiveDateFormattedState";
import { getTheInitialValue } from "../utils/DefaultValueUtils";
import { useState } from "react";
import { validateValueAgainstICValidationRules } from "../utils/ErrorMessageUtils";
import { getInputControlProperties } from "./BaseInputControl";

export type DateTimePickerICType = "material";

export interface DateTimeICProps extends InputControlProperties {
  className?: string;
  views?: Array<"year" | "month" | "day" | "hours" | "minutes" | "seconds">;
  disabled?: boolean;
}

const removeSingleQuotes = (str: string) => str.replace(/'/g, "");
const formatToDayJS = (str: string) => {
  const separator = str.includes("T") ? "T" : " ";
  const [date, time] = str.split(separator);
  return `${date.toUpperCase()}${separator}${time}`;
};

export const DateTimePickerInputControl = (props: DateTimeICProps) => {
  let dateFormat = "YYYY-MM-DDTHH:mm:ss";
  if (props.validationRules !== undefined) {
    const formatStored = getDateFormatIfAny(props.validationRules);
    dateFormat = removeSingleQuotes(formatStored);
    dateFormat = formatToDayJS(dateFormat);
  }
  const views: string[] = props.views
    ? props.views
    : ["year", "month", "day", "hours", "minutes", "seconds"];
  const [errorText, setErrorText] = useState<string>("");
  const minAndMaxSettings = getMinAndMaxSettings(props.dataType, {
    minKey: "minDateTime",
    maxKey: "maxDateTime",
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
    <JVDateTimePicker
      {...minAndMaxSettings}
      id={props.id}
      label={props.label}
      onChange={liveState.onChange}
      value={liveState.value}
      views={views}
      className={`${controlClasses.join(" ")} ${props.className || ""}`}
      timeSteps={{ hours: 1, minutes: 1, seconds: 1 }}
      error={errorText}
    />
  );
};
