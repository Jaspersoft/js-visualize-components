/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import { Divider as MuiDivider, DividerProps } from "@mui/material";

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className = "", ...rest }, ref) => {
    return (
      <MuiDivider
        ref={ref}
        component="div"
        classes={{ root: `jv-mInputs-divider mui ${className}` }}
        {...rest}
      />
    );
  },
);
