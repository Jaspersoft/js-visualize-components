import React from 'react';
import { Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps } from '@mui/material';

export const Tooltip = React.forwardRef<HTMLDivElement, MuiTooltipProps>(({
    ...rest
}, ref) => {
    return (
        <MuiTooltip
            ref={ref}
            {...rest}
        />
    )
})
