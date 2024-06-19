import { JVTextField } from '@jaspersoft/jv-ui-components';
import * as React from 'react';

export interface TextFieldICProps {
    label?: string;
    defaultValue?: string;
    value?: string;
    id?: string;
    type?: string;
    variant?: 'standard' | 'filled' | 'outlined' | undefined;
}

const defaultOnChangeHandler = () => {
    console.log('Default onChange handler');
};

/**
 * Text Input Control Component
 *
 * Will handle the text based input controls
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
export const TextFieldInputControl = (props: TextFieldICProps): React.JSX.Element => {
    return <JVTextField
      variant={props.variant || 'outlined'}
      onChange={defaultOnChangeHandler}
      {...props}
    />;
};

