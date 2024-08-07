import { DatePickerProvider as JVDatePickerProvider } from "@jaspersoft/jv-ui-components/material-ui/Date/DatePickerProvider";
import { JSX, useState } from "react";
import { BaseInputControlProps } from "../controls/BaseInputControl";
import { BooleanInputControl } from "../controls/BooleanInputControl";
import { DatePickerInputControl } from "../controls/DatePickerInputControl";
import { DatePickerTextFieldInputControl } from "../controls/DatePickerTextFieldInputControl";
import { DateTimePickerInputControl } from "../controls/DateTimePickerInputControl";
import { DateTimePickerTextFieldInputControl } from "../controls/DateTimePickerTextFieldInputControl";
import { SingleSelectInputControl } from "../controls/SingleSelectInputControl";
import { SingleValueNumberInputControl } from "../controls/SingleValueNumberInputControl";
import { SingleValueTextInputControl } from "../controls/SingleValueTextInputControl";
import { TimePickerInputControl } from "../controls/TimePickerInputControl";
import { TimePickerTextFieldInputControl } from "../controls/TimePickerTextFieldInputControl";
import { InputControlUserConfig } from "../InputControls";

export interface BasePanelProps {
  controls: any;
  config?: InputControlUserConfig;
  callbackChange?: (ic: BaseInputControlProps[]) => void;
}

export default function BasePanel(props: BasePanelProps): JSX.Element {
  const [inputControls, setInputControls] = useState<BaseInputControlProps[]>(
    props.controls.data,
  );
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
    };
  };
  const buildLatestJSON = (ctrlUpdated: BaseInputControlProps) => {
    const inputControlsUpdated = inputControls.map(
      (ctrl: BaseInputControlProps) => {
        if (ctrl.id !== ctrlUpdated.id) {
          return ctrl;
        }
        return ctrlUpdated;
      },
    );
    setInputControls(inputControlsUpdated);
    props.callbackChange?.(inputControlsUpdated);
  };
  const buildControl = (control: any) => {
    const theProps = getControlProps(control);
    if (control.type === "bool") {
      return (
        <BooleanInputControl
          {...theProps}
          key={control.id}
          styleType={props.config?.bool?.type}
          callbackChange={buildLatestJSON}
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
          callbackChange={buildLatestJSON}
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
          callbackChange={buildLatestJSON}
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
            callbackChange={buildLatestJSON}
          />
        );
      }
      return (
        <DatePickerTextFieldInputControl
          {...theProps}
          key={control.id}
          dataType={control.dataType}
          validationRules={control.validationRules}
          callbackChange={buildLatestJSON}
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
            callbackChange={buildLatestJSON}
          />
        );
      }
      return (
        <DateTimePickerTextFieldInputControl
          {...theProps}
          key={control.id}
          dataType={control.dataType}
          validationRules={control.validationRules}
          callbackChange={buildLatestJSON}
        />
      );
    }
    if (control.type === "singleSelect") {
      return (
        <SingleSelectInputControl
          {...theProps}
          key={control.id}
          validationRules={control.validationRules}
          callbackChange={buildLatestJSON}
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
            callbackChange={buildLatestJSON}
          />
        );
      }
      return (
        <TimePickerTextFieldInputControl
          {...theProps}
          key={control.id}
          dataType={control.dataType}
          validationRules={control.validationRules}
          callbackChange={buildLatestJSON}
        />
      );
    }
  };

  const buildControls = (controlMap: any) => {
    if (controlMap.data) {
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
