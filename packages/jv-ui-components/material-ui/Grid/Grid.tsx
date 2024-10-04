/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import { Grid as MuiGrid, GridProps as MuiGridProps } from "@mui/material";

export const Grid = forwardRef<HTMLDivElement, MuiGridProps>(
  ({ children, ...rest }, ref) => {
    return (
      <MuiGrid ref={ref} {...rest}>
        {children}
      </MuiGrid>
    );
  },
);
