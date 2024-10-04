/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import {
  Popover as MuiPopover,
  PopoverProps as MuiPopoverProps,
} from "@mui/material";

export type PopoverProps = MuiPopoverProps;
export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ ...rest }, ref) => {
    return <MuiPopover ref={ref} {...rest} />;
  },
);
