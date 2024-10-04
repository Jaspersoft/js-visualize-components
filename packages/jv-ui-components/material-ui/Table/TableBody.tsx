/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import MuiTableBody, {
  TableBodyProps as MuiTableBodyProps,
} from "@mui/material/TableBody";

export const TableBody = forwardRef<HTMLTableSectionElement, MuiTableBodyProps>(
  ({ ...rest }, ref) => {
    return <MuiTableBody ref={ref} {...rest} />;
  },
);
