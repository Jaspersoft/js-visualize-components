import React, { forwardRef } from 'react';
import MuiTableRow, { TableRowProps as MuiTableRowProps } from '@mui/material/TableRow';

export type TableRowProps = MuiTableRowProps & {
    border?: boolean,
    headRow?: boolean
};
export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(({
    className = '', border = true, headRow = false, ...rest
}, ref) => {
    const borderClass = !border ? 'jv-mTable-rowNoborder' : '';
    const headRowClass = headRow ? 'jv-mTable-rowHeader' : '';
    return (
        <MuiTableRow
            ref={ref}
            className={`jv-mTable-row ${borderClass} ${headRowClass} ${className} mui`}
            {...rest}
        />
    )
})
