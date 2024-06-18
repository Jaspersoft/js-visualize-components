import * as React from 'react'
import { JVSwitch, JVCheckbox } from '@jaspersoft/jv-ui-components'

export interface BooleanInputControlProps {
  type: 'checkbox' | 'switch',
  label?: string,
}

export default function BooleanInputControl(props: BooleanInputControlProps): React.JSX.Element {

  if (props.type === 'checkbox') {
    return (
      <JVCheckbox label={props.label || 'UNDEF'} />
    );
  } else {
    return (
      <JVSwitch label={props.label || 'UNDEF'} />
    );
  }
}
