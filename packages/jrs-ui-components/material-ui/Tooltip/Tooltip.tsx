import React, { forwardRef } from 'react';
import { Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps } from '@mui/material';

export const Tooltip = forwardRef<HTMLDivElement, MuiTooltipProps>(({
    ...rest
}, ref) => {
    return (
        <MuiTooltip
            ref={ref}
            {...rest}
        />
    )
})
