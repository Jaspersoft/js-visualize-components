/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { JVSelect, JVSkeleton } from "@jaspersoft/jv-ui-components";
import { JSX, useContext, useEffect, useState } from "react";
import { InputControlProperties } from "@jaspersoft/jv-tools";
import { useControlClasses } from "./hooks/useControlClasses";
import { useLiveState } from "./hooks/useLiveState";
import { InputControlsContext } from "../reducer/InputControlsReducer";
import { getInputControlProperties } from "./BaseInputControl";
import { validateValueAgainstICValidationRules } from "../utils/ErrorMessageUtils";
import { useCascadingOptions } from "./hooks/useCascadingOptions";

export interface SingleSelectInputControlProps extends InputControlProperties {
  handleIcChange: any;
}

export type SingleSelectICType = "singleSelect";

export function SingleSelectInputControl(
  props: SingleSelectInputControlProps,
): JSX.Element {
  // new variables due to the reducer state:
  const { state } = useContext(InputControlsContext);
  const [errorText, setErrorText] = useState<string>("");
  // live state:
  const liveState = useLiveState("", (newValue: string | string[]) => {
    const { errorMsg } = validateValueAgainstICValidationRules(
      newValue,
      liveState.value,
      props,
      "",
      {},
    );
    setErrorText(errorMsg);
    props.handleIcChange(getInputControlProperties(props, newValue), {
      [props.id]: errorMsg,
    });
  });
  const { options, isLoading, setIsLoading } = useCascadingOptions({
    inputControls: state.inputControls,
    currentIcID: props.id,
  });
  useEffect(() => {
    if (options === undefined) {
      return;
    }
    // TODO: this logic need to be improved
    const selectedOne = options.find(({ selected }) => selected);
    const theValue = Array.isArray(liveState.value)
      ? liveState.value.at(0)
      : liveState.value;
    if (
      options.length > 0 &&
      !options.some((option) => option.value === theValue)
    ) {
      liveState.setValue([selectedOne!.value]);
    }
    setIsLoading(false);
  }, [options]);
  const controlClasses = useControlClasses([], props);
  return isLoading ? (
    <JVSkeleton animation="wave" />
  ) : (
    <JVSelect
      onChange={liveState.onChange}
      label={props.label}
      id={props.id}
      key={props.id}
      value={liveState.value}
      state={{ options }}
      className={`${controlClasses.join(" ")}`}
      error={errorText}
    />
  );
}
