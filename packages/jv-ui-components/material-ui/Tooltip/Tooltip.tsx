/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from "@mui/material";

export const Tooltip = forwardRef<HTMLDivElement, MuiTooltipProps>(
  ({ ...rest }, ref) => {
    return <MuiTooltip ref={ref} {...rest} />;
  },
);
