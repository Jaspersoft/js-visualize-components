import { useState } from "react";

const DEFAULT_DATE_FORMAT = "YYYY-MM-DD";

export function useLiveState({
  initialValue,
  format = DEFAULT_DATE_FORMAT,
}: {
  initialValue: string;
  format?: string;
}) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: any) {
    // in case the e param has target.value properties, then the input updated
    // was an HTML element. Otherwise, the date picker component was updated.
    // We must set the formatted value in the state.
    if (e.target) {
      setValue(e.target.value);
    } else if (e.format) {
      setValue(e.format(format));
    } else {
      setValue(e);
    }
  }

  return {
    value,
    onChange: handleChange,
  };
}
