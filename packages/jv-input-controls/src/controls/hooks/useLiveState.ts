import { useState } from "react";

export function useLiveState(initialValue: any) {
  /**
   * Changes the value of an input element to match the one selected
   *
   * @param initialValue The value to set initially
   *
   * @returns An object with two elements value and onChange which holds the value pointer and an onChange handler function to provide to a react element
   */
  const [value, setValue] = useState(initialValue);

  function handleChange(e: any) {
    if (e.target.type === "checkbox") {
      setValue(e.target.checked);
    } else {
      setValue(e.target.value);
    }
  }
  const liveStateProps = {
    value: value,
    onChange: handleChange,
  };

  return liveStateProps;
}
