import { TimePicker as JVTimePicker } from "@jaspersoft/jv-ui-components/material-ui/Time/TimePicker";
import {
  BaseInputControlProps,
  ICDateValidationRule,
} from "./BaseInputControl";
import { useControlClasses } from "./hooks/useControlClasses";
import { useLiveDateFormattedState } from "./hooks/useLiveDateFormattedState";

export type TimePickerICType = "time_picker";

export interface TimeICProps extends BaseInputControlProps {
  className?: string;
  views?: Array<"hours" | "minutes" | "seconds">;
  disabled?: boolean;
}

export const TimePickerInputControl = (props: TimeICProps) => {
  let dateFormat = "HH:mm:ss";
  if (props.validationRules !== undefined) {
    const [rule] = props.validationRules as ICDateValidationRule[];
    dateFormat = rule.dateTimeFormatValidationRule!.format;
  }
  const liveState = useLiveDateFormattedState({
    initialValue: props.state?.value || "",
    format: dateFormat,
  });
  const controlClasses = useControlClasses([], props);
  const views = props.views || ["hours", "minutes", "seconds"];
  return (
    <JVTimePicker
      {...props}
      views={views}
      onChange={liveState.onChange}
      value={liveState.value}
      className={`${controlClasses.join(" ")} ${props.className || ""}`}
      timeSteps={{ hours: 1, minutes: 1, seconds: 1 }}
      format={dateFormat}
    />
  );
};
