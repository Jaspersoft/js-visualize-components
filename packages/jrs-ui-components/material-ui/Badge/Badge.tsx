import * as React from 'react';
import { Badge as MuiBadge, BadgeProps } from '@mui/material';

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({ className, ...rest }, ref) => {
    return (
        <MuiBadge
            ref={ref}
            className={`${className}`}
            {...rest}
        />
    )
})
