import React, { forwardRef, PropsWithChildren } from 'react';
import {
    Step as MuiStep,
    StepLabel as MuiStepLabel,
    StepProps as MuiStepProps,
    StepLabelProps as MuiStepLabelProps,
    Typography as MuiTypography,
    TypographyProps as MuiTypographyProps
} from '@mui/material';

export interface StepComponentProps extends MuiStepProps {
    StepLabelProps?: MuiStepLabelProps;
    TypographyProps: MuiTypographyProps & {
        title: string,
        dataName?: string
    }
}

export const Step = forwardRef<HTMLDivElement, PropsWithChildren<StepComponentProps>>(({
    StepLabelProps = {}, TypographyProps = {}, children, ...rest
}, ref) => {

    const {
        className: typographyClassName, title, dataName, ...restTypographyProps
    } = TypographyProps;
    const { className: stepClassName = '', ...restStepProps } = rest;

    return (
        <MuiStep ref={ref} className={`jr-mStepper-step ${stepClassName} mui`} {...restStepProps}>
            <MuiStepLabel {...StepLabelProps}>
                <MuiTypography data-name={dataName} className={`jr-mText jr-mTextTitle jr-mTextSmall ${typographyClassName} mui`} {...restTypographyProps}>{title}</MuiTypography>
                {children}
            </MuiStepLabel>
        </MuiStep>
    )

})
