import * as React from 'react';
import { InputAdornment as MuiInputAdornment, InputAdornmentProps as MuiInputAdornmentProps } from '@mui/material';

export const InputAdornment = React.forwardRef<HTMLDivElement, MuiInputAdornmentProps>(({
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
