/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import { MenuItem } from "@mui/material";

export type SelectItemProps = Parameters<typeof MenuItem>[0];
export const SelectItem = forwardRef<HTMLLIElement, SelectItemProps>(
  ({ className = "", children, ...rest }, ref) => {
    return (
      <MenuItem
        ref={ref}
        className={`jv-mInput-select-item mui ${className}`}
        {...rest}
      >
        {children}
      </MenuItem>
    );
  },
);
