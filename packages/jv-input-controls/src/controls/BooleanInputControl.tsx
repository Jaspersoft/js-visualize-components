import * as React from "react";
import {
  JVSwitch,
  JVCheckbox,
  JVCheckboxGroup,
} from "@jaspersoft/jv-ui-components";
import { BaseInputControlProps } from "./BaseInputControl";
import { useChangeCallback } from "./hooks/useChangeCallback";
import { useLiveState } from "./hooks/useLiveState";
import { useControlClasses } from "./hooks/useControlClasses";
import { PanelContext } from "./contexts/PanelContext";

export type BoolICType = "switch" | "checkbox";

export interface BooleanInputControlProps extends BaseInputControlProps {
  styleType?: BoolICType;
}

export function BooleanInputControl(
  props: BooleanInputControlProps,
): React.JSX.Element {
  const controlCtx = React.useContext(PanelContext);

  console.log("controlCtx", controlCtx);

  const liveState = useLiveState(!!props.state?.value);
  // We don't need the required CSS class for booleans (request from Anna).
  const controlClasses = useControlClasses([], { ...props, mandatory: false });
  useChangeCallback(!!liveState.value, props);
  if (props.styleType === "switch") {
    return (
      <JVSwitch
        label={props.label || "UNDEF"}
        SwitchProps={{
          onChange: liveState.onChange,
          checked: !!liveState.value,
        }}
        containerClassName={`${controlClasses.join(" ")} jv-mInputLarge`}
        inline={true}
        labelPlacement="end"
      />
    );
  } else {
    return (
      <JVCheckboxGroup size="large">
        <JVCheckbox
          label={props.label || "UNDEF"}
          CheckboxProps={{
            onChange: liveState.onChange,
            checked: !!liveState.value,
          }}
          className={controlClasses.join(" ")}
        />
      </JVCheckboxGroup>
    );
  }
}
