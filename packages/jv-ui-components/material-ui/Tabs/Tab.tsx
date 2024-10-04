/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import { Tab as MuiTab, TabProps as MuiTabProps } from "@mui/material";

export const Tab = forwardRef<HTMLDivElement, MuiTabProps>(
  ({ className = "", ...rest }, ref) => {
    return (
      <MuiTab ref={ref} className={`jv-mTab ${className} mui`} {...rest} />
    );
  },
);
