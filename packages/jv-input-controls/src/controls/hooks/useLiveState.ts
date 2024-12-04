/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { useState } from "react";

export function useLiveState(initialValue: any, callback?: any) {
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
    let newValue;
    if (e.target.type === "checkbox") {
      newValue = e.target.checked;
      setValue(newValue);
    } else {
      newValue = e.target.value;
      if (Array.isArray(newValue)) setValue([...newValue]);
      else setValue(newValue);
    }
    if (callback) {
      callback(newValue);
    }
  }

  const liveStateProps = {
    value: value,
    setValue: setValue,
    onChange: handleChange,
  };

  return liveStateProps;
}
