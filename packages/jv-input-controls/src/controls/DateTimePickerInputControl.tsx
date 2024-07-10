import { DateTimePicker as JVDateTimePicker } from "@jaspersoft/jv-ui-components/material-ui/DateTime/DateTimePicker";
import {
  BaseInputControlProps,
  ICDateValidationRule,
} from "./BaseInputControl";
import { useControlClasses } from "./hooks/useControlClasses";
import { useLiveDateFormattedState } from "./hooks/useLiveDateFormattedState";

export type DateTimeICType = "datetime";

export interface DateTimeICProps extends BaseInputControlProps {
  value?: string;
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
  let dateFormat = "YYYY-MM-DDTHH:mm:ss",
    views: string[] = [];
  if (props.validationRules !== undefined) {
    const [rule] = props.validationRules as ICDateValidationRule[];
    dateFormat = removeSingleQuotes(rule.dateTimeFormatValidationRule.format);
    dateFormat = formatToDayJS(dateFormat);
  }
  views = props.views
    ? props.views
    : ["year", "month", "day", "hours", "minutes", "seconds"];
  const liveState = useLiveDateFormattedState({
    initialValue: props.state?.value || props.value || "",
    format: dateFormat,
  });
  const controlClasses = useControlClasses([], props);
  return (
    <JVDateTimePicker
      {...props}
      onChange={liveState.onChange}
      value={liveState.value}
      views={views}
      className={`${controlClasses.join(" ")} ${props.className || ""}`}
      timeSteps={{ hours: 1, minutes: 1, seconds: 1 }}
    />
  );
};
