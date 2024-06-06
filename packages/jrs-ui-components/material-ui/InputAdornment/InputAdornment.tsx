import React, { forwardRef } from 'react';
import { InputAdornment as MuiInputAdornment, InputAdornmentProps as MuiInputAdornmentProps } from '@mui/material';

export const InputAdornment = forwardRef<HTMLDivElement, MuiInputAdornmentProps>(({
    className = '', ...rest
}, ref) => {
    return (
        <MuiInputAdornment
            ref={ref}
            className={`${className} mui`}
            {...rest}
        />
    )
})
