/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import {
  Popper as MuiPopper,
  PopperProps as MuiPopperProps,
} from "@mui/material";

export type PopperProps = MuiPopperProps;

export const Popper = forwardRef<HTMLDivElement, PopperProps>(
  ({ ...rest }, ref) => {
    return <MuiPopper ref={ref} {...rest} />;
  },
);
