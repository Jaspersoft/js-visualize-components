/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { ElementType, forwardRef, PropsWithChildren } from "react";
import {
  FormGroup,
  FormGroupProps as MuiFormGroupProps,
  FormControl as MuiFormControl,
  FormLabel as MuiFormLabel,
  FormControlProps as MuiFormControlProps,
  FormLabelProps as MuiFormLabelProps,
} from "@mui/material";
import { InputSize, SizeToClass } from "../types/InputTypes";
import {
  FormHelper,
  FormHelperTextProps as JRSFormHelperTextProps,
} from "../FormHelperTextGroup/FormHelperText";
import { FormError } from "../FormHelperTextGroup/FormErrorText";

export type CheckboxGroupProps = {
  size?: InputSize;
  title?: string;
  helperText?: string;
  errorMessage?: string;
  FormGroupProps?: MuiFormGroupProps;
  FormHelperTextProps?: JRSFormHelperTextProps;
  FormLabelProps?: Omit<MuiFormLabelProps, "component"> & {
    component?: ElementType<any>;
  };
  FormControlProps?: Omit<MuiFormControlProps, "component"> & {
    component?: ElementType<any>;
    "data-name"?: string;
  };
};

export const CheckboxGroup = forwardRef<
  HTMLDivElement,
  PropsWithChildren<CheckboxGroupProps>
>(
  (
    {
      helperText,
      errorMessage,
      children,
      size = "medium",
      title = "",
      FormLabelProps = {},
      FormGroupProps = {},
      FormControlProps = {},
    },
    ref,
  ) => {
    const {
      component: formControlComponent = "fieldset",
      className: formControlClassName = "",
      ...restFormControlProps
    } = FormControlProps;
    const {
      className: formLabelPropsClassName = "",
      component: formLabelComponent = "legend",
      ...restFormLabelProps
    } = FormLabelProps;

    return (
      <MuiFormControl
        ref={ref}
        component={formControlComponent}
        className={`jv-mInput ${SizeToClass[size]} ${formControlClassName} jv-mInputCheckbox mui`}
        {...restFormControlProps}
      >
        {title && (
          <MuiFormLabel
            component={formLabelComponent}
            className={`jv-mInput-label ${formLabelPropsClassName} mui`}
            {...restFormLabelProps}
          >
            {title}
          </MuiFormLabel>
        )}
        <FormGroup {...FormGroupProps}>{children}</FormGroup>
        <FormHelper text={helperText} />
        <FormError text={errorMessage} />
      </MuiFormControl>
    );
  },
);
