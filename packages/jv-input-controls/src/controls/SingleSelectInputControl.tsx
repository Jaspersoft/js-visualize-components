import React from "react";
import { Select as JVSelect } from "@jaspersoft/jv-ui-components/material-ui/Select/Select";
import { BaseInputControlProps, ICValidationRule } from "./BaseInputControl";
import { useControlClasses } from "./hooks/useControlClasses";
import { useLiveState } from "./hooks/useLiveState";
import { useErrorMsg } from "./hooks/useErrorMsg";

export interface SingleSelectInputControlProps extends BaseInputControlProps {}

export function SingleSelectInputControl(
  props: SingleSelectInputControlProps,
): React.JSX.Element {
  const liveState = useLiveState("");
  const controlClasses = useControlClasses([], props);
  const errorText = useErrorMsg({
    textValue: liveState.value,
    props,
  });
  return (
    <JVSelect
      onChange={liveState.onChange}
      label={props.label}
      id={props.id}
      key={props.id}
      value={liveState.value}
      state={props.state}
      textFieldClassName={`${controlClasses.join(" ")}`}
      error={errorText}
    />
  );
}
