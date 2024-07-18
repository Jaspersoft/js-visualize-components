import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import {
  DialogContent as MuiDialogContent,
  DialogContentProps as MuiDialogContentProps,
} from "@mui/material";

export type DialogContentProps = {
  DialogContentProps?: MuiDialogContentProps;
  DialogSubTitleProps?: ComponentPropsWithoutRef<"div">;
  DialogSubTitleComponent?: React.ReactNode;
  DialogContentComponent: React.ReactNode;
};

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  (
    {
      DialogSubTitleComponent,
      DialogContentProps = {},
      DialogContentComponent,
      DialogSubTitleProps = {},
    },
    ref,
  ) => {
    const {
      dividers = true,
      className: dialogContentClassName = "",
      ...restDialogContentProps
    } = DialogContentProps;
    const { className: dialogSubTitleClassName, ...restDialogSubTitleProps } =
      DialogSubTitleProps;

    return (
      <MuiDialogContent
        ref={ref}
        className={`jv-mDialog-body jv-mDialog-bodyPadded ${dialogContentClassName} mui`}
        dividers={dividers}
        {...restDialogContentProps}
      >
        {DialogSubTitleComponent && (
          <div
            className={`jv-mDialog-subtitle ${dialogSubTitleClassName} mui`}
            {...restDialogSubTitleProps}
          >
            {DialogSubTitleComponent}
          </div>
        )}
        {DialogContentComponent}
      </MuiDialogContent>
    );
  },
);
