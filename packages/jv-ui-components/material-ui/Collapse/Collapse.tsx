import * as React from 'react';
import MuiCollapse, { CollapseProps as MuiCollapseProps } from '@mui/material/Collapse/Collapse';

export const Collapse = React.forwardRef<HTMLElement, MuiCollapseProps>(({
    ...rest
}, ref) => {
    return (
        <MuiCollapse
            ref={ref}
            {...rest}
        />
    )
})
