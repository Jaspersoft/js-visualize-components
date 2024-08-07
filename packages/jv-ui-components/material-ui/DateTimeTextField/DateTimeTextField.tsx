/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */

import { forwardRef } from "react";
import {
  TextField as JVTextField,
  TextFieldProps,
} from "../TextField/TextField";

export const DateTimeTextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref) => {
    const mergedInputLabelProps = {
      ...props.InputLabelProps,
      classes: { root: "jv-mInput-label mui" },
      disableAnimation: true,
    };
    const mergeInputProps = {
      ...props.InputProps,
      classes: { input: "jv-mInput-text mui" },
    };

    return (
      <JVTextField
        {...props}
        className={`${props.className || ""}`}
        variant="outlined"
        InputLabelProps={{ ...mergedInputLabelProps }}
        InputProps={{ ...mergeInputProps }}
      ></JVTextField>
    );
  },
);
