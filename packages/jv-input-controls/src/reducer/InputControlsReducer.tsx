/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { InputControlProperties } from "@jaspersoft/jv-tools";
import { createContext, useReducer } from "react";

const inputControlsReducer = (
  state: InputControlProperties[],
  action: { type: string; payload: any },
) => {
  switch (action.type) {
    case "[INPUT_CONTROLS] SET_DATA":
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export const InputControlsContext = createContext<{
  state: InputControlProperties[];
  dispatch: any;
}>({ state: [], dispatch: () => {} });

export const InputControlsProvider = ({
  children,
  initialState,
}: {
  children: JSX.Element;
  initialState: InputControlProperties[];
}) => {
  const [state, dispatch] = useReducer(inputControlsReducer, initialState);
  return (
    <InputControlsContext.Provider value={{ state, dispatch }}>
      {children}
    </InputControlsContext.Provider>
  );
};
