/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import { Card as MuiCard, CardProps as MuiCardProps } from "@mui/material";

type CardProps = MuiCardProps;

export const Cards = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "elevation",
      className: cardClassname = "",
      elevation = 2,
      ...rest
    },
    ref,
  ) => {
    return (
      <MuiCard
        ref={ref}
        className={`jv-mCard  ${cardClassname} mui`}
        variant={variant}
        elevation={elevation}
        {...rest}
      />
    );
  },
);
