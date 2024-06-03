import React, { forwardRef } from 'react';
import { Drawer as MuiDrawer, DrawerProps as MuiDrawerProps } from '@mui/material';

export const Drawer = forwardRef<HTMLDivElement, MuiDrawerProps>(({
    classes = {}, elevation = 6, open = false, className = '', ...rest
}, ref) => {
    const { paper: paperClasses = '', ...restClasses } = classes;
    return (
        <MuiDrawer
            ref={ref}
            className={`jr-mDrawer ${className} mui`}
            open={open}
            elevation={elevation}
            classes={{ paper: `${paperClasses}`, ...restClasses }}
            {...rest}
        />
    )
});
