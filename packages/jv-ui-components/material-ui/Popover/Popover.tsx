import * as React from 'react';
import { Popover as MuiPopover, PopoverProps as MuiPopoverProps } from '@mui/material';

export type PopoverProps = MuiPopoverProps;
export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(({ ...rest }, ref) => {
    return (
        <MuiPopover
            ref={ref}
            {...rest}
        />
    )
})
