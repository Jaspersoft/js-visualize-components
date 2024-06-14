import * as React from 'react';
import { ListItemButton as MuiListItemButton, ListItemButtonProps as MuiListItemButtonProps } from '@mui/material';

export const ListItemButton = React.forwardRef<HTMLDivElement, MuiListItemButtonProps>(({ className, ...rest }, ref) => {
    return (
        <>
            <MuiListItemButton ref={ref} className={`${className}  mui`} {...rest} />
        </>
    )
})
