import { useState } from "react";
import { getBaseInputControlProps } from "../BaseInputControl";

export function useLiveState(initialValue: any, callback?: any, props?: any) {
  /**
   * Changes the value of an input element to match the one selected
   *
   * @param initialValue The value to set initially
   *
   * @returns An object with two elements value and onChange which holds the value pointer and an onChange handler function to provide to a react element
   */
  const [value, setValue] = useState(initialValue);

  const triggerCallbackIfNeeded = (
    callback: any,
    props: any,
    value: string | boolean,
  ) => {
    if (callback && props) {
      callback(getBaseInputControlProps(props, value));
    }
  };

  function handleChange(e: any) {
    if (e.target.type === "checkbox") {
      const val = e.target.checked;
      setValue(val);
      triggerCallbackIfNeeded(callback, props, val);
    } else {
      const val = e.target.value;
      setValue(val);
      triggerCallbackIfNeeded(callback, props, val);
    }
  }

  const liveStateProps = {
    value: value,
    onChange: handleChange,
  };

  return liveStateProps;
}
