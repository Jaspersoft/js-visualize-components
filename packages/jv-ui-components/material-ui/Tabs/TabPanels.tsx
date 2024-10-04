/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import {
  TabPanel as MuiTabPanel,
  TabPanelProps as MuiTabPanelProps,
} from "@mui/lab";

export const TabPanels = forwardRef<HTMLDivElement, MuiTabPanelProps>(
  ({ className = "", children, ...rest }, ref) => {
    return (
      <MuiTabPanel
        ref={ref}
        className={`jv-mTabPanel ${className}  mui`}
        {...rest}
      >
        {children}
      </MuiTabPanel>
    );
  },
);
