import React, { forwardRef } from 'react';
import { LinearProgress as MuiLinearProgress, LinearProgressProps } from '@mui/material';

export const LinearProgress = forwardRef<HTMLElement, LinearProgressProps>(({
    variant = 'determinate', className = '', classes = {}, ...rest
}, ref) => {

    const { bar: barClasses = '', ...restClasses } = classes;
    return (
        <MuiLinearProgress
            ref={ref}
            variant={variant}
            className={`jr-mProgressbar jr-mProgressbarStatic mui ${className}`}
            classes={{ bar: `jr-mProgressbar-fill mui ${barClasses} `, ...restClasses }}
            {...rest}
        />
    )
});
