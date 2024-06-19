import { JVTextField } from '@jaspersoft/jv-ui-components';

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
 * @constructor
 */
export const TextFieldInputControl = (props: TextFieldICProps) => {
    return <JVTextField
      variant={props.variant || 'outlined'}
      onChange={defaultOnChangeHandler}
      {...props}
    />;
};

