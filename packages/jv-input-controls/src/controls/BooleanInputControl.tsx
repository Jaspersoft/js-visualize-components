import * as React from "react";
import { Switch as JVSwitch } from "@jaspersoft/jv-ui-components/material-ui/Switch/Switch";
import { Checkbox as JVCheckbox } from "@jaspersoft/jv-ui-components/material-ui/Checkbox/Checkbox";
import { BaseInputControlProps } from "./BaseInputControl";
import { useLiveState } from "./hooks/useLiveState";
import { useControlClasses } from "./hooks/useControlClasses";

export type BoolICType = "switch" | "checkbox";

export interface BooleanInputControlProps extends BaseInputControlProps {
  styleType?: BoolICType;
}

export function BooleanInputControl(
  props: BooleanInputControlProps,
): React.JSX.Element {
  const liveState = useLiveState(!!props.state?.value);
  const controlClasses = useControlClasses([], props);

  if (props.styleType === "switch") {
    return (
      <JVSwitch
        label={props.label || "UNDEF"}
        SwitchProps={{
          onChange: liveState.onChange,
          checked: liveState.value,
        }}
        className={controlClasses.join(" ")}
      />
    );
  } else {
    return (
      <JVCheckbox
        label={props.label || "UNDEF"}
        CheckboxProps={{
          onChange: liveState.onChange,
          checked: liveState.value,
        }}
        className={controlClasses.join(" ")}
      />
    );
  }
}
