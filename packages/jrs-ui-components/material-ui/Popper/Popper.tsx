import React, { forwardRef } from 'react';
import { Popper as MuiPopper, PopperProps as MuiPopperProps } from '@mui/material';

export type PopperProps = MuiPopperProps;

export const Popper = forwardRef<HTMLDivElement, PopperProps>(({
    ...rest
}, ref) => {
    return (
        <MuiPopper
            ref={ref}
            {...rest}
        />
    )
})
