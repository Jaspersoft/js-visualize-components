import MuiCollapse, { CollapseProps as MuiCollapseProps } from '@mui/material/Collapse/Collapse';
import { forwardRef } from 'react';

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
