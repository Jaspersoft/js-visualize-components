import { TextField as JVTextField } from '@jaspersoft/jv-ui-components/material-ui/TextField/TextField';
import { ChangeEvent, useState } from 'react';

export interface TextFieldICProps {
    label?: string;
    defaultValue?: string;
    value?: string;
    id?: string;
    type?: string;
    variant?: 'standard' | 'filled' | 'outlined' | undefined;
    size?: 'large'
}

/**
 * Text Input Control Component
 *
 * Will handle the text based input controls
 * @param props
 * @constructor
 */
export const SingleValueTextInputControl = (props: TextFieldICProps) => {
    const defaultOnChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCurrentValue(event.target.value);
    };
    const { value: theValue, size, ...remainingProps } = props;
    const theSize = size !== 'large' ? 'large' : size;
    const [ currentValue, setCurrentValue ] = useState<string>(theValue || props.defaultValue || '');
    return <JVTextField variant={props.variant || 'outlined'}
                        value={currentValue}
                        size={theSize}
                        onChange={defaultOnChangeHandler}
                        {...remainingProps}
    />;
};

