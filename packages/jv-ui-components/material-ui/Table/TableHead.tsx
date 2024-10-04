/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import MuiTableHead, {
  TableHeadProps as MuiTableHeadProps,
} from "@mui/material/TableHead";

export const TableHead = forwardRef<HTMLTableSectionElement, MuiTableHeadProps>(
  ({ ...rest }, ref) => {
    return <MuiTableHead ref={ref} {...rest} />;
  },
);
