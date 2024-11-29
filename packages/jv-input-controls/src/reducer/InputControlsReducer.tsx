/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import {
  InputControlOption,
  InputControlProperties,
} from "@jaspersoft/jv-tools";
import { createContext, useReducer } from "react";

export const INPUT_CONTROLS_ACTIONS = {
  SET_DATA: "[INPUT_CONTROLS] SET_DATA",
  UPDATE_DATA: "[INPUT_CONTROLS] UPDATE_DATA",
  UPDATE_SLAVE_DEPENDENCIES: "[INPUT_CONTROLS] UPDATE_SLAVE_DEPENDENCIES",
};

const emitCallbackToUser = (
  icsUpdated: {
    inputControls: InputControlProperties[];
    validResponse: { [key: string]: any[] };
    validationResultState: { [key: string]: string };
  },
  payload: {
    props: {
      events: {
        change: (
          arg0: { [key: string]: any[] },
          arg1: { [key: string]: string } | false,
        ) => void;
      };
    };
    ctrlUpdated: InputControlProperties;
  },
  emitCallbackToUser = true,
) => {
  if (emitCallbackToUser) {
    const isError = Object.keys(icsUpdated.validationResultState).length > 0;
    payload.props.events?.change?.(
      icsUpdated.validResponse,
      isError ? icsUpdated.validationResultState : false,
    );
  }
};

const inputControlsReducer = (
  state: {
    inputControls: InputControlProperties[];
    validResponse: { [key: string]: any[] };
    validationResultState: { [key: string]: string };
  },
  action: { type: string; payload: any },
): {
  inputControls: InputControlProperties[];
  validResponse: { [key: string]: any[] };
  validationResultState: { [key: string]: string };
} => {
  const { type, payload } = action;
  switch (type) {
    case INPUT_CONTROLS_ACTIONS.SET_DATA: {
      return {
        ...state,
        ...payload,
      };
    }
    case INPUT_CONTROLS_ACTIONS.UPDATE_DATA: {
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
          if (theValidationResult !== undefined && theValidationResult !== "") {
            acc.invalidResponse = {
              ...acc.invalidResponse,
              [ctrlToUse.id]: theValidationResult,
            };
          } else if (theValidationResult === "") {
            // this means that the validation result is empty, so we need to remove the key from the invalidResponse
            delete acc.invalidResponse[ctrlToUse.id];
          }
          if (ctrlToUse.state?.options !== undefined) {
            // we also have to update the options of the current control if needed.
            ctrlToUse.state = {
              ...ctrlToUse.state,
              options: ctrlToUse.state.options.map(
                (opt: { selected: boolean; value: string; label: string }) => {
                  return {
                    ...opt,
                    selected: ctrlToUse.state?.value.includes(opt.value),
                  };
                },
              ),
            };
          }
          acc.state.push(ctrlToUse);

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

      const stateUpdated = {
        ...state,
        inputControls: [...icsUpdated.state],
        validResponse: { ...icsUpdated.response },
        validationResultState: { ...icsUpdated.invalidResponse },
      };
      emitCallbackToUser(
        stateUpdated,
        payload,
        payload.ctrlUpdated.slaveDependencies === undefined ||
          payload.ctrlUpdated.slaveDependencies.length === 0,
      );

      return stateUpdated;
    }
    case INPUT_CONTROLS_ACTIONS.UPDATE_SLAVE_DEPENDENCIES: {
      // Create a Map from the payload array
      const payloadMap: Map<string, InputControlOption[]> = new Map(
        payload.inputControlState.map(
          (item: {
            id: string;
            options: InputControlOption[];
            uri: string;
          }) => [item.id, item.options],
        ),
      );
      // Iterate over the state array and update the options property
      const theNewValidResponse = JSON.parse(
        JSON.stringify(state.validResponse),
      );
      const icsUpdated = state.inputControls.map(
        (item: InputControlProperties) => {
          if (!payloadMap.has(item.id)) {
            return item;
          }
          const newValueForIc = payloadMap
            .get(item.id)!
            .filter((opt) => opt.selected)
            .map((opt) => opt.value);
          theNewValidResponse[item.id] = newValueForIc;
          return {
            ...item,
            state: {
              ...item.state,
              options: payloadMap.get(item.id)! as InputControlOption[],
              value: newValueForIc,
            },
          } as InputControlProperties;
        },
      );
      const theNewState = {
        ...state,
        inputControls: [...icsUpdated],
        validResponse: { ...theNewValidResponse },
      };
      emitCallbackToUser(theNewState, payload);
      return theNewState;
    }
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
  return (
    <InputControlsContext.Provider value={{ state, dispatch }}>
      {children}
    </InputControlsContext.Provider>
  );
};
