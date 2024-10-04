/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import MuiCollapse, {
  CollapseProps as MuiCollapseProps,
} from "@mui/material/Collapse/Collapse";
import { forwardRef } from "react";

export const Collapse = forwardRef<HTMLElement, MuiCollapseProps>(
  ({ ...rest }, ref) => {
    return <MuiCollapse ref={ref} {...rest} />;
  },
);
