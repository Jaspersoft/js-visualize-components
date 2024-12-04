/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { JVSelect } from "@jaspersoft/jv-ui-components";
import { JSX, useContext, useEffect, useState } from "react";
import {
  InputControlOption,
  InputControlProperties,
} from "@jaspersoft/jv-tools";
import { useControlClasses } from "./hooks/useControlClasses";
// import { useErrorMsg } from "./hooks/useErrorMsg";
import { useLiveState } from "./hooks/useLiveState";
import { InputControlsContext } from "../reducer/InputControlsReducer";
import { getInputControlProperties } from "./BaseInputControl";

export interface SingleSelectInputControlProps extends InputControlProperties {
  handleIcChange: any;
}

export type SingleSelectICType = "singleSelect";

export function SingleSelectInputControl(
  props: SingleSelectInputControlProps,
): JSX.Element {
  // new variables due to the reducer state:
  const { state } = useContext(InputControlsContext);
  const [localOptions, setLocalOptions] = useState<InputControlOption[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // live state:
  // TODO: need to move the getTheInitialValueForSingleSelectInputControl to initialize the value on the state, not
  //  here.
  // const liveState = useLiveState(
  //   getTheInitialValueForSingleSelectInputControl(props.state?.value),
  // );
  const liveState = useLiveState("", (newValue: string | string[]) => {
    props.handleIcChange(getInputControlProperties(props, newValue), {
      [props.id]: "",
    });
  });
  // TODO: need to restore the errorText by triggering it on the callback of useLiveState, not here as a new custom
  //  hook.
  // const errorText = useErrorMsg({
  //   textValue: liveState.value,
  //   props,
  // });
  useEffect(() => {
    const icFromState = state.inputControls.find(({ id }) => id === props.id)!;
    // TODO: need to improve the way how we set the IsLoading variable. This variable is also living on the state.
    if (icFromState.isLoading === true) {
      setIsLoading(true);
    }
    if (
      icFromState.state !== undefined &&
      icFromState.state!.options !== undefined &&
      JSON.stringify(icFromState.state!.options) !==
        JSON.stringify(localOptions)
    ) {
      setLocalOptions(icFromState.state!.options!);
    }
  }, [state.inputControls]);
  useEffect(() => {
    if (localOptions === undefined) {
      return;
    }
    // TODO: this logic need to be improved
    const selectedOne = localOptions.find(({ selected }) => selected);
    const theValue = Array.isArray(liveState.value)
      ? liveState.value.at(0)
      : liveState.value;
    if (
      localOptions.length > 0 &&
      !localOptions.some((option) => option.value === theValue)
    ) {
      liveState.setValue([selectedOne!.value]);
    }
    setIsLoading(false);
  }, [localOptions]);
  const controlClasses = useControlClasses([], props);
  // error={errorText}
  return isLoading ? (
    <>"Loading..."</>
  ) : (
    <JVSelect
      onChange={liveState.onChange}
      label={props.label}
      id={props.id}
      key={props.id}
      value={liveState.value}
      state={{ options: localOptions }}
      className={`${controlClasses.join(" ")}`}
    />
  );
}
