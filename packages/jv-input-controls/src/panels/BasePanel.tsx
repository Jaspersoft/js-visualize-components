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
import { DateTimePickerTextFieldInputControl } from "../controls/DateTimePickerTextFieldInputControl";
import { DateTimePickerInputControl } from "../controls/DateTimePickerInputControl";
import { TimePickerInputControl } from "../controls/TimePickerInputControl";
import { TimePickerTextFieldInputControl } from "../controls/TimePickerTextFieldInputControl";
import { getParamsForICCascadingReq } from "../utils/StringUtils";

export interface BasePanelProps {
  config?: InputControlsTypeConfig;
  server: string;
  uri: string;
}

export default function BasePanel(props: BasePanelProps): JSX.Element {
  const { state, dispatch } = useContext(InputControlsContext);

  const formatValueForIc = (ic: InputControlProperties) => {
    if (Array.isArray(ic.state!.value!)) {
      return ic.state!.value!.map((value) => value.toString());
    } else {
      return [ic.state!.value!.toString()];
    }
  };
  const controlsPathForResource = (
    ic: InputControlProperties,
  ): { url: string; options: RequestInit } => {
    const slaveStr = getParamsForICCascadingReq(ic.slaveDependencies!);
    const url =
      props.server +
      "/rest_v2/reports" +
      ic.uri!.slice("repo:".length) +
      "/inputControls/" +
      slaveStr +
      "/values?freshData=false&includeTotalCount=true";
    let slaveDepBody: { [x: string]: string[] } = {};
    for (const slaveDep of ic.slaveDependencies!) {
      const icFromState = state.inputControls.find(({ id }) => {
        return id === slaveDep;
      });
      slaveDepBody[slaveDep] = formatValueForIc(icFromState!);
    }
    const reqBody = {
      ...slaveDepBody,
      [ic.id]: [...formatValueForIc(ic)],
    };
    return {
      url,
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      },
    };
  };

  const handleCascadingRequest = (ctrlUpdated: InputControlProperties) => {
    dispatch({
      type: INPUT_CONTROLS_ACTIONS.SET_INITIATOR_ID_CASCADING_IC,
      payload: {
        initiatorIdCascadingIc: ctrlUpdated.id,
      },
    });

    // TODO: We should fix the CORS issue
    const { url, options } = controlsPathForResource(ctrlUpdated);
    fetch(url, options)
      .then((response) => {
        dispatch({
          type: INPUT_CONTROLS_ACTIONS.UPDATE_SLAVE_DEPENDENCIES,
          payload: {
            ...response.body,
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
    if (control.type === "singleValueDatetime") {
      if (props.config?.singleValueDatetime?.type === "material") {
        return (
          <DateTimePickerInputControl
            {...control}
            key={control.id}
            handleIcChange={handleIcChange}
          />
        );
      }
      return (
        <DateTimePickerTextFieldInputControl
          {...control}
          key={control.id}
          handleIcChange={handleIcChange}
        />
      );
    }
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
    if (control.type === "singleValueTime") {
      if (props.config?.singleValueTime?.type === "material") {
        return (
          <TimePickerInputControl
            {...control}
            key={control.id}
            handleIcChange={handleIcChange}
          />
        );
      }
      return (
        <TimePickerTextFieldInputControl
          {...control}
          key={control.id}
          handleIcChange={handleIcChange}
        />
      );
    }
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
