/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import MuiPaper, { PaperProps as MuiPaperProps } from "@mui/material/Paper";

export type PaperProps = MuiPaperProps;

export const Paper = forwardRef<HTMLDivElement, PaperProps>(
  ({ ...rest }, ref) => {
    return <MuiPaper ref={ref} {...rest} />;
  },
);
