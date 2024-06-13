import * as React from 'react';

import { JVTextField, TextFieldProps } from '../TextField/TextField';
import { ColorPickerSample } from './ColorPickerSample';

export type ColorPickerProps = Omit<TextFieldProps, 'value'> & {
    value?: string,
    allowTransparent?: boolean,
    onColorChange?: (color: string) => void
}

export const ColorPicker = React.forwardRef<HTMLDivElement, ColorPickerProps>(({
    InputProps = {}, value, allowTransparent, onColorChange = () => {}, className = '', ...rest
}, ref) => {

    const isColorPickerDisabled = rest.disabled ?? InputProps?.readOnly;

    return (
        <JVTextField
            ref={ref}
            className={`jv-mControl jv-mControlColor mui ${className}`}
            value={value}
            type="string"
            InputProps={{
                startAdornment: <ColorPickerSample
                    color={value}
                    onChange={onColorChange}
                    allowTransparent={allowTransparent}
                    disabled={isColorPickerDisabled}
                />,
                ...InputProps
            }}
            {...rest}
        />
    )
})
