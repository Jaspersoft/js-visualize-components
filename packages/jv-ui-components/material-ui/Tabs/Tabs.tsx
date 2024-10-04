/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import { Tabs as MuiTabs, TabsProps as MuiTabsProps } from "@mui/material";
import { TabSize, SizeToTabs } from "../types/TabsTypes";

type TabsProps = MuiTabsProps & {
  size?: TabSize;
};

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      className = "",
      size = "medium",
      indicatorColor = "primary",
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <MuiTabs
        ref={ref}
        className={`jv-mTabs ${className} ${SizeToTabs[size]} mui`}
        indicatorColor={indicatorColor}
        {...rest}
      >
        {children}
      </MuiTabs>
    );
  },
);
