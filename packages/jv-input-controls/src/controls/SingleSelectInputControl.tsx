/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { JVSelect } from "@jaspersoft/jv-ui-components";
import { JSX, useContext, useEffect, useState } from "react";
import { InputControlProperties } from "@jaspersoft/jv-tools";
import { useControlClasses } from "./hooks/useControlClasses";
import { useErrorMsg } from "./hooks/useErrorMsg";
import { useLiveState } from "./hooks/useLiveState";
import { getTheInitialValueForSingleSelectInputControl } from "../utils/DefaultValueUtils";
import { InputControlsContext } from "../reducer/InputControlsReducer";

export interface SingleSelectInputControlProps extends InputControlProperties {}

export type SingleSelectICType = "singleSelect";

export function SingleSelectInputControl(
  props: SingleSelectInputControlProps,
): JSX.Element {
  // new variables due to the reducer state:
  const { state } = useContext(InputControlsContext);
  const [localOptions, setLocalOptions] = useState(props.state?.options);
  // live state:
  const liveState = useLiveState(
    getTheInitialValueForSingleSelectInputControl(props.state?.value),
  );
  const errorText = useErrorMsg({
    textValue: liveState.value,
    props,
  });
  useEffect(() => {
    const icFromState = state.inputControls.find(({ id }) => id === props.id)!;
    if (
      (icFromState.state !== undefined &&
        icFromState.state!.options !== undefined &&
        localOptions !== undefined &&
        JSON.stringify(icFromState.state!.options) !==
          JSON.stringify(localOptions)) ||
      localOptions !== undefined
    ) {
      setLocalOptions(icFromState.state!.options);
    }
  }, [state.inputControls]);
  useEffect(() => {
    const valueFromState = state.validResponse[props.id];
    if (props.id === "Product_Name") {
      console.log("props.id: ", props.id, ", valueFromState: ", valueFromState);
      console.log("liveState.value: ", liveState.value);
      console.log("----------");
      debugger;
    }
    if (
      valueFromState !== undefined &&
      JSON.stringify(valueFromState) !== JSON.stringify(liveState.value)
    ) {
      liveState.setValue(valueFromState);
    }
  }, [state.validResponse, liveState.value]);
  const controlClasses = useControlClasses([], props);
  return (
    <JVSelect
      onChange={liveState.onChange}
      label={props.label}
      id={props.id}
      key={props.id}
      value={liveState.value}
      state={{ options: localOptions }}
      className={`${controlClasses.join(" ")}`}
      error={errorText}
    />
  );
}
