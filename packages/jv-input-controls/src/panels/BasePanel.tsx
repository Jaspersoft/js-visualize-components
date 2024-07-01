import * as React from 'react'
import BooleanInputControl from '../controls/BooleanInputControl'

export interface BasePanelProps {
  controls: any,
  booleanStyle?: 'checkbox' | 'switch',
}

export default function BasePanel(props: BasePanelProps): React.JSX.Element {
  const buildControl = (control: any) => {
    if (control.type === 'bool') {
      return (
        <BooleanInputControl
          id={control.id}
          readOnly={control.readOnly}
          visible={control.visible}
          mandatory={control.mandatory}
          type={control.type}
          uri={control.uri}
          label={control.label}

          styleType={props.booleanStyle}
        />
      );
    }
  }

  const buildControls = (controlMap: any) => {
    if (controlMap.data) return controlMap.data.map(buildControl);
    if (controlMap) return <span className='control-map-text'>{JSON.stringify(controlMap)}</span>
    return <></>;
  }

  return (
    <div className='jv-inputControlPanel'>
      {buildControls(props.controls)}
    </div>
  )
}
