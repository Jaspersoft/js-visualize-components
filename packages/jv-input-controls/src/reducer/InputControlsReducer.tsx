/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { InputControlProperties } from "@jaspersoft/jv-tools";
import { createContext, useReducer } from "react";

export const INPUT_CONTROLS_ACTIONS = {
  SET_DATA: "[INPUT_CONTROLS] SET_DATA",
  UPDATE_DATA: "[INPUT_CONTROLS] UPDATE_DATA",
};

const inputControlsReducer = (
  state: {
    inputControls: InputControlProperties[];
    validResponse: { [key: string]: any[] };
    validationResultState: { [key: string]: string };
  },
  action: { type: string; payload: any },
) => {
  const { type, payload } = action;
  // console.log("inputControlsReducer - STATE", state);
  // console.log("inputControlsReducer - action", action);
  // console.log("----------------------");
  switch (type) {
    case INPUT_CONTROLS_ACTIONS.SET_DATA:
      return {
        ...state,
        ...payload,
      };
    case INPUT_CONTROLS_ACTIONS.UPDATE_DATA:
      const icsUpdated = state.inputControls.reduce(
        (
          acc: {
            state: InputControlProperties[];
            response: { [key: string]: any[] };
            invalidResponse: { [key: string]: any };
          },
          ctrl: InputControlProperties,
        ) => {
          const theValidationResult = payload.resultValidation?.[ctrl.id];
          const ctrlToUse =
            ctrl.id !== payload.ctrlUpdated.id ? ctrl : payload.ctrlUpdated;
          acc.state.push(ctrlToUse);
          if (theValidationResult !== undefined && theValidationResult !== "") {
            acc.invalidResponse = {
              ...acc.invalidResponse,
              [ctrlToUse.id]: theValidationResult,
            };
          } else if (theValidationResult === "") {
            // this means that the validation result is empty, so we need to remove the key from the invalidResponse
            delete acc.invalidResponse[ctrlToUse.id];
          }
          acc.response[ctrlToUse.id] = Array.isArray(ctrlToUse.state?.value)
            ? ctrlToUse.state?.value
            : [ctrlToUse.state?.value];
          return acc;
        },
        {
          state: [],
          response: { ...state.validResponse },
          invalidResponse: { ...state.validationResultState },
        },
      );

      const isError = Object.keys(icsUpdated.invalidResponse).length > 0;
      payload.props.events?.change?.(
        icsUpdated.response,
        isError ? icsUpdated.invalidResponse : false,
      );

      return {
        ...state,
        inputControls: [...icsUpdated.state],
        validResponse: { ...icsUpdated.response },
        validationResultState: { ...icsUpdated.invalidResponse },
      };
    default:
      return state;
  }
};

export const InputControlsContext = createContext<{
  state: {
    inputControls: InputControlProperties[];
    validResponse: { [key: string]: any[] };
    validationResultState: { [key: string]: string };
  };
  dispatch: any;
}>({
  state: {
    inputControls: [],
    validResponse: {},
    validationResultState: {},
  },
  dispatch: () => {},
});

const createInitialState = (initialState: InputControlProperties[]) => {
  const fixedInitialState = initialState.map((icProps) => {
    if (
      icProps.state?.value !== undefined ||
      icProps.state?.options === undefined
    ) {
      return icProps;
    }
    return {
      ...icProps,
      state: {
        ...icProps.state,
        value: icProps.state.options
          .filter((opt) => opt.selected)
          .map((opt) => opt.value),
      },
    };
  });
  return {
    inputControls: fixedInitialState,
    validResponse: {},
    validationResultState: {},
  };
};

export const InputControlsProvider = ({
  children,
  initialState,
}: {
  children: JSX.Element;
  initialState: InputControlProperties[];
}) => {
  const [state, dispatch] = useReducer(
    inputControlsReducer,
    initialState,
    createInitialState,
  );
  // console.log("InputControlsProvider - STATE", state);
  return (
    <InputControlsContext.Provider value={{ state, dispatch }}>
      {children}
    </InputControlsContext.Provider>
  );
};
