import * as React from 'react'
import { JVSwitch, JVCheckbox } from '@jaspersoft/jv-ui-components'

export type BoolICType = "switch" | "checkbox";

export interface BooleanInputControlProps {
  type: BoolICType,
  label?: string,
}

export default function BooleanInputControl(props: BooleanInputControlProps): React.JSX.Element {
  if (props.type === 'switch') {
    return (
      <JVSwitch label={props.label || 'UNDEF'} />
    );
  } else {
    return (
      <JVCheckbox label={props.label || 'UNDEF'} />
    );
  }
}
