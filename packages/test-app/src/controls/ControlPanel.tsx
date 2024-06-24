import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { JVCheckbox, JVTextField } from '@jaspersoft/jv-ui-components';
import BooleanInputControl from '@jaspersoft/jv-input-controls/src/controls/BooleanInputControl.js'

export interface ControlPanelProps {
  title?: string,
  controlData: object
}

export default function ControlPanel(props: ControlPanelProps) {
  const buildControl = (control: any) => {

    if (control.type === "bool") {
      return (
        <JVCheckbox
          key={control.id}
          label={control.label}
          CheckboxProps={{ checked: (control.state.value === 'true') }}
        />
      );
    }
    if (control.type === "singleValueText") {
      return (
        <JVTextField
          key={control.id}
          label={control.label}
          value={control.state.value}
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
  }

  const buildControls = (controlMap: any) => {
    if (controlMap.data) return controlMap.data.map(buildControl);
    if (controlMap) return <span className='control-map-text'>{JSON.stringify(controlMap)}</span>;
    return <></>;
  }

  return (
    <div className="controls">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ul className="control-list">
          {buildControls(props.controlData)}
        </ul>
      </LocalizationProvider>
    </div>
  );
}
