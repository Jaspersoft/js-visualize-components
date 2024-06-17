import * as React from 'react';
import {
    Grid as MuiGrid, GridProps as MuiGridProps
} from '@mui/material';

export const Grid = React.forwardRef<HTMLDivElement, MuiGridProps>(({
    children, ...rest
}, ref) => {
    return (
        <MuiGrid
            ref={ref}
            {...rest}
        >
            {children}
        </MuiGrid>
    )
})
