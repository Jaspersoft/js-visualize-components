/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps,
} from "@mui/material";

export const CircularProgress = forwardRef<HTMLElement, CircularProgressProps>(
  ({ variant = "indeterminate", ...rest }, ref) => {
    return <MuiCircularProgress ref={ref} variant={variant} {...rest} />;
  },
);
