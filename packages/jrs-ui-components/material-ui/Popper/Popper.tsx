import * as React from 'react';
import { Popper as MuiPopper, PopperProps as MuiPopperProps } from '@mui/material';

export type PopperProps = MuiPopperProps;

export const Popper = React.forwardRef<HTMLDivElement, PopperProps>(({
    ...rest
}, ref) => {
    return (
        <MuiPopper
            ref={ref}
            {...rest}
        />
    )
})
