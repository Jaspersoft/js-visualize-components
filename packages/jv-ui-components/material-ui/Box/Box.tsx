/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import { Box as MuiBox } from "@mui/material";

export const Box = forwardRef<HTMLElement, any>(
  ({ className = "", ...rest }, ref) => {
    return <MuiBox ref={ref} className={`${className}  mui`} {...rest} />;
  },
);
