/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { JVDatePickerProvider } from "@jaspersoft/jv-ui-components";
import { JSX, useContext } from "react";
import { InputControlProperties } from "@jaspersoft/jv-tools";
import { BooleanInputControl } from "../controls/BooleanInputControl";
import { DatePickerInputControl } from "../controls/DatePickerInputControl";
import { DatePickerTextFieldInputControl } from "../controls/DatePickerTextFieldInputControl";
import { DateTimePickerInputControl } from "../controls/DateTimePickerInputControl";
import { DateTimePickerTextFieldInputControl } from "../controls/DateTimePickerTextFieldInputControl";
import { SingleSelectInputControl } from "../controls/SingleSelectInputControl";
import { MultiSelectInputControl } from "../controls/MultiSelectInputControl";
import { SingleValueNumberInputControl } from "../controls/SingleValueNumberInputControl";
import { SingleValueTextInputControl } from "../controls/SingleValueTextInputControl";
import { TimePickerInputControl } from "../controls/TimePickerInputControl";
import { TimePickerTextFieldInputControl } from "../controls/TimePickerTextFieldInputControl";
import { InputControlsTypeConfig } from "../InputControls";
import { getDefaultValueFromParamsAndProps } from "../utils/DefaultValueUtils";
import {
  INPUT_CONTROLS_ACTIONS,
  InputControlsContext,
} from "../reducer/InputControlsReducer";

export interface BasePanelProps {
  controls?: any;
  config?: InputControlsTypeConfig;
  events?: {
    change?: (
      ic: { [key: string]: any[] },
      validationResult: { [key: string]: string } | boolean,
    ) => void;
  };
  params?: { [key: string]: string[] };
}

const SAMPLE_IC_UPDATED_RESPONSE = {
  inputControlState: [
    {
      uri: "/public/Samples/Resources/Input_Controls/Product_Category",
      id: "Product_Category",
      options: [
        {
          selected: true,
          label: "Meat",
          value: "Meat",
        },
        {
          selected: false,
          label: "Side Dishes",
          value: "Side Dishes",
        },
        {
          selected: false,
          label: "All",
          value: "All",
        },
      ],
    },
    {
      uri: "/public/Samples/Resources/Input_Controls/Product_Name",
      id: "Product_Name",
      options: [
        {
          selected: true,
          label: "American Beef Bologna",
          value: "American Beef Bologna",
        },
        {
          selected: false,
          label: "American Chicken Hot Dogs",
          value: "American Chicken Hot Dogs",
        },
        {
          selected: false,
          label: "American Corned Beef",
          value: "American Corned Beef",
        },
        {
          selected: false,
          label: "American Foot-Long Hot Dogs",
          value: "American Foot-Long Hot Dogs",
        },
        {
          selected: false,
          label: "American Low Fat Bologna",
          value: "American Low Fat Bologna",
        },
        {
          selected: false,
          label: "American Pimento Loaf",
          value: "American Pimento Loaf",
        },
        {
          selected: false,
          label: "American Roasted Chicken",
          value: "American Roasted Chicken",
        },
        {
          selected: false,
          label: "American Sliced Chicken",
          value: "American Sliced Chicken",
        },
        {
          selected: false,
          label: "American Sliced Ham",
          value: "American Sliced Ham",
        },
        {
          selected: false,
          label: "American Sliced Turkey",
          value: "American Sliced Turkey",
        },
        {
          selected: false,
          label: "American Turkey Hot Dogs",
          value: "American Turkey Hot Dogs",
        },
        {
          selected: false,
          label: "Cutting Edge Beef Bologna",
          value: "Cutting Edge Beef Bologna",
        },
        {
          selected: false,
          label: "Cutting Edge Chicken Hot Dogs",
          value: "Cutting Edge Chicken Hot Dogs",
        },
        {
          selected: false,
          label: "Cutting Edge Corned Beef",
          value: "Cutting Edge Corned Beef",
        },
        {
          selected: false,
          label: "Cutting Edge Foot-Long Hot Dogs",
          value: "Cutting Edge Foot-Long Hot Dogs",
        },
        {
          selected: false,
          label: "Cutting Edge Low Fat Bologna",
          value: "Cutting Edge Low Fat Bologna",
        },
        {
          selected: false,
          label: "Cutting Edge Pimento Loaf",
          value: "Cutting Edge Pimento Loaf",
        },
        {
          selected: false,
          label: "Cutting Edge Roasted Chicken",
          value: "Cutting Edge Roasted Chicken",
        },
        {
          selected: false,
          label: "Cutting Edge Sliced Chicken",
          value: "Cutting Edge Sliced Chicken",
        },
        {
          selected: false,
          label: "Cutting Edge Sliced Ham",
          value: "Cutting Edge Sliced Ham",
        },
        {
          selected: false,
          label: "Cutting Edge Sliced Turkey",
          value: "Cutting Edge Sliced Turkey",
        },
        {
          selected: false,
          label: "Cutting Edge Turkey Hot Dogs",
          value: "Cutting Edge Turkey Hot Dogs",
        },
        {
          selected: false,
          label: "Lake Beef Bologna",
          value: "Lake Beef Bologna",
        },
        {
          selected: false,
          label: "Lake Chicken Hot Dogs",
          value: "Lake Chicken Hot Dogs",
        },
        {
          selected: false,
          label: "Lake Corned Beef",
          value: "Lake Corned Beef",
        },
        {
          selected: false,
          label: "Lake Foot-Long Hot Dogs",
          value: "Lake Foot-Long Hot Dogs",
        },
        {
          selected: false,
          label: "Lake Low Fat Bologna",
          value: "Lake Low Fat Bologna",
        },
        {
          selected: false,
          label: "Lake Pimento Loaf",
          value: "Lake Pimento Loaf",
        },
        {
          selected: false,
          label: "Lake Roasted Chicken",
          value: "Lake Roasted Chicken",
        },
        {
          selected: false,
          label: "Lake Sliced Chicken",
          value: "Lake Sliced Chicken",
        },
        {
          selected: false,
          label: "Lake Sliced Ham",
          value: "Lake Sliced Ham",
        },
        {
          selected: false,
          label: "Lake Sliced Turkey",
          value: "Lake Sliced Turkey",
        },
        {
          selected: false,
          label: "Lake Turkey Hot Dogs",
          value: "Lake Turkey Hot Dogs",
        },
        {
          selected: false,
          label: "Moms Beef Bologna",
          value: "Moms Beef Bologna",
        },
        {
          selected: false,
          label: "Moms Chicken Hot Dogs",
          value: "Moms Chicken Hot Dogs",
        },
        {
          selected: false,
          label: "Moms Corned Beef",
          value: "Moms Corned Beef",
        },
        {
          selected: false,
          label: "Moms Foot-Long Hot Dogs",
          value: "Moms Foot-Long Hot Dogs",
        },
        {
          selected: false,
          label: "Moms Low Fat Bologna",
          value: "Moms Low Fat Bologna",
        },
        {
          selected: false,
          label: "Moms Pimento Loaf",
          value: "Moms Pimento Loaf",
        },
        {
          selected: false,
          label: "Moms Roasted Chicken",
          value: "Moms Roasted Chicken",
        },
        {
          selected: false,
          label: "Moms Sliced Chicken",
          value: "Moms Sliced Chicken",
        },
        {
          selected: false,
          label: "Moms Sliced Ham",
          value: "Moms Sliced Ham",
        },
        {
          selected: false,
          label: "Moms Sliced Turkey",
          value: "Moms Sliced Turkey",
        },
        {
          selected: false,
          label: "Moms Turkey Hot Dogs",
          value: "Moms Turkey Hot Dogs",
        },
        {
          selected: false,
          label: "Red Spade Beef Bologna",
          value: "Red Spade Beef Bologna",
        },
        {
          selected: false,
          label: "Red Spade Chicken Hot Dogs",
          value: "Red Spade Chicken Hot Dogs",
        },
        {
          selected: false,
          label: "Red Spade Corned Beef",
          value: "Red Spade Corned Beef",
        },
        {
          selected: false,
          label: "Red Spade Foot-Long Hot Dogs",
          value: "Red Spade Foot-Long Hot Dogs",
        },
        {
          selected: false,
          label: "Red Spade Low Fat Bologna",
          value: "Red Spade Low Fat Bologna",
        },
        {
          selected: false,
          label: "Red Spade Pimento Loaf",
          value: "Red Spade Pimento Loaf",
        },
        {
          selected: false,
          label: "Red Spade Roasted Chicken",
          value: "Red Spade Roasted Chicken",
        },
        {
          selected: false,
          label: "Red Spade Sliced Chicken",
          value: "Red Spade Sliced Chicken",
        },
        {
          selected: false,
          label: "Red Spade Sliced Ham",
          value: "Red Spade Sliced Ham",
        },
        {
          selected: false,
          label: "Red Spade Sliced Turkey",
          value: "Red Spade Sliced Turkey",
        },
        {
          selected: false,
          label: "Red Spade Turkey Hot Dogs",
          value: "Red Spade Turkey Hot Dogs",
        },
      ],
    },
  ],
};

export default function BasePanel(props: BasePanelProps): JSX.Element {
  const { state, dispatch } = useContext(InputControlsContext);

  const handleCascadingRequest = (ctrlUpdated: InputControlProperties) => {
    dispatch({
      type: INPUT_CONTROLS_ACTIONS.SET_INITIATING_CASCADING_IC_ID,
      payload: {
        initiatingCascadingIcId: ctrlUpdated.id,
      },
    });

    console.log("triggering a new CALL from: ", ctrlUpdated.id);
    // TODO: We should trigger the CALL to the server to get the new data in case it's a cascading input control
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(() => {
        dispatch({
          type: INPUT_CONTROLS_ACTIONS.UPDATE_SLAVE_DEPENDENCIES,
          payload: {
            ...SAMPLE_IC_UPDATED_RESPONSE,
            ctrlUpdated,
            props,
          },
        });
      })
      .catch((error) => console.error("error: ", error))
      .finally(() =>
        dispatch({
          type: INPUT_CONTROLS_ACTIONS.SET_INITIATING_CASCADING_IC_ID,
          payload: {
            initiatingCascadingIcId: "",
          },
        }),
      );
  };

  const getControlProps = (
    control: any,
    params?: { [key: string]: string[] },
  ) => {
    return {
      id: control.id,
      label: control.label,
      type: control.type,
      readOnly: control.readOnly,
      visible: control.visible,
      mandatory: control.mandatory,
      uri: control.uri,
      state: {
        ...control.state,
        // TODO: I have to move this to the state: getDefaultValueFromParamsAndProps
        value: getDefaultValueFromParamsAndProps({ ...control, params }),
      },
      masterDependencies: control.masterDependencies,
      slaveDependencies: control.slaveDependencies,
      events: {
        change: (
          ctrlUpdated: InputControlProperties,
          resultValidation?: { [key: string]: string },
        ) => {
          dispatch({
            type: INPUT_CONTROLS_ACTIONS.UPDATE_DATA,
            payload: {
              ctrlUpdated,
              resultValidation,
              props,
            },
          });
          const slaveDependenciesOfInitialCascadingIC =
            state.inputControls.find((ic) => {
              return ic.id === state.initiatingCascadingIcId;
            });
          const isSlaveDep =
            slaveDependenciesOfInitialCascadingIC?.slaveDependencies?.includes(
              ctrlUpdated.id,
            );
          if (state.initiatingCascadingIcId !== ctrlUpdated.id && !isSlaveDep) {
            // (state.initiatingCascadingIcId !== ctrlUpdated.id) ||
            //   (ctrlUpdated.slaveDependencies !== undefined &&
            //     ctrlUpdated.slaveDependencies.length > 0 &&
            //     state.initiatingCascadingIcId === "")
            handleCascadingRequest(ctrlUpdated);
          }
        },
      },
    };
  };
  const buildControl = (control: any) => {
    // TODO: need to use the values from the state instead of the values from the controls!
    const theProps = getControlProps(control, props.params);
    if (control.type === "bool") {
      return (
        <BooleanInputControl
          {...theProps}
          key={control.id}
          styleType={props.config?.bool?.type}
        />
      );
    }
    if (control.type === "singleValueText") {
      let inputTypeText = props.config?.singleValueText?.type || "text";
      if (inputTypeText === "textField") {
        inputTypeText = "text";
      }
      return (
        <SingleValueTextInputControl
          {...theProps}
          key={control.id}
          type={inputTypeText}
          dataType={control.dataType}
          validationRules={control.validationRules}
        />
      );
    }
    if (control.type === "singleValueNumber") {
      return (
        <SingleValueNumberInputControl
          {...theProps}
          key={control.id}
          dataType={control.dataType}
          validationRules={control.validationRules}
        />
      );
    }

    if (control.type === "singleValueDate") {
      if (props?.config?.singleValueDate?.type === "material") {
        return (
          <DatePickerInputControl
            {...theProps}
            key={control.id}
            dataType={control.dataType}
            validationRules={control.validationRules}
          />
        );
      }
      return (
        <DatePickerTextFieldInputControl
          {...theProps}
          key={control.id}
          dataType={control.dataType}
          validationRules={control.validationRules}
        />
      );
    }
    if (control.type === "singleValueDatetime") {
      if (props.config?.singleValueDatetime?.type === "material") {
        return (
          <DateTimePickerInputControl
            {...theProps}
            key={control.id}
            dataType={control.dataType}
            validationRules={control.validationRules}
          />
        );
      }
      return (
        <DateTimePickerTextFieldInputControl
          {...theProps}
          key={control.id}
          dataType={control.dataType}
          validationRules={control.validationRules}
        />
      );
    }
    if (control.type === "singleSelect") {
      return (
        <SingleSelectInputControl
          {...theProps}
          key={control.id}
          validationRules={control.validationRules}
        />
      );
    }
    if (control.type === "multiSelect") {
      return (
        <MultiSelectInputControl
          {...theProps}
          key={control.id}
          validationRules={control.validationRules}
        />
      );
    }
    if (control.type === "singleValueTime") {
      if (props.config?.singleValueTime?.type === "material") {
        return (
          <TimePickerInputControl
            {...theProps}
            key={control.id}
            dataType={control.dataType}
            validationRules={control.validationRules}
          />
        );
      }
      return (
        <TimePickerTextFieldInputControl
          {...theProps}
          key={control.id}
          dataType={control.dataType}
          validationRules={control.validationRules}
        />
      );
    }
  };

  const buildControls = (controlMap: any) => {
    if (controlMap?.data) {
      return controlMap.data.map(buildControl);
    }
    if (controlMap) {
      return (
        <span className="control-map-text">{JSON.stringify(controlMap)}</span>
      );
    }
    return <></>;
  };

  return (
    <div className="jv-inputControlPanel">
      <JVDatePickerProvider>
        {buildControls(props.controls)}
      </JVDatePickerProvider>
    </div>
  );
}
