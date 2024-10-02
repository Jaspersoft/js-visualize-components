import { JVDateTimeTextField } from "@jaspersoft/jv-ui-components";
import { getMinAndMaxSettings } from "../utils/DateInputControlUtils";
import { InputControlProperties } from "@jaspersoft/jv-tools";
import { useControlClasses } from "./hooks/useControlClasses";
import { useErrorMsg } from "./hooks/useErrorMsg";
import { useLiveState } from "./hooks/useLiveState";

export type DateICType = "default";

export interface DateTextFieldICProps extends InputControlProperties {
  variant?: "standard" | "filled" | "outlined" | undefined;
  className?: string;
  disabled?: boolean;
}

export const DatePickerTextFieldInputControl = (
  props: DateTextFieldICProps,
) => {
  const {
    readOnly,
    mandatory,
    visible,
    dataType,
    validationRules,
    events,
    ...remainingProps
  } = props;
  const liveState = useLiveState(props.state?.value || "");
  const controlClasses = useControlClasses([], props);
  const inputProps: any = {};
  if (readOnly) {
    inputProps.readOnly = true;
  }
  const minAndMaxSettings: { min: string; max: string } = getMinAndMaxSettings(
    dataType,
    {
      minKey: "min",
      maxKey: "max",
    },
  );
  const errorText = useErrorMsg({
    textValue: liveState.value,
    props,
    minAndMaxDate: minAndMaxSettings,
  });
  const theInputProps = { ...inputProps, ...liveState };
  return (
    <JVDateTimeTextField
      {...remainingProps}
      type="date"
      variant={props.variant || "outlined"}
      className={`${props.className || ""}`}
      textFieldClassName={`jv-mInputDate ${controlClasses.join(" ")}`}
      InputProps={theInputProps}
      inputProps={{ ...minAndMaxSettings }}
      error={errorText}
    />
  );
};
