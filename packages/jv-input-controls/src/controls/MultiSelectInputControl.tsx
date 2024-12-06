/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { useControlClasses } from "./hooks/useControlClasses";
import { useLiveState } from "./hooks/useLiveState";
import { JVMultiSelect, JVSkeleton } from "@jaspersoft/jv-ui-components";
import {
  InputControlOption,
  InputControlProperties,
} from "@jaspersoft/jv-tools";
import { useContext, useEffect, useState } from "react";
import { InputControlsContext } from "../reducer/InputControlsReducer";
import { validateValueAgainstICValidationRules } from "../utils/ErrorMessageUtils";
import { getInputControlProperties } from "./BaseInputControl";
import { useCascadingOptions } from "./hooks/useCascadingOptions";

export type MultiSelectICType = "multiSelect";

export interface MultiSelectInputControlProps extends InputControlProperties {
  handleIcChange: any;
}

export const MultiSelectInputControl = (
  props: MultiSelectInputControlProps,
): JSX.Element => {
  // new variables due to the reducer state:
  const { state } = useContext(InputControlsContext);
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
  const { options, isLoading, setIsLoading } = useCascadingOptions({
    inputControls: state.inputControls,
    currentIcID: props.id,
  });
  useEffect(() => {
    if (options === undefined) {
      return;
    }
    // TODO: this logic need to be improved
    const selectedOne: InputControlOption[] = options.filter(
      ({ selected }) => selected,
    );
    const theValue: string[] = liveState.value;
    if (
      options.length > 0 &&
      !options.some((option) => theValue.includes(option.value))
    ) {
      liveState.setValue(selectedOne.map(({ value }) => value));
    }
    setIsLoading(false);
  }, [options]);
  const controlClasses = useControlClasses([], props);
  return isLoading ? (
    <JVSkeleton animation="wave" />
  ) : (
    <JVMultiSelect
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
};
