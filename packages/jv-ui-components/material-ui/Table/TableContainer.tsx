/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import MuiTableContainer, {
  TableContainerProps as MuiTableContainerProps,
} from "@mui/material/TableContainer";

export const TableContainer = forwardRef<
  HTMLTableElement,
  MuiTableContainerProps
>(({ ...rest }, ref) => {
  return <MuiTableContainer ref={ref} {...rest} />;
});
