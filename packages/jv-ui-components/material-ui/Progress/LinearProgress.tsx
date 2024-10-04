/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import {
  LinearProgress as MuiLinearProgress,
  LinearProgressProps,
} from "@mui/material";

export const LinearProgress = forwardRef<HTMLElement, LinearProgressProps>(
  ({ variant = "determinate", className = "", classes = {}, ...rest }, ref) => {
    const { bar: barClasses = "", ...restClasses } = classes;
    return (
      <MuiLinearProgress
        ref={ref}
        variant={variant}
        className={`jv-mProgressbar jv-mProgressbarStatic mui ${className}`}
        classes={{
          bar: `jv-mProgressbar-fill mui ${barClasses} `,
          ...restClasses,
        }}
        {...rest}
      />
    );
  },
);
