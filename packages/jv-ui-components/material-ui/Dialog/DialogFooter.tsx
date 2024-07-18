import React, { forwardRef } from "react";
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
