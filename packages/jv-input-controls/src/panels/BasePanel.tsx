import { DatePickerProvider as JVDatePickerProvider } from "@jaspersoft/jv-ui-components/material-ui/Date/DatePickerProvider";
import * as React from "react";
import BooleanInputControl from "../controls/BooleanInputControl";
import { DatePickerInputControl } from "../controls/DatePickerInputControl";
import { DateTimePickerInputControl } from "../controls/DateTimePickerInputControl";
import { SingleValueTextInputControl } from "../controls/SingleValueTextInputControl";
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
    if (control.type === "singleValueDate") {
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
    if (control.type === "singleValueDatetime") {
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
  };

  const buildControls = (controlMap: any) => {
    if (controlMap.data) return controlMap.data.map(buildControl);
    if (controlMap)
      return (
        <span className="control-map-text">{JSON.stringify(controlMap)}</span>
      );
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
