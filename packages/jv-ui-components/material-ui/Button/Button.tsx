/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { ColorToClass, SizeToClass } from "../types/ButtonTypes";

export type JVButtonProps = MuiButtonProps & {
  labelProps?: {
    labelClasses?: string;
  };
};
export const Button = forwardRef<HTMLButtonElement, JVButtonProps>(
  (
    {
      labelProps = {},
      className = "",
      size = "medium",
      color = "secondary",
      children,
      ...rest
    },
    ref,
  ) => {
    const { labelClasses = "" } = labelProps;
    return (
      <MuiButton
        ref={ref}
        className={`jv-mButton ${SizeToClass[size]} ${ColorToClass[color]} mui ${className}`}
        disableElevation
        size={size}
        {...rest}
      >
        <span
          className={`jv-MuiButton-label jv-mButton-label mui ${labelClasses}`}
        >
          {children}
        </span>
      </MuiButton>
    );
  },
);
