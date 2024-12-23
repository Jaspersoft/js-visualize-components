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
import { generateValueBasedOnOptions } from "../utils/ValueBasedOnOptionsUtils";

export interface SingleSelectInputControlProps extends InputControlProperties {}

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
    props.handleIcChange!(getInputControlProperties(props, newValue), {
      [props.id]: errorMsg,
    });
  });
  const { options, isLoading, setIsLoading } = useCascadingOptions(
    state.inputControls,
    props.id,
  );
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
