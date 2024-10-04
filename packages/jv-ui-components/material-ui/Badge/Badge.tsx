/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import { Badge as MuiBadge, BadgeProps } from "@mui/material";

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, ...rest }, ref) => {
    return <MuiBadge ref={ref} className={`${className}`} {...rest} />;
  },
);
