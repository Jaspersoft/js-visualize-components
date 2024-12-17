/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { JVDatePickerProvider } from "@jaspersoft/jv-ui-components";
import { JSX, ReactElement, useContext } from "react";
import { InputControlProperties } from "@jaspersoft/jv-tools";
import { BooleanInputControl } from "../controls/BooleanInputControl";
import { SingleSelectInputControl } from "../controls/SingleSelectInputControl";
import { MultiSelectInputControl } from "../controls/MultiSelectInputControl";
import { InputControlsTypeConfig } from "../InputControls";
import {
  INPUT_CONTROLS_ACTIONS,
  InputControlsContext,
} from "../reducer/InputControlsReducer";
import { SingleValueTextInputControl } from "../controls/SingleValueTextInputControl";
import { SingleValueNumberInputControl } from "../controls/SingleValueNumberInputControl";
import { DatePickerInputControl } from "../controls/DatePickerInputControl";
import { DatePickerTextFieldInputControl } from "../controls/DatePickerTextFieldInputControl";

export interface BasePanelProps {
  config?: InputControlsTypeConfig;
}

const SAMPLE_IC_UPDATED_RESPONSE = {
  inputControlState: [
    {
      uri: "/public/Samples/Resources/Input_Controls/Product_Department",
      id: "Product_Department",
      options: [
        {
          selected: true,
          label: "Alcoholic Beverages",
          value: "Alcoholic Beverages",
        },
        {
          selected: false,
          label: "Beverages",
          value: "Beverages",
        },
        {
          selected: false,
          label: "Dairy",
          value: "Dairy",
        },
        {
          selected: false,
          label: "All",
          value: "All",
        },
      ],
    },
    {
      uri: "/public/Samples/Resources/Input_Controls/Product_Category",
      id: "Product_Category",
      options: [
        {
          selected: true,
          label: "Beer and Wine",
          value: "Beer and Wine",
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
          label: "Good Chablis Wine",
          value: "Good Chablis Wine",
        },
        {
          selected: false,
          label: "Good Chardonnay",
          value: "Good Chardonnay",
        },
        {
          selected: false,
          label: "Good Chardonnay Wine",
          value: "Good Chardonnay Wine",
        },
        {
          selected: false,
          label: "Good Imported Beer",
          value: "Good Imported Beer",
        },
        {
          selected: false,
          label: "Good Light Beer",
          value: "Good Light Beer",
        },
        {
          selected: false,
          label: "Good Light Wine",
          value: "Good Light Wine",
        },
        {
          selected: false,
          label: "Good Merlot Wine",
          value: "Good Merlot Wine",
        },
        {
          selected: false,
          label: "Good White Zinfandel Wine",
          value: "Good White Zinfandel Wine",
        },
        {
          selected: false,
          label: "Pearl Chablis Wine",
          value: "Pearl Chablis Wine",
        },
        {
          selected: false,
          label: "Pearl Chardonnay",
          value: "Pearl Chardonnay",
        },
        {
          selected: false,
          label: "Pearl Chardonnay Wine",
          value: "Pearl Chardonnay Wine",
        },
        {
          selected: false,
          label: "Pearl Imported Beer",
          value: "Pearl Imported Beer",
        },
        {
          selected: false,
          label: "Pearl Light Beer",
          value: "Pearl Light Beer",
        },
        {
          selected: false,
          label: "Pearl Light Wine",
          value: "Pearl Light Wine",
        },
        {
          selected: false,
          label: "Pearl Merlot Wine",
          value: "Pearl Merlot Wine",
        },
        {
          selected: false,
          label: "Pearl White Zinfandel Wine",
          value: "Pearl White Zinfandel Wine",
        },
        {
          selected: false,
          label: "Portsmouth Chablis Wine",
          value: "Portsmouth Chablis Wine",
        },
        {
          selected: false,
          label: "Portsmouth Chardonnay",
          value: "Portsmouth Chardonnay",
        },
        {
          selected: false,
          label: "Portsmouth Chardonnay Wine",
          value: "Portsmouth Chardonnay Wine",
        },
        {
          selected: false,
          label: "Portsmouth Imported Beer",
          value: "Portsmouth Imported Beer",
        },
        {
          selected: false,
          label: "Portsmouth Light Beer",
          value: "Portsmouth Light Beer",
        },
        {
          selected: false,
          label: "Portsmouth Light Wine",
          value: "Portsmouth Light Wine",
        },
        {
          selected: false,
          label: "Portsmouth Merlot Wine",
          value: "Portsmouth Merlot Wine",
        },
        {
          selected: false,
          label: "Portsmouth White Zinfandel Wine",
          value: "Portsmouth White Zinfandel Wine",
        },
        {
          selected: false,
          label: "Top Measure Chablis Wine",
          value: "Top Measure Chablis Wine",
        },
        {
          selected: false,
          label: "Top Measure Chardonnay",
          value: "Top Measure Chardonnay",
        },
        {
          selected: false,
          label: "Top Measure Chardonnay Wine",
          value: "Top Measure Chardonnay Wine",
        },
        {
          selected: false,
          label: "Top Measure Imported Beer",
          value: "Top Measure Imported Beer",
        },
        {
          selected: false,
          label: "Top Measure Light Beer",
          value: "Top Measure Light Beer",
        },
        {
          selected: false,
          label: "Top Measure Light Wine",
          value: "Top Measure Light Wine",
        },
        {
          selected: false,
          label: "Top Measure Merlot Wine",
          value: "Top Measure Merlot Wine",
        },
        {
          selected: false,
          label: "Top Measure White Zinfandel Wine",
          value: "Top Measure White Zinfandel Wine",
        },
        {
          selected: false,
          label: "Walrus Chablis Wine",
          value: "Walrus Chablis Wine",
        },
        {
          selected: false,
          label: "Walrus Chardonnay",
          value: "Walrus Chardonnay",
        },
        {
          selected: false,
          label: "Walrus Chardonnay Wine",
          value: "Walrus Chardonnay Wine",
        },
        {
          selected: false,
          label: "Walrus Imported Beer",
          value: "Walrus Imported Beer",
        },
        {
          selected: false,
          label: "Walrus Light Beer",
          value: "Walrus Light Beer",
        },
        {
          selected: false,
          label: "Walrus Light Wine",
          value: "Walrus Light Wine",
        },
        {
          selected: false,
          label: "Walrus Merlot Wine",
          value: "Walrus Merlot Wine",
        },
        {
          selected: false,
          label: "Walrus White Zinfandel Wine",
          value: "Walrus White Zinfandel Wine",
        },
      ],
    },
  ],
};

export default function BasePanel(props: BasePanelProps): JSX.Element {
  const { state, dispatch } = useContext(InputControlsContext);

  const handleCascadingRequest = (ctrlUpdated: InputControlProperties) => {
    dispatch({
      type: INPUT_CONTROLS_ACTIONS.SET_INITIATOR_ID_CASCADING_IC,
      payload: {
        initiatorIdCascadingIc: ctrlUpdated.id,
      },
    });

    // TODO: We should trigger the CALL to the server to get the new data in case it's a cascading input control
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(() => {
        dispatch({
          type: INPUT_CONTROLS_ACTIONS.UPDATE_SLAVE_DEPENDENCIES,
          payload: {
            ...SAMPLE_IC_UPDATED_RESPONSE,
            ctrlUpdated,
          },
        });
      })
      .catch((error) => console.error("error: ", error))
      .finally(() =>
        dispatch({
          type: INPUT_CONTROLS_ACTIONS.SET_INITIATOR_ID_CASCADING_IC,
          payload: {
            initiatorIdCascadingIc: "",
          },
        }),
      );
  };

  const handleIcChange = (
    ctrlUpdated: InputControlProperties,
    resultValidation?: { [key: string]: string },
  ) => {
    dispatch({
      type: INPUT_CONTROLS_ACTIONS.UPDATE_DATA,
      payload: {
        ctrlUpdated,
        resultValidation,
      },
    });
    if (
      ctrlUpdated.slaveDependencies &&
      ctrlUpdated.slaveDependencies.length > 0
    ) {
      handleCascadingRequest(ctrlUpdated);
    }
  };

  const buildControl = (control: any) => {
    if (control.type === "bool") {
      return (
        <BooleanInputControl
          {...control}
          key={control.id}
          styleType={props.config?.bool?.type}
          handleIcChange={handleIcChange}
        />
      );
    }
    if (control.type === "singleValueText") {
      return (
        <SingleValueTextInputControl
          {...control}
          key={control.id}
          dataType={control.dataType}
          validationRules={control.validationRules}
          handleIcChange={handleIcChange}
        />
      );
    }
    if (control.type === "singleValueNumber") {
      return (
        <SingleValueNumberInputControl
          {...control}
          key={control.id}
          dataType={control.dataType}
          validationRules={control.validationRules}
          handleIcChange={handleIcChange}
        />
      );
    }

    if (control.type === "singleValueDate") {
      if (props?.config?.singleValueDate?.type === "material") {
        return (
          <DatePickerInputControl
            {...control}
            key={control.id}
            handleIcChange={handleIcChange}
          />
        );
      }
      return (
        <DatePickerTextFieldInputControl
          {...control}
          key={control.id}
          handleIcChange={handleIcChange}
        />
      );
    }
    // if (control.type === "singleValueDatetime") {
    //   if (props.config?.singleValueDatetime?.type === "material") {
    //     return (
    //       <DateTimePickerInputControl
    //         {...control}
    //         key={control.id}
    //         dataType={control.dataType}
    //         validationRules={control.validationRules}
    //       />
    //     );
    //   }
    //   return (
    //     <DateTimePickerTextFieldInputControl
    //       {...control}
    //       key={control.id}
    //       dataType={control.dataType}
    //       validationRules={control.validationRules}
    //     />
    //   );
    // }
    if (control.type === "singleSelect") {
      return (
        <SingleSelectInputControl
          {...control}
          handleIcChange={handleIcChange}
          key={control.id}
          validationRules={control.validationRules}
        />
      );
    }
    if (control.type === "multiSelect") {
      return (
        <MultiSelectInputControl
          {...control}
          key={control.id}
          validationRules={control.validationRules}
          handleIcChange={handleIcChange}
        />
      );
    }
    // if (control.type === "singleValueTime") {
    //   if (props.config?.singleValueTime?.type === "material") {
    //     return (
    //       <TimePickerInputControl
    //         {...control}
    //         key={control.id}
    //         dataType={control.dataType}
    //         validationRules={control.validationRules}
    //       />
    //     );
    //   }
    //   return (
    //     <TimePickerTextFieldInputControl
    //       {...control}
    //       key={control.id}
    //       dataType={control.dataType}
    //       validationRules={control.validationRules}
    //     />
    //   );
    // }
  };

  const buildControls = () => {
    if (state.inputControls) {
      return state.inputControls.map(buildControl);
    }
    return (
      <span className="control-map-text">
        {JSON.stringify(state.inputControls)}
      </span>
    );
  };

  return (
    <div className="jv-inputControlPanel">
      <JVDatePickerProvider>
        {buildControls() as ReactElement[]}
      </JVDatePickerProvider>
    </div>
  );
}
