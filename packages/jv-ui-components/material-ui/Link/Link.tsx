/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";
import { ColorToClass, LinkColor } from "../types/LinkTypes";

export type LinkProps = Omit<MuiLinkProps, "color"> & {
  color?: LinkColor;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className = "", color = "default", ...rest }, ref) => {
    const colorClassName = ColorToClass[color];

    return (
      <MuiLink
        ref={ref}
        className={`jv-mLink mui ${colorClassName} ${className}`}
        {...rest}
      />
    );
  },
);
