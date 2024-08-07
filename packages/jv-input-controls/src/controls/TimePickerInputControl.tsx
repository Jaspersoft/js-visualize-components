import { TimePicker as JVTimePicker } from "@jaspersoft/jv-ui-components/material-ui/Time/TimePicker";
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

export type TimePickerICType = "material";

export interface TimeICProps extends BaseInputControlProps {
  className?: string;
  views?: Array<"hours" | "minutes" | "seconds">;
  disabled?: boolean;
}

export const TimePickerInputControl = (props: TimeICProps) => {
  let dateFormat = getDateFormatIfAny(
    props.validationRules as ICDateValidationRule[],
    "HH:mm:ss",
  );

  const liveState = useLiveDateFormattedState({
    initialValue: props.state?.value || "",
    format: dateFormat,
    props,
  });
  const controlClasses = useControlClasses([], props);
  const views = props.views || ["hours", "minutes", "seconds"];
  const minAndMaxSettings = getMinAndMaxSettings(props.dataType, {
    minKey: "minTime",
    maxKey: "maxTime",
  });
  const { callbackChange, ...remainingProps } = props;
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
    />
  );
};
