/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import {
  ListItemButton as MuiListItemButton,
  ListItemButtonProps as MuiListItemButtonProps,
} from "@mui/material";

export const ListItemButton = forwardRef<
  HTMLDivElement,
  MuiListItemButtonProps
>(({ className, ...rest }, ref) => {
  return (
    <>
      <MuiListItemButton ref={ref} className={`${className}  mui`} {...rest} />
    </>
  );
});
