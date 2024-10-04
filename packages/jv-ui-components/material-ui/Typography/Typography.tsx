/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";

export type TypographyProps = Omit<MuiTypographyProps, "variant"> & {
  variant?: MuiTypographyProps["variant"] | "body3" | "body4";
};

const getVariantAndClassName = (
  variant: TypographyProps["variant"],
): [MuiTypographyProps["variant"], string] => {
  switch (variant) {
    case "body1":
      return ["body1", "jv-mText mui"];
    case "body2":
      return ["body2", "jv-mText jv-mTextSmall mui"];
    case "body3":
      return [undefined, "jv-mText jv-mTextLarge mui"];
    case "body4":
      return [undefined, "jv-mText jv-mTextXLarge mui"];
    default:
      return [variant, "mui"];
  }
};

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ variant, className = "", ...rest }, ref) => {
    const [effectiveVariant, variantClassName] =
      getVariantAndClassName(variant);

    return (
      <MuiTypography
        ref={ref}
        className={`${variantClassName} ${className}`}
        variant={effectiveVariant}
        {...rest}
      />
    );
  },
);
