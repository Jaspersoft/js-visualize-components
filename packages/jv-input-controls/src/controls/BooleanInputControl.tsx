import * as React from 'react'
import { Switch as JVSwitch } from '@jaspersoft/jv-ui-components/material-ui/Switch/Switch'
import { Checkbox as JVCheckbox } from '@jaspersoft/jv-ui-components/material-ui/Checkbox/Checkbox'
import { BaseInputControlProps } from './BaseInputControl';

export type BoolICType = "switch" | "checkbox";

export interface BooleanInputControlProps extends BaseInputControlProps {
  label: string;
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
