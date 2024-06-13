import * as React from 'react';
import { ListItem as MuiListItem, ListItemProps as MuiListItemProps } from '@mui/material';

export const ListItem = React.forwardRef<HTMLLIElement, MuiListItemProps>(({ className, ...rest }, ref) => {
    return (
        <>
            <MuiListItem ref={ref} className={`${className}  mui`} {...rest} />
        </>
    )
})
