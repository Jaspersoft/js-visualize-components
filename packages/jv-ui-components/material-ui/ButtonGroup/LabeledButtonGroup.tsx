/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import {
  ButtonGroupProps as MuiButtonGroupProps,
  InputLabel,
  InputLabelProps as MuiInputLabelProps,
} from "@mui/material";
import { ButtonGroup } from "./ButtonGroup";
import { SizeToClass } from "../types/InputTypes";

export type ButtonGroupProps = MuiButtonGroupProps & {
  label: string;
  buttonGroupClassName?: string;
  InputLabelProps?: MuiInputLabelProps;
};

export const LabeledButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      id,
      label,
      className = "",
      buttonGroupClassName = "",
      size,
      InputLabelProps = {},
      children,
      ...rest
    },
    ref,
  ) => {
    const inputLabelId = id ? `${id}-label` : undefined;
    const buttonGroupId = id ? `${id}-buttonGroup` : undefined;
    const ariaLabeledBy = inputLabelId || undefined;

    const { className: inputLabelClassName = "", ...restInputLabelProps } =
      InputLabelProps;

    return (
      <div
        id={id}
        ref={ref}
        className={`jv-mInput jv-mInputInline jv-mInputButtons mui ${SizeToClass[size ?? "medium"]} ${className}`}
      >
        <InputLabel
          id={inputLabelId}
          className={`jv-mInput-label mui ${inputLabelClassName}`}
          {...restInputLabelProps}
        >
          {label}
        </InputLabel>
        <ButtonGroup
          id={buttonGroupId}
          className={buttonGroupClassName}
          size={size}
          aria-labelledby={ariaLabeledBy}
          {...rest}
        >
          {children}
        </ButtonGroup>
      </div>
    );
  },
);
