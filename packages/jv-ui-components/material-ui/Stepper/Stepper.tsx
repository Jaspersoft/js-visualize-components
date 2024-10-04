/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef, PropsWithChildren } from "react";
import {
  Stepper as MuiStepper,
  StepperProps as MuiStepperProps,
} from "@mui/material";

export const Stepper = forwardRef<
  HTMLDivElement,
  PropsWithChildren<MuiStepperProps>
>(({ className, children, ...rest }, ref) => {
  return (
    <MuiStepper ref={ref} className={`jv-mStepper ${className} mui`} {...rest}>
      {children}
    </MuiStepper>
  );
});
