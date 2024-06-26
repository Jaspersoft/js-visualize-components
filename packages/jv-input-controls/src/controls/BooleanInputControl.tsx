import * as React from 'react'
import { JVSwitch, JVCheckbox } from '@jaspersoft/jv-ui-components'
import { BaseInputControlProps } from './BaseInputControl';

export type BoolICType = "switch" | "checkbox";

export interface BooleanInputControlProps extends BaseInputControlProps {
  styleType?: BoolICType;
}

export default function BooleanInputControl(props: BooleanInputControlProps): React.JSX.Element {
  if (props.styleType === 'switch') {
    return (
      <JVSwitch label={props.label || 'UNDEF'} />
    );
  } else {
    return (
      <JVCheckbox label={props.label || 'UNDEF'} />
    );
  }
}
