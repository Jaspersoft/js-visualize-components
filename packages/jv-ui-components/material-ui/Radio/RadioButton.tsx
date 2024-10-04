/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef, ReactElement } from "react";
import {
  FormControlLabel,
  FormControlLabelProps,
  Radio as MuiRadio,
  RadioProps as MuiRadioProps,
} from "@mui/material";

export interface RadioProps extends Omit<FormControlLabelProps, "control"> {
  control?: ReactElement<any, any>;
  RadioProps?: MuiRadioProps;
}

export const RadioButton = forwardRef<HTMLDivElement, RadioProps>(
  (
    { className = "", classes = {}, control, RadioProps = {}, ...rest },
    ref,
  ) => {
    const { classes: radioClasses = {}, ...restRadioProps } = RadioProps;

    return (
      <FormControlLabel
        ref={ref}
        control={
          control ?? (
            <MuiRadio
              color="primary"
              classes={{
                root: `jv-mInput-radio-button mui ${radioClasses.root ?? ""}`,
              }}
              {...restRadioProps}
            />
          )
        }
        className={`jv-mInput-radio ${className} mui`}
        classes={{
          label: `jv-mInput-radio-label mui ${classes?.root ?? ""}`,
          ...classes,
        }}
        {...rest}
      />
    );
  },
);
