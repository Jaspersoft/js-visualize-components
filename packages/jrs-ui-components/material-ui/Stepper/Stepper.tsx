import * as React from 'react';
import {
    Stepper as MuiStepper,
    StepperProps as MuiStepperProps
} from '@mui/material';

export const Stepper = React.forwardRef<HTMLDivElement, React.PropsWithChildren<MuiStepperProps>>(({
    className, children, ...rest
}, ref) => {

    return (
        <MuiStepper
            ref={ref}
            className={`jv-mStepper ${className} mui`}
            {...rest}
        >
            {children}
        </MuiStepper>
    )

})
