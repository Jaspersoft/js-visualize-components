import React, { forwardRef } from 'react';
import MuiCollapse, { CollapseProps as MuiCollapseProps } from '@mui/material/Collapse/Collapse';

export const Collapse = forwardRef<HTMLElement, MuiCollapseProps>(({
    ...rest
}, ref) => {
    return (
        <MuiCollapse
            ref={ref}
            {...rest}
        />
    )
})
