import { forwardRef } from 'react';
import MuiPaper, { PaperProps as MuiPaperProps } from '@mui/material/Paper';

export type PaperProps = MuiPaperProps;

export const Paper = forwardRef<HTMLDivElement, PaperProps>(({
    ...rest
}, ref) => {
    return (
        <MuiPaper
            ref={ref}
            {...rest}
        />
    )
})
