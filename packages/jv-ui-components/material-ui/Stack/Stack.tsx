/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import { Stack as MuiStack } from "@mui/material";
import { StackProps } from "@mui/material/Stack/Stack";

export const Stack = forwardRef((props: StackProps, ref) => {
  const { children, ...remaining } = props;
  if (children) {
    return <MuiStack {...remaining}>{children}</MuiStack>;
  }
  return <MuiStack {...props} />;
});
