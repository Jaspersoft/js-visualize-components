import React, { forwardRef } from 'react';
import { Badge as MuiBadge, BadgeProps } from '@mui/material';

export const JVBadge = forwardRef<HTMLDivElement, BadgeProps>(({ className, ...rest }, ref) => {
    return (
        <MuiBadge
            ref={ref}
            className={`${className}`}
            {...rest}
        />
    )
})
