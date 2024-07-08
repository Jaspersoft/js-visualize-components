import { forwardRef } from 'react';
import MuiTableBody, { TableBodyProps as MuiTableBodyProps } from '@mui/material/TableBody';

export const TableBody = forwardRef<HTMLTableSectionElement, MuiTableBodyProps>(({
    ...rest
}, ref) => {
    return (
        <MuiTableBody
            ref={ref}
            {...rest}
        />
    )
})
