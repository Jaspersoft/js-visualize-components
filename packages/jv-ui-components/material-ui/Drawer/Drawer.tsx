/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import {
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
} from "@mui/material";

export const Drawer = forwardRef<HTMLDivElement, MuiDrawerProps>(
  (
    { classes = {}, elevation = 6, open = false, className = "", ...rest },
    ref,
  ) => {
    const { paper: paperClasses = "", ...restClasses } = classes;
    return (
      <MuiDrawer
        ref={ref}
        className={`jv-mDrawer ${className} mui`}
        open={open}
        elevation={elevation}
        classes={{ paper: `${paperClasses}`, ...restClasses }}
        {...rest}
      />
    );
  },
);
