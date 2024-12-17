/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { useControlClasses } from "./hooks/useControlClasses";
import { useLiveState } from "./hooks/useLiveState";
import { JVMultiSelect, JVSkeleton } from "@jaspersoft/jv-ui-components";
import { InputControlProperties } from "@jaspersoft/jv-tools";
import { useContext, useEffect, useState } from "react";
import { InputControlsContext } from "../reducer/InputControlsReducer";
import { validateValueAgainstICValidationRules } from "../utils/ErrorMessageUtils";
import { getInputControlProperties } from "./BaseInputControl";
import { useCascadingOptions } from "./hooks/useCascadingOptions";
import { generateValueBasedOnOptions } from "../utils/ValueBasedOnOptionsUtils";

export type MultiSelectICType = "multiSelect";

export interface MultiSelectInputControlProps extends InputControlProperties {}

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
    props.handleIcChange!(getInputControlProperties(props, newValue), {
      [props.id]: errorMsg,
    });
  });
  const { options, isLoading, setIsLoading } = useCascadingOptions({
    inputControls: state.inputControls,
    currentIcID: props.id,
  });
  useEffect(() => {
    const basedOnOptions = generateValueBasedOnOptions(
      options,
      liveState.value,
    );
    if (basedOnOptions === null) {
      return;
    }
    if (basedOnOptions.valueUpdated !== null) {
      liveState.setValue(basedOnOptions.valueUpdated);
    }
    setIsLoading(basedOnOptions.isSelectLoading);
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
