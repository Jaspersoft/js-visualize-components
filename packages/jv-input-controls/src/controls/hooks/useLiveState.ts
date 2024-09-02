import { useState } from "react";
import { BaseInputControlProps } from "../BaseInputControl";

export function useLiveState(initialValue: any, props?: BaseInputControlProps) {
  /**
   * Changes the value of an input element to match the one selected
   *
   * @param initialValue The value to set initially
   *
   * @returns An object with two elements value and onChange which holds the value pointer and an onChange handler function to provide to a
   *   react element
   */
  const [value, setValue] = useState(initialValue);

  function handleChange(e: any) {
    if (e.target.type === "checkbox") {
      const val = e.target.checked;
      setValue(val);
    } else {
      const val = e.target.value;
      setValue(val);
    }
  }

  const liveStateProps = {
    value: value,
    onChange: handleChange,
  };

  return liveStateProps;
}
