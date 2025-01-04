/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { useState } from "react";

const DEFAULT_DATE_FORMAT = "YYYY-MM-DD";

export function useLiveDateFormattedState({
  initialValue,
  format = DEFAULT_DATE_FORMAT,
  callback,
}: {
  initialValue: string;
  format?: string;
  callback?: (newValue: string) => void;
}) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: any) {
    const val = e && e.format ? e.format(format) : e;
    setValue(val);
    callback?.(val);
  }

  return {
    value,
    onChange: handleChange,
  };
}
