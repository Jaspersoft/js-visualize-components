/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { getInputControlProperties } from "../BaseInputControl";
import { useEffectAfterInitial } from "./useEffectAfterInitial";
import { BooleanInputControlProps } from "../BooleanInputControl";

export const useChangeCallback = (
  theValue: boolean,
  props: BooleanInputControlProps,
) => {
  useEffectAfterInitial(() => {
    props.handleIcChange!(getInputControlProperties(props, theValue), {
      [props.id]: "",
    });
  }, [theValue]);
};
