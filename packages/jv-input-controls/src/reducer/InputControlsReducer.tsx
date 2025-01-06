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
import { getDefaultValueFromParamsAndProps } from "../utils/DefaultValueUtils";

export const INPUT_CONTROLS_ACTIONS = {
  UPDATE_DATA: "[INPUT_CONTROLS] UPDATE_DATA",
  UPDATE_SLAVE_DEPENDENCIES: "[INPUT_CONTROLS] UPDATE_SLAVE_DEPENDENCIES",
  SET_INITIATOR_ID_CASCADING_IC:
    "[INPUT_CONTROLS] SET_INITIATOR_ID_CASCADING_IC",
};

const emitCallbackToUser = (
  icsUpdated: InputControlsState,
  payload: {
    ctrlUpdated: InputControlProperties;
  },
) => {
  const isError = Object.keys(icsUpdated.validationResultState).length > 0;
  const cInputControl = icsUpdated.inputControls.find(
    ({ id }) => id === payload.ctrlUpdated.id,
  );
  cInputControl!.events?.change?.(
    icsUpdated.validResponse,
    isError ? icsUpdated.validationResultState : false,
  );
};

export interface InputControlsState {
  inputControls: InputControlProperties[];
  validResponse: { [key: string]: any[] };
  validationResultState: { [key: string]: string };
  initiatorIdCascadingIc?: string;
}

const updateDataForICs = (
  state: InputControlsState,
  payload: any,
): InputControlsState => {
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
      acc.state.push({ ...ctrl, ...ctrlToUse });

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
  if (
    payload.ctrlUpdated.slaveDependencies === undefined ||
    payload.ctrlUpdated.slaveDependencies.length === 0
  ) {
    emitCallbackToUser(stateUpdated, payload);
  }
  return stateUpdated;
};
const setInitiatorIDCascadingIC = (
  state: InputControlsState,
  payload: { initiatorIdCascadingIc: string },
): InputControlsState => {
  let masterIcId = payload.initiatorIdCascadingIc;
  let isLoading = true;
  if (masterIcId === "") {
    // If this happens, reset the state
    masterIcId = state.initiatorIdCascadingIc!;
    isLoading = false;
  }
  const newICs = state.inputControls.map((ic) => {
    if (!ic.masterDependencies) {
      return ic;
    }
    if (ic.masterDependencies.includes(masterIcId)) {
      return {
        ...ic,
        isLoading,
      };
    }
    return ic;
  });
  return {
    ...state,
    inputControls: [...newICs],
    initiatorIdCascadingIc: payload.initiatorIdCascadingIc,
  };
};
const updateSlaveDependencies = (
  state: InputControlsState,
  payload: {
    inputControlState: [
      { id: string; options: InputControlOption[]; uri: string },
    ];
    ctrlUpdated: InputControlProperties;
  },
): InputControlsState => {
  // Create a Map from the payload array
  const payloadMap: Map<string, InputControlOption[]> = new Map(
    payload.inputControlState.map((item) => [item.id, item.options]),
  );
  // Iterate over the state array and update the options property
  const theNewValidResponse = JSON.parse(JSON.stringify(state.validResponse));
  const icsUpdated = state.inputControls.map((item: InputControlProperties) => {
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
  });
  const theNewState = {
    ...state,
    inputControls: [...icsUpdated],
    validResponse: { ...theNewValidResponse },
  };
  emitCallbackToUser(theNewState, payload);
  return theNewState;
};

const inputControlsReducer = (
  state: InputControlsState,
  action: { type: string; payload: any },
): InputControlsState => {
  const { type, payload } = action;
  switch (type) {
    case INPUT_CONTROLS_ACTIONS.UPDATE_DATA: {
      return updateDataForICs(state, payload);
    }
    case INPUT_CONTROLS_ACTIONS.SET_INITIATOR_ID_CASCADING_IC: {
      return setInitiatorIDCascadingIC(state, payload);
    }
    case INPUT_CONTROLS_ACTIONS.UPDATE_SLAVE_DEPENDENCIES: {
      return updateSlaveDependencies(state, payload);
    }
    default:
      return state;
  }
};

export const InputControlsContext = createContext<{
  state: InputControlsState;
  dispatch: any;
}>({
  state: {
    inputControls: [],
    validResponse: {},
    validationResultState: {},
    initiatorIdCascadingIc: "",
  },
  dispatch: () => {},
});

const createInitialState = (
  initialState: InputControlProperties[],
  params: { [key: string]: string[] },
  events?: {
    change?: (
      ic: { [key: string]: any[] },
      validationResult: { [key: string]: string } | boolean,
    ) => void;
  },
): InputControlsState => {
  const fixedInitialState = initialState.map(
    (icProps: InputControlProperties) => {
      return {
        ...icProps,
        events,
        state: {
          ...icProps.state!,
          value: getDefaultValueFromParamsAndProps({ ...icProps, params }),
        },
      };
    },
  );
  return {
    // @ts-ignore
    inputControls: fixedInitialState,
    validResponse: {},
    validationResultState: {},
    initiatorIdCascadingIc: "",
  };
};

export const InputControlsProvider = ({
  children,
  initialState,
  overwriteParams,
  events,
}: {
  children: JSX.Element;
  initialState: InputControlProperties[];
  overwriteParams?: { [key: string]: string[] };
  events?: {
    change?: (
      ic: { [key: string]: any[] },
      validationResult: { [key: string]: string } | boolean,
    ) => void;
  };
}) => {
  const [state, dispatch] = useReducer(inputControlsReducer, initialState, () =>
    createInitialState(initialState, overwriteParams || {}, events),
  );
  return (
    <InputControlsContext.Provider value={{ state, dispatch }}>
      {children}
    </InputControlsContext.Provider>
  );
};
