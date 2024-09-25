import { useState } from "react";

export function useMultiLiveState(initialValue: any[]) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: any) {
    console.log("e", e);
    let foundElement = value.indexOf(e.target.value);
    if (foundElement > 0) {
      setValue(
        value.slice(0, foundElement).concat(value.slice(foundElement + 1)),
      );
    } else {
      setValue([e.target.value, ...value]);
    }
  }

  const stateProps = {
    value: value,
    onChange: handleChange,
  };

  return stateProps;
}
