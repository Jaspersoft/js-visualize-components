/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */

import { useState } from "react";
import { triggerCallbackIfNeeded } from "../../utils/HookUtils";
import { BaseInputControlProps } from "../BaseInputControl";

const DEFAULT_DATE_FORMAT = "YYYY-MM-DD";

export function useLiveDateFormattedState({
  initialValue,
  format = DEFAULT_DATE_FORMAT,
  props,
}: {
  initialValue: string;
  format?: string;
  props?: BaseInputControlProps;
}) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: any) {
    const val = e && e.format ? e.format(format) : e;
    setValue(val);
    triggerCallbackIfNeeded(props, val);
  }

  return {
    value,
    onChange: handleChange,
  };
}
