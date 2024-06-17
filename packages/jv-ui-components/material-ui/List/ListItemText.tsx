import * as React from 'react';
import { ListItemText as MuiListItemText, ListItemTextProps as MuiListItemTextProps } from '@mui/material';

export const ListItemText = React.forwardRef<HTMLDivElement, MuiListItemTextProps>(({ className, ...rest }, ref) => {
    return (
        <MuiListItemText
            ref={ref}
            className={`${className}  mui`}
            {...rest}
        />
    )
})