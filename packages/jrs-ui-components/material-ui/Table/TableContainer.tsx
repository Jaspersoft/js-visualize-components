import React from 'react';
import MuiTableContainer, { TableContainerProps as MuiTableContainerProps } from '@mui/material/TableContainer';

export const TableContainer = React.forwardRef<HTMLTableElement, MuiTableContainerProps>(({
    ...rest
}, ref) => {
    return (
        <MuiTableContainer
            ref={ref}
            {...rest}
        />
    )
})
