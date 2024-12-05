/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { useControlClasses } from "./hooks/useControlClasses";
import { useLiveState } from "./hooks/useLiveState";
import { JVMultiSelect } from "@jaspersoft/jv-ui-components";
import {
  InputControlOption,
  InputControlProperties,
} from "@jaspersoft/jv-tools";
import { useContext, useEffect, useState } from "react";
import { InputControlsContext } from "../reducer/InputControlsReducer";
import { validateValueAgainstICValidationRules } from "../utils/ErrorMessageUtils";
import { getInputControlProperties } from "./BaseInputControl";

export type MultiSelectICType = "multiSelect";

export interface MultiSelectInputControlProps extends InputControlProperties {
  handleIcChange: any;
}

export const MultiSelectInputControl = (
  props: MultiSelectInputControlProps,
): JSX.Element => {
  // new variables due to the reducer state:
  const { state } = useContext(InputControlsContext);
  const [localOptions, setLocalOptions] = useState<InputControlOption[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");

  // live state:
  const liveState = useLiveState([""], (newValue: string | string[]) => {
    const { errorMsg } = validateValueAgainstICValidationRules(
      newValue,
      liveState.value,
      props,
      [""],
      {},
    );
    setErrorText(errorMsg);
    props.handleIcChange(getInputControlProperties(props, newValue), {
      [props.id]: errorMsg,
    });
  });
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
    const selectedOne: InputControlOption[] = localOptions.filter(
      ({ selected }) => selected,
    );
    const theValue: string[] = liveState.value;
    if (
      localOptions.length > 0 &&
      !localOptions.some((option) => theValue.includes(option.value))
    ) {
      liveState.setValue(selectedOne.map(({ value }) => value));
    }
    setIsLoading(false);
  }, [localOptions]);
  const controlClasses = useControlClasses([], props);
  return isLoading ? (
    <>"Loading..."</>
  ) : (
    <JVMultiSelect
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
};
