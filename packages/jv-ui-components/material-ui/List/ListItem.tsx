/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import {
  ListItem as MuiListItem,
  ListItemProps as MuiListItemProps,
} from "@mui/material";

export const ListItem = forwardRef<HTMLLIElement, MuiListItemProps>(
  ({ className, ...rest }, ref) => {
    return (
      <>
        <MuiListItem ref={ref} className={`${className}  mui`} {...rest} />
      </>
    );
  },
);
