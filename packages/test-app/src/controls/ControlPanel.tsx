import * as React from 'react';
import { JVCheckbox, JVTextField, JVDatePicker } from '@jaspersoft/jv-ui-components';
import { SingleValueTextInputControl } from '@jaspersoft/jv-input-controls';

export interface ControlPanelProps {
  title?: string,
  controlData: object,
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
        <SingleValueTextInputControl
          key={control.id}
          id={control.id}
          label={control.label}
          value={control.state.value}
          type={'text'}
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

    if (control.type === 'singleValueDate') {
      const dateToProvide = '2022-04-17';
      return (
        <JVDatePicker key={control.id}
                      label={control.label}
                      value={dateToProvide}
                      views={[ 'year', 'month', 'day' ]}
                      readOnly={control.readOnly}
        />
      )
    }
  }

  const buildControls = (controlMap: any) => {
    if (controlMap.data) return controlMap.data.map(buildControl);
    if (controlMap) return <span className='control-map-text'>{JSON.stringify(controlMap)}</span>;
    return <></>;
  }

  return (
    <div className="controls">
        <ul className="control-list">
          {buildControls(props.controlData)}
        </ul>
    </div>
  );
}
