import React, { forwardRef } from 'react';
import { ListItem as MuiListItem, ListItemProps as MuiListItemProps } from '@mui/material';

export const ListItem = forwardRef<HTMLLIElement, MuiListItemProps>(({ className, ...rest }, ref) => {
    return (
        <>
            <MuiListItem ref={ref} className={`${className}  mui`} {...rest} />
        </>
    )
})
