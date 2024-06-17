import * as React from 'react';
import { LinearProgress as MuiLinearProgress, LinearProgressProps } from '@mui/material';

export const LinearProgress = React.forwardRef<HTMLElement, LinearProgressProps>(({
    variant = 'determinate', className = '', classes = {}, ...rest
}, ref) => {

    const { bar: barClasses = '', ...restClasses } = classes;
    return (
        <MuiLinearProgress
            ref={ref}
            variant={variant}
            className={`jv-mProgressbar jv-mProgressbarStatic mui ${className}`}
            classes={{ bar: `jv-mProgressbar-fill mui ${barClasses} `, ...restClasses }}
            {...rest}
        />
    )
});
