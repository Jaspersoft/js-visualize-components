import React, { forwardRef } from 'react';
import { CircularProgress as MuiCircularProgress, CircularProgressProps } from '@mui/material';

export const CircularProgress = forwardRef<HTMLElement, CircularProgressProps>(({ variant = 'indeterminate', ...rest }, ref) => {
    return (
        <MuiCircularProgress
            ref={ref}
            variant={variant}
            {...rest}
        />
    )
})
