import { DatePicker as JVDatePicker } from "@jaspersoft/jv-ui-components/material-ui/Date/DatePicker";
import {
  BaseInputControlProps,
  ICDateValidationRule,
} from "./BaseInputControl";
import { useControlClasses } from "./hooks/useControlClasses";
import { useLiveDateFormattedState } from "./hooks/useLiveDateFormattedState";

export type DateICType = "Date";

export interface DateICProps extends BaseInputControlProps {
  value?: string;
  className?: string;
  views?: Array<"year" | "month" | "day">;
  disabled?: boolean;
}

export const DatePickerInputControl = (props: DateICProps) => {
  let dateFormat = "YYYY-MM-DD";
  if (props.validationRules !== undefined) {
    const [rule] = props.validationRules as ICDateValidationRule[];
    dateFormat = rule.dateTimeFormatValidationRule.format.toUpperCase();
  }

  const liveState = useLiveDateFormattedState({
    initialValue: props.state?.value || props.value || "",
    format: dateFormat,
  });
  const controlClasses = useControlClasses([], props);

  return (
    <JVDatePicker
      {...props}
      onChange={liveState.onChange}
      value={liveState.value}
      className={`${controlClasses.join(" ")} ${props.className || ""}`}
    />
  );
};
