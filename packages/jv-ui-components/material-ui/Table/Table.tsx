/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import MuiTable, { TableProps as MuiTableProps } from "@mui/material/Table";

export const Table = forwardRef<HTMLTableElement, MuiTableProps>(
  ({ className = "", ...rest }, ref) => {
    return (
      <MuiTable ref={ref} className={`jv-mTable ${className} mui`} {...rest} />
    );
  },
);
