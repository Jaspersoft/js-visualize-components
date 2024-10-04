/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { InputControlProperties } from "@jaspersoft/jv-tools";
import { getInputControlProperties } from "../BaseInputControl";
import { useEffectAfterInitial } from "./useEffectAfterInitial";

export const useChangeCallback = (
  theValue: boolean,
  props: InputControlProperties,
) => {
  useEffectAfterInitial(() => {
    props?.events?.change?.(getInputControlProperties(props, theValue));
  }, [theValue]);
};
