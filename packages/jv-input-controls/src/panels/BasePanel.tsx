import { DatePickerProvider as JVDatePickerProvider } from "@jaspersoft/jv-ui-components/material-ui/Date/DatePickerProvider";
import * as React from "react";
import BooleanInputControl from "../controls/BooleanInputControl";
import { DatePickerInputControl } from "../controls/DatePickerInputControl";
import { DatePickerTextFieldInputControl } from "../controls/DatePickerTextFieldInputControl";
import { DateTimePickerInputControl } from "../controls/DateTimePickerInputControl";
import { DateTimePickerTextFieldInputControl } from "../controls/DateTimePickerTextFieldInputControl";
import { SingleValueNumberInputControl } from "../controls/SingleValueNumberInputControl";
import { SingleValueTextInputControl } from "../controls/SingleValueTextInputControl";
import { TimePickerInputControl } from "../controls/TimePickerInputControl";
import { TimePickerTextFieldInputControl } from "../controls/TimePickerTextFieldInputControl";
import { InputControlUserConfig } from "../InputControls";

export interface BasePanelProps {
  controls: any;
  config?: InputControlUserConfig;
}

export default function BasePanel(props: BasePanelProps): React.JSX.Element {
  const buildControl = (control: any) => {
    if (control.type === "bool") {
      return (
        <BooleanInputControl
          key={control.id}
          id={control.id}
          readOnly={control.readOnly}
          visible={control.visible}
          mandatory={control.mandatory}
          type={control.type}
          uri={control.uri}
          label={control.label}
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
          key={control.id}
          id={control.id}
          label={control.label}
          value={control.state.value}
          type={inputTypeText}
          readOnly={control.readOnly}
          visible={control.visible}
          mandatory={control.mandatory}
        />
      );
    }
    if (control.type === "singleValueNumber") {
      return (
        <SingleValueNumberInputControl
          key={control.id}
          id={control.id}
          label={control.label}
          value={control.state.value}
          type={control.type}
          readOnly={control.readOnly}
          visible={control.visible}
          mandatory={control.mandatory}
        />
      );
    }

    if (control.type === "singleValueDate") {
      if (props?.config?.singleValueDate?.type === "date_picker") {
        return (
          <DatePickerInputControl
            key={control.id}
            id={control.id}
            label={control.label}
            value={control.state.value}
            type={control.type}
            readOnly={control.readOnly}
            visible={control.visible}
            mandatory={control.mandatory}
            validationRules={control.validationRules}
          />
        );
      }
      return (
        <DatePickerTextFieldInputControl
          key={control.id}
          id={control.id}
          label={control.label}
          value={control.state.value}
          type={control.type}
          readOnly={control.readOnly}
          visible={control.visible}
          mandatory={control.mandatory}
          validationRules={control.validationRules}
        />
      );
    }
    if (control.type === "singleValueDatetime") {
      if (props.config?.singleValueDatetime?.type === "datetime_picker") {
        return (
          <DateTimePickerInputControl
            key={control.id}
            id={control.id}
            label={control.label}
            value={control.state.value}
            type={control.type}
            readOnly={control.readOnly}
            visible={control.visible}
            mandatory={control.mandatory}
            validationRules={control.validationRules}
          />
        );
      }
      return (
        <DateTimePickerTextFieldInputControl
          key={control.id}
          id={control.id}
          label={control.label}
          value={control.state.value}
          type={control.type}
          readOnly={control.readOnly}
          visible={control.visible}
          mandatory={control.mandatory}
        />
      );
    }
    if (control.type === "singleValueTime") {
      if (props.config?.singleValueTime?.type === "time_picker") {
        return (
          <TimePickerInputControl
            key={control.id}
            id={control.id}
            label={control.label}
            value={control.state.value}
            type={control.type}
            readOnly={control.readOnly}
            visible={control.visible}
            mandatory={control.mandatory}
            validationRules={control.validationRules}
          />
        );
      }
      return (
        <TimePickerTextFieldInputControl
          key={control.id}
          id={control.id}
          label={control.label}
          value={control.state.value}
          type={control.type}
          readOnly={control.readOnly}
          visible={control.visible}
          mandatory={control.mandatory}
          validationRules={control.validationRules}
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
