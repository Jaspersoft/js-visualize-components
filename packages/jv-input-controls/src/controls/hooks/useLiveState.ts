import { useState } from "react";

export function useLiveState(initialValue: any) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: any) {
    setValue(e.target.value);
  }
  const liveStateProps = {
    value: value,
    onChange: handleChange,
  };

  return liveStateProps;
}
