/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import FormHelperText, {
  FormHelperTextProps as MuiFormHelperTextProps,
} from "@mui/material/FormHelperText";

export type FormHelperTextProps = Partial<MuiFormHelperTextProps> & {
  text?: string;
};

export const FormHelper = forwardRef<HTMLDivElement, FormHelperTextProps>(
  (props, ref) => {
    const { className = "", text, ...rest } = props || {};
    return (
      <>
        {text && (
          <FormHelperText
            ref={ref}
            className={`jv-mInput-helper mui ${className}`}
            {...rest}
          >
            {text}
          </FormHelperText>
        )}
      </>
    );
  },
);
