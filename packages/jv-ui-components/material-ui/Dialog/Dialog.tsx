import React, { forwardRef } from "react";
import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
} from "@mui/material";
import { DialogSize, DialogSizeToClass } from "../types/DialogTypes";

type PaperPropsWithOptionalDataName = MuiDialogProps["PaperProps"] & {
  "data-name"?: string;
};

export type DialogProps = Omit<MuiDialogProps, "PaperProps"> & {
  type?: DialogSize;
  PaperProps?: PaperPropsWithOptionalDataName;
};

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      classes = {},
      type = "general",
      open,
      className = "",
      disableEscapeKeyDown = true,
      PaperProps = {},
      ...restDialogProps
    },
    ref,
  ) => {
    const { paper = "", ...restClasses } = classes;
    const { elevation = 4, ...restPaperProps } = PaperProps;

    return (
      <MuiDialog
        ref={ref}
        classes={{ paper: `jv-mDialog-wrapper ${paper} mui`, ...restClasses }}
        className={`jv-mDialog ${DialogSizeToClass[type]} ${className} mui`}
        disableEscapeKeyDown={disableEscapeKeyDown}
        PaperProps={{
          elevation,
          ...restPaperProps,
        }}
        open={open}
        {...restDialogProps}
      />
    );
  },
);
