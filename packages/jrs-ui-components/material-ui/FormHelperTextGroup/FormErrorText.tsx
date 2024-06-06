import React, { forwardRef } from 'react';
import FormHelperText, { FormHelperTextProps as MuiFormHelperTextProps } from '@mui/material/FormHelperText';

export type FormErrorTextProps = Partial<MuiFormHelperTextProps> & {text?: string}

export const FormError = forwardRef<HTMLDivElement, FormErrorTextProps>((props, ref) => {
    const { className = '', text, ...rest } = props || {};
    return (
        <>
            {text && (
                <FormHelperText
                    ref={ref}
                    className={`jv-mInput-error mui ${className}`}
                    {...rest}
                >
                    {text}
                </FormHelperText>
            )}
        </>
    )
});
