import { useState } from "react";

const DEFAULT_DATE_FORMAT = "YYYY-MM-DD";

export function useLiveDateFormattedState({
  initialValue,
  format = DEFAULT_DATE_FORMAT,
}: {
  initialValue: string;
  format?: string;
}) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: any) {
    const val = e && e.format ? e.format(format) : e;
    setValue(val);
  }

  return {
    value,
    onChange: handleChange,
  };
}
