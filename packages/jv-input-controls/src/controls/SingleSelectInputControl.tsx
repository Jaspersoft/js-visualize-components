import { JVSelect } from "@jaspersoft/jv-ui-components";
import React from "react";
import { BaseInputControlProps } from "@jaspersoft/jv-tools";
import { useControlClasses } from "./hooks/useControlClasses";
import { useErrorMsg } from "./hooks/useErrorMsg";
import { useLiveState } from "./hooks/useLiveState";

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
