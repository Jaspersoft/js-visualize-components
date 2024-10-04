/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import {
  ButtonGroup as MuiButtonGroup,
  ButtonGroupProps as MuiButtonGroupProps,
} from "@mui/material";

export const ButtonGroup = forwardRef<HTMLDivElement, MuiButtonGroupProps>(
  ({ className = "", ...rest }, ref) => {
    return (
      <MuiButtonGroup
        ref={ref}
        className={`jv-mButtongroup mui ${className}`}
        variant="contained"
        color="secondary"
        disableElevation
        {...rest}
      />
    );
  },
);
