import { forwardRef } from 'react';
import {
    Tab as MuiTab, TabProps as MuiTabProps
} from '@mui/material';

export const Tab = forwardRef<HTMLDivElement, MuiTabProps>(({
    className = '', ...rest
}, ref) => {
    return (
        <MuiTab
            ref={ref}
            className={`jv-mTab ${className} mui`}
            {...rest}
        />
    )
})
