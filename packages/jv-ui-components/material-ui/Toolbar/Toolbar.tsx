import React from 'react';
import { Toolbar as MuiToolbar, ToolbarProps as MuiToolbarProps } from '@mui/material';

export const Toolbar = React.forwardRef<HTMLDivElement, MuiToolbarProps>(({
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
