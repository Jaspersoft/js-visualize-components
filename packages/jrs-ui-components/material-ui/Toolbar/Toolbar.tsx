import React, { forwardRef } from 'react';
import { Toolbar as MuiToolbar, ToolbarProps as MuiToolbarProps } from '@mui/material';

export const Toolbar = forwardRef<HTMLDivElement, MuiToolbarProps>(({
    className = '', ...rest
}, ref) => {
    return (
        <MuiToolbar
            className={`jv-mToolbar ${className} mui`}
            ref={ref}
            {...rest}
        />
    )
})
