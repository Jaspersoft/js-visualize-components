import * as React from 'react';
import MuiTableCell, { TableCellProps as MuiTableCellProps } from '@mui/material/TableCell';

export type TableCellProps = MuiTableCellProps & {
    isActionCell?: boolean,
    isCellAttribute?: boolean,
    isCellValue?: boolean
}
export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(({
    className = '', isActionCell = false, isCellAttribute = false, isCellValue = false, ...rest
}, ref) => {
    const actionClass = isActionCell ? 'jv-mTable-cellAction' : '';
    const attributeClass = isCellAttribute ? 'jv-mTable-cellAttribute' : '';
    const valueclass = isCellValue ? 'jv-mTable-cellValue' : '';

    return (
        <MuiTableCell
            ref={ref}
            className={`jv-mTable-cell ${actionClass} ${attributeClass} ${valueclass} ${className} mui`}
            {...rest}
        />
    )
})
