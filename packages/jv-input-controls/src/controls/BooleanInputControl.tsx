/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import {
  JVCheckbox,
  JVCheckboxGroup,
  JVSwitch,
} from "@jaspersoft/jv-ui-components";
import { JSX } from "react";
import { InputControlProperties } from "@jaspersoft/jv-tools";
import { useChangeCallback } from "./hooks/useChangeCallback";
import { useControlClasses } from "./hooks/useControlClasses";
import { useLiveState } from "./hooks/useLiveState";

export type BoolICType = "switch" | "checkbox";

export interface BooleanInputControlProps extends InputControlProperties {
  styleType?: BoolICType;
}

export function BooleanInputControl(
  props: BooleanInputControlProps,
): JSX.Element {
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
