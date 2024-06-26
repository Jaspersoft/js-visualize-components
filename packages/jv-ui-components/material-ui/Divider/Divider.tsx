import { forwardRef } from 'react';
import { Divider as MuiDivider, DividerProps } from '@mui/material';

export const Divider = forwardRef<HTMLHRElement, DividerProps>(({
    className = '', ...rest
}, ref) => {
    return (
        <MuiDivider ref={ref} component="div" classes={{ root: `jv-mInputs-divider mui ${className}` }} {...rest} />
    )
});
