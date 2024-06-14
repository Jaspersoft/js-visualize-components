import * as React from 'react';
import MuiPaper, { PaperProps as MuiPaperProps } from '@mui/material/Paper';

export type PaperProps = MuiPaperProps;

export const Paper = React.forwardRef<HTMLDivElement, PaperProps>(({
    ...rest
}, ref) => {
    return (
        <MuiPaper
            ref={ref}
            {...rest}
        />
    )
})
