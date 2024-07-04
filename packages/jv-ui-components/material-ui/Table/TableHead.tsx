import { forwardRef } from 'react';
import MuiTableHead, { TableHeadProps as MuiTableHeadProps } from '@mui/material/TableHead';

export const TableHead = forwardRef<HTMLTableSectionElement, MuiTableHeadProps>(({
    ...rest
}, ref) => {
    return (
        <MuiTableHead
            ref={ref}
            {...rest}
        />
    )
})
