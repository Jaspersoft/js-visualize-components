/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";

import { TextField, TextFieldProps } from "../TextField/TextField";
import { ColorPickerSample } from "./ColorPickerSample";

export type ColorPickerProps = Omit<TextFieldProps, "value"> & {
  value?: string;
  allowTransparent?: boolean;
  onColorChange?: (color: string) => void;
};

export const ColorPicker = forwardRef<HTMLDivElement, ColorPickerProps>(
  (
    {
      InputProps = {},
      value,
      allowTransparent,
      onColorChange = () => {},
      className = "",
      ...rest
    },
    ref,
  ) => {
    const isColorPickerDisabled = rest.disabled ?? InputProps?.readOnly;

    return (
      <TextField
        ref={ref}
        className={`jv-mControl jv-mControlColor mui ${className}`}
        value={value}
        type="string"
        InputProps={{
          startAdornment: (
            <ColorPickerSample
              color={value}
              onChange={onColorChange}
              allowTransparent={allowTransparent}
              disabled={isColorPickerDisabled}
            />
          ),
          ...InputProps,
        }}
        {...rest}
      />
    );
  },
);
