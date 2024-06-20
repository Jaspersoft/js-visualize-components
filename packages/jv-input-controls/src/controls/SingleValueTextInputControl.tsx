import { JVTextField } from '@jaspersoft/jv-ui-components';
import { ChangeEvent, useState } from 'react';

export interface TextFieldICProps {
    label?: string;
    defaultValue?: string;
    value?: string;
    id?: string;
    type?: string;
    variant?: 'standard' | 'filled' | 'outlined' | undefined;
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
    const { value: theValue, ...remainingProps } = props;
    const [ currentValue, setCurrentValue ] = useState<string>(theValue || props.defaultValue || '');
    return <JVTextField variant={props.variant || 'outlined'}
                        value={currentValue}
                        onChange={defaultOnChangeHandler}
                        {...remainingProps}
    />;
};

