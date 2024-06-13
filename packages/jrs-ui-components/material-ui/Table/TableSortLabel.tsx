import MuiTableSortLabel, { TableSortLabelProps as MuiTableSortLabelProps } from '@mui/material/TableSortLabel';
import React from 'react';

export const TableSortLabel = React.forwardRef<HTMLElement, MuiTableSortLabelProps>(({
    ...rest
}, ref) => {
    return (
        <MuiTableSortLabel
            ref={ref}
            {...rest}
        />
    )
})
