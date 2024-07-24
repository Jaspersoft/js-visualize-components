import React from "react";
import { Select } from "@jaspersoft/jv-ui-components/material-ui/Select/Select";
import { BaseInputControlProps } from "./BaseInputControl";
import { useLiveState } from "./hooks/useLiveState";

export interface SingleSelectInputControlProps extends BaseInputControlProps {}

export function SingleSelectInputControl(
  props: SingleSelectInputControlProps,
): React.JSX.Element {
  const liveState = useLiveState("");

  return (
    <>
      <Select
        onChange={liveState.onChange}
        label={props.label}
        id={props.id}
        key={props.id}
        value={liveState.value}
        state={props.state}
      />
    </>
  );
}
