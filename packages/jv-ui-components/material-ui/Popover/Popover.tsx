import { forwardRef } from 'react';
import { Popover as MuiPopover, PopoverProps as MuiPopoverProps } from '@mui/material';

export type PopoverProps = MuiPopoverProps;
export const Popover = forwardRef<HTMLDivElement, PopoverProps>(({ ...rest }, ref) => {
    return (
        <MuiPopover
            ref={ref}
            {...rest}
        />
    )
})
