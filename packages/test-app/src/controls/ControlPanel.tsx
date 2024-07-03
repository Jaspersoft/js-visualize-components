import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { JVCheckbox, JVTextField } from "@jaspersoft/jv-ui-components";
import { SingleValueTextInputControl } from "@jaspersoft/jv-input-controls";
import BooleanInputControl from "@jaspersoft/jv-input-controls/src/controls/BooleanInputControl";

export interface ControlPanelProps {
  title?: string;
  controlData: object;
}

export default function ControlPanel(props: ControlPanelProps) {
  const buildControl = (control: any) => {
    if (control.type === "bool") {
      return (
        <BooleanInputControl
          key={control.id}
          id={control.id}
          label={control.label}
          type={control.type}
          readOnly={control.readOnly}
          visible={control.visible}
          mandatory={control.mandatory}
          state={control.state}
          styleType="switch"
        />
      );
    }
    if (control.type === "singleValueText") {
      return (
        <SingleValueTextInputControl
          key={control.id}
          id={control.id}
          label={control.label}
          value={control.state.value}
          type={"text"}
          readOnly={control.readOnly}
          visible={control.visible}
          mandatory={control.mandatory}
        />
      );
    }
    if (control.type === "singleValueNumber") {
      return (
        <JVTextField
          key={control.id}
          label={control.label}
          value={control.state.value}
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
    <div className="controls">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ul className="control-list">{buildControls(props.controlData)}</ul>
      </LocalizationProvider>
    </div>
  );
}
