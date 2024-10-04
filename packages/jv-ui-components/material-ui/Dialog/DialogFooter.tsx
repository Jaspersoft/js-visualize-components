/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import {
  DialogActions as MuiDialogActions,
  DialogActionsProps as MuiDialogActionsProps,
} from "@mui/material";

export type DialogFooterProps = MuiDialogActionsProps;
export const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className, ...rest }, ref) => {
    return (
      <MuiDialogActions
        ref={ref}
        className={`jv-mDialog-footer ${className} mui`}
        {...rest}
      />
    );
  },
);
