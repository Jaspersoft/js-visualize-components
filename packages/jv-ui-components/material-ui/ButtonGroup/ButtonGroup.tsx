import * as React from 'react';
import {
    ButtonGroup as MuiButtonGroup, ButtonGroupProps as MuiButtonGroupProps
} from '@mui/material';

export const ButtonGroup = React.forwardRef<HTMLDivElement, MuiButtonGroupProps>(({
    className = '', ...rest
}, ref) => {
    return (
        <MuiButtonGroup
            ref={ref}
            className={`jv-mButtongroup mui ${className}`}
            variant="contained"
            color="secondary"
            disableElevation
            {...rest}
        />
    )
})