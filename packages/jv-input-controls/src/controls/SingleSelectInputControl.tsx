import React from "react";
import { Select as JVSelect } from "@jaspersoft/jv-ui-components/material-ui/Select/Select";
import {
  BaseInputControlProps,
  ICDateValidationRule,
} from "./BaseInputControl";
import { useControlClasses } from "./hooks/useControlClasses";
import { useLiveState } from "./hooks/useLiveState";
import { useMandatoryMsg } from "./hooks/useMandatoryMsg";

export interface SingleSelectInputControlProps extends BaseInputControlProps {}

export function SingleSelectInputControl(
  props: SingleSelectInputControlProps,
): React.JSX.Element {
  const liveState = useLiveState("", props);
  const controlClasses = useControlClasses([], props);
  const errorText = useMandatoryMsg({
    textValue: liveState.value,
    isMandatory: props.mandatory,
    validationRules: props.validationRules as ICDateValidationRule[],
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
