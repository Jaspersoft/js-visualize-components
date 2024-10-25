/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef, PropsWithChildren } from "react";
import {
  Step as MuiStep,
  StepLabel as MuiStepLabel,
  StepProps as MuiStepProps,
  StepLabelProps as MuiStepLabelProps,
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";

export interface StepComponentProps extends MuiStepProps {
  StepLabelProps?: MuiStepLabelProps;
  TypographyProps: MuiTypographyProps & {
    title: string;
    dataName?: string;
  };
}

export const Step = forwardRef<
  HTMLDivElement,
  PropsWithChildren<StepComponentProps>
>(({ StepLabelProps = {}, TypographyProps = {}, children, ...rest }, ref) => {
  const {
    className: typographyClassName,
    title,
    dataName,
    ...restTypographyProps
  } = TypographyProps;
  const { className: stepClassName = "", ...restStepProps } = rest;

  return (
    <MuiStep
      ref={ref}
      className={`jv-mStepper-step ${stepClassName} mui`}
      {...restStepProps}
    >
      <MuiStepLabel {...StepLabelProps}>
        <MuiTypography
          data-name={dataName}
          className={`jv-mText jv-mTextTitle jv-mTextSmall ${typographyClassName} mui`}
          {...restTypographyProps}
        >
          {title}
        </MuiTypography>
        {children}
      </MuiStepLabel>
    </MuiStep>
  );
});
