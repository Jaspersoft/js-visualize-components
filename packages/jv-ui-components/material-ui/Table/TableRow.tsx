/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import MuiTableRow, {
  TableRowProps as MuiTableRowProps,
} from "@mui/material/TableRow";

export type TableRowProps = MuiTableRowProps & {
  border?: boolean;
  headRow?: boolean;
};
export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className = "", border = true, headRow = false, ...rest }, ref) => {
    const borderClass = !border ? "jv-mTable-rowNoborder" : "";
    const headRowClass = headRow ? "jv-mTable-rowHeader" : "";
    return (
      <MuiTableRow
        ref={ref}
        className={`jv-mTable-row ${borderClass} ${headRowClass} ${className} mui`}
        {...rest}
      />
    );
  },
);
