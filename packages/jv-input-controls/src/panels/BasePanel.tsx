import { JVDatePickerProvider } from "@jaspersoft/jv-ui-components";
import { JSX, useState } from "react";
import { InputControlProperties } from "@jaspersoft/jv-tools";
import { BooleanInputControl } from "../controls/BooleanInputControl";
import { PanelContext } from "../controls/contexts/PanelContext";
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
import { InputControlUserConfig } from "../InputControls";
import NotYetImplementedMessage from "../components/NotYetImplementedMessage";

export interface BasePanelProps {
  controls?: any;
  config?: InputControlUserConfig;
  events?: {
    change?: (
      ic: { [key: string]: any[] },
      validationResult: { [key: string]: string } | boolean,
    ) => void;
  };
  params?: { [key: string]: string[] };
}

export default function BasePanel(props: BasePanelProps): JSX.Element {
  const [inputControls, setInputControls] = useState<InputControlProperties[]>(
    props.controls?.data,
  );
  const [validResponse, setValidResponse] = useState<{ [key: string]: any[] }>(
    {},
  );
  const [validationResultState, setValidationResultState] = useState<{
    [key: string]: string;
  }>({});

  const buildLatestJSON = (
    ctrlUpdated: InputControlProperties,
    resultValidation?: { [key: string]: string },
  ) => {
    const inputControlsUpdated = inputControls?.reduce(
      (
        acc: {
          state: InputControlProperties[];
          response: { [key: string]: any[] };
          invalidResponse: { [key: string]: any };
        },
        ctrl: InputControlProperties,
      ) => {
        const theValidationResult = resultValidation?.[ctrl.id];
        const ctrlToUse = ctrl.id !== ctrlUpdated.id ? ctrl : ctrlUpdated;
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
        response: { ...validResponse },
        invalidResponse: { ...validationResultState },
      },
    );
    if (inputControls) {
      setInputControls(inputControlsUpdated.state);
      setValidResponse(inputControlsUpdated.response);
      setValidationResultState(inputControlsUpdated.invalidResponse);
      const isError =
        Object.keys(inputControlsUpdated.invalidResponse).length > 0;
      props.events?.change?.(
        inputControlsUpdated.response,
        isError ? inputControlsUpdated.invalidResponse : false,
      );
    }
  };

  const getControlProps = (control: any) => {
    return {
      id: control.id,
      label: control.label,
      type: control.type,
      readOnly: control.readOnly,
      visible: control.visible,
      mandatory: control.mandatory,
      uri: control.uri,
      state: control.state,
      events: {
        change: buildLatestJSON,
      },
    };
  };
  const buildControl = (control: any) => {
    const theProps = {
      ...getControlProps(control),
      params: { ...props.params },
    };
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

  const notImplemented = (controlMap: any) => {
    if (controlMap?.data) {
      return (
        controlMap.data.filter(
          (c: InputControlProperties) =>
            (c.slaveDependencies && c.slaveDependencies.length > 0) ||
            (c.masterDependencies && c.masterDependencies.length > 0),
        ).length > 0
      );
    }
    return false;
  };

  const buildControls = (controlMap: any) => {
    if (notImplemented(controlMap)) {
      return <NotYetImplementedMessage />;
    }
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
        <PanelContext.Provider value={inputControls}>
          {buildControls(props.controls)}
        </PanelContext.Provider>
      </JVDatePickerProvider>
    </div>
  );
}
