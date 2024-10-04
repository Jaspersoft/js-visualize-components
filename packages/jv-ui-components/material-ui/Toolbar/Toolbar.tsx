/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import {
  Toolbar as MuiToolbar,
  ToolbarProps as MuiToolbarProps,
} from "@mui/material";

export const Toolbar = forwardRef<HTMLDivElement, MuiToolbarProps>(
  ({ className = "", ...rest }, ref) => {
    return (
      <MuiToolbar
        className={`jv-mToolbar ${className} mui`}
        ref={ref}
        {...rest}
      />
    );
  },
);
