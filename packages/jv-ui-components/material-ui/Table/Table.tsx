import * as React from 'react';
import MuiTable, { TableProps as MuiTableProps } from '@mui/material/Table';

export const Table = React.forwardRef<HTMLTableElement, MuiTableProps>(({
    className = '', ...rest
}, ref) => {
    return (
        <MuiTable
            ref={ref}
            className={`jv-mTable ${className} mui`}
            {...rest}
        />
    )
})
