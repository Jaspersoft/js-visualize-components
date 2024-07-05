import { useState } from "react";

export function useLiveState({ initialValue }: { initialValue: string }) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: any) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}
