/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import {
  InputAdornment as MuiInputAdornment,
  InputAdornmentProps as MuiInputAdornmentProps,
} from "@mui/material";

export const InputAdornment = forwardRef<
  HTMLDivElement,
  MuiInputAdornmentProps
>(({ className = "", ...rest }, ref) => {
  return (
    <MuiInputAdornment ref={ref} className={`${className} mui`} {...rest} />
  );
});
