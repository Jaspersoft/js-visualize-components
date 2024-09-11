import { forwardRef } from "react";
import {
  DialogTitle as MuiDialogTitle,
  DialogTitleProps as MuiDialogTitleProps,
  Typography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";

export type DialogTitleProps = {
  DialogTitleProps?: MuiDialogTitleProps;
  DialogTitleTypographyProps?: MuiTypographyProps;
  dialogTitle?: string;
};

export const DialogTitle = forwardRef<HTMLDivElement, DialogTitleProps>(
  (
    { DialogTitleProps = {}, dialogTitle, DialogTitleTypographyProps = {} },
    ref,
  ) => {
    const { className: dialogTitleClassname = "", ...restDialogTitleProps } =
      DialogTitleProps;
    const {
      className: dialogTitleTypographyClassname = "",
      ...restDialogTitleTypographyProps
    } = DialogTitleTypographyProps;

    return (
      <MuiDialogTitle
        ref={ref}
        className={`jv-mDialog-header ${dialogTitleClassname} mui`}
        {...restDialogTitleProps}
      >
        <Typography
          className={`jv-mDialog-header-title ${dialogTitleTypographyClassname} mui`}
          {...restDialogTitleTypographyProps}
        >
          {dialogTitle}
        </Typography>
      </MuiDialogTitle>
    );
  },
);
