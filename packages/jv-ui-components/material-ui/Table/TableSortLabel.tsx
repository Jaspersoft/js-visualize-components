/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import MuiTableSortLabel, {
  TableSortLabelProps as MuiTableSortLabelProps,
} from "@mui/material/TableSortLabel";
import { forwardRef } from "react";

export const TableSortLabel = forwardRef<HTMLElement, MuiTableSortLabelProps>(
  ({ ...rest }, ref) => {
    return <MuiTableSortLabel ref={ref} {...rest} />;
  },
);
