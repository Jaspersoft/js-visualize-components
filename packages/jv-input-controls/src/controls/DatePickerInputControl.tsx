import { DatePicker as JVDatePicker } from "@jaspersoft/jv-ui-components/material-ui/Date/DatePicker";
import {
  getDateFormatIfAny,
  getMinAndMaxSettings,
} from "../utils/DateInputControlUtils";
import {
  BaseInputControlProps,
  ICDateValidationRule,
} from "./BaseInputControl";
import { useControlClasses } from "./hooks/useControlClasses";
import { useLiveDateFormattedState } from "./hooks/useLiveDateFormattedState";

export type DatePickerICType = "material";

export interface DateICProps extends BaseInputControlProps {
  className?: string;
  views?: Array<"year" | "month" | "day">;
  disabled?: boolean;
}

export const DatePickerInputControl = (props: DateICProps) => {
  let dateFormat = getDateFormatIfAny(
    props.validationRules as ICDateValidationRule[],
    "YYYY-MM-DD",
  ).toUpperCase();

  const liveState = useLiveDateFormattedState({
    initialValue: props.state?.value || "",
    format: dateFormat,
    props,
  });
  const controlClasses = useControlClasses([], props);
  const minAndMaxSettings = getMinAndMaxSettings(props.dataType, {
    minKey: "minDate",
    maxKey: "maxDate",
  });
  const { events, ...remainingProps } = props;
  return (
    <JVDatePicker
      {...{ ...remainingProps, ...minAndMaxSettings }}
      onChange={liveState.onChange}
      value={liveState.value}
      className={`${controlClasses.join(" ")} ${props.className || ""}`}
    />
  );
};
