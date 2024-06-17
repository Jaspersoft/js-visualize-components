import * as React from 'react';
import { MenuItem } from '@mui/material';

export type SelectItemProps = Parameters<typeof MenuItem>[0];

export const SelectItem = React.forwardRef<HTMLLIElement, SelectItemProps>(({
    className = '', children, ...rest
}, ref) => {
    return (
        <MenuItem ref={ref} className={`jv-mInput-select-item mui ${className}`} {...rest}>{children}</MenuItem>
    )
})