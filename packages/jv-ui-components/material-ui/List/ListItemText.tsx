/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import {
  ListItemText as MuiListItemText,
  ListItemTextProps as MuiListItemTextProps,
} from "@mui/material";

export const ListItemText = forwardRef<HTMLDivElement, MuiListItemTextProps>(
  ({ className, ...rest }, ref) => {
    return (
      <MuiListItemText ref={ref} className={`${className}  mui`} {...rest} />
    );
  },
);
