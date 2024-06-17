import * as React from 'react'
import {
    Dialog as MuiDialog,
    DialogTitle as MuiDialogTitle,
    DialogContent as MuiDialogContent,
    DialogActions as MuiDialogActions,
    DialogProps as MuiDialogProps,
    DialogTitleProps as MuiDialogTitleProps,
    DialogContentProps as MuiDialogContentProps,
    DialogActionsProps as MuiDialogActionsProps,
    Typography,
    TypographyProps as MuiTypographyProps
} from '@mui/material';
import { DialogSize, DialogSizeToClass } from '../types/DialogTypes';

type PaperPropsWithOptionalDataName = MuiDialogProps['PaperProps'] & {
    'data-name'?: string
};

export type ConfirmationDialogProps = Omit<MuiDialogProps, 'PaperProps'> & {
    DialogTitleProps?: MuiDialogTitleProps,
    DialogContentProps?: MuiDialogContentProps,
    DialogActionsProps?: MuiDialogActionsProps,
    DialogTitleTypographyProps?: MuiTypographyProps,
    DialogSubTitleProps?: React.ComponentPropsWithoutRef<'div'>,
    DialogContentComponent: React.ReactNode,
    DialogActionsComponent: React.ReactNode,
    DialogSubTitleComponent?: React.ReactNode,
    type?: DialogSize,
    dialogTitle?: string,
    PaperProps?: PaperPropsWithOptionalDataName
}

export const ConfirmationDialog = React.forwardRef<HTMLDivElement, ConfirmationDialogProps>(({
    classes = {}, type = 'general', open, className = '', disableEscapeKeyDown = true, PaperProps = {}, DialogSubTitleComponent,
    DialogTitleProps = {}, dialogTitle, DialogContentProps = {}, DialogActionsProps = {}, DialogTitleTypographyProps = {}, DialogContentComponent, DialogActionsComponent, DialogSubTitleProps = {}, ...restDialogProps
}, ref) => {

    const { paper = '', ...restClasses } = classes
    const { elevation = 4, ...restPaperProps } = PaperProps
    const { className: dialogTitleClassname = '', ...restDialogTitleProps } = DialogTitleProps
    const { className: dialogTitleTypographyClassname = '', ...restDialogTitleTypographyProps } = DialogTitleTypographyProps
    const { dividers = true, className: dialogContentClassName = '', ...restDialogContentProps } = DialogContentProps
    const { className: dialogActionClassname = '', ...restDialogActionsProps } = DialogActionsProps
    const { className: dialogSubTitleClassName, ...restDialogSubTitleProps } = DialogSubTitleProps

    return (
        <MuiDialog
            ref={ref}
            classes={{ paper: `jv-mDialog-wrapper ${paper} mui`, ...restClasses }}
            className={`jv-mDialog ${DialogSizeToClass[type]} ${className} mui`}
            disableEscapeKeyDown={disableEscapeKeyDown}
            PaperProps={{
                elevation,
                ...restPaperProps
            }}
            open={open}
            {...restDialogProps}
        >
            {dialogTitle && (
                <MuiDialogTitle
                    className={`jv-mDialog-header ${dialogTitleClassname} mui`}
                    {...restDialogTitleProps}
                >
                    <Typography className={`jv-mDialog-header-title ${dialogTitleTypographyClassname} mui`} {...restDialogTitleTypographyProps}>
                        {dialogTitle}
                    </Typography>
                </MuiDialogTitle>
            )}
            <MuiDialogContent className={`jv-mDialog-body jv-mDialog-bodyPadded ${dialogContentClassName} mui`} dividers={dividers} {...restDialogContentProps}>
                {DialogSubTitleComponent && (
                    <div className={`jv-mDialog-subtitle ${dialogSubTitleClassName} mui`} {...restDialogSubTitleProps}>
                        {DialogSubTitleComponent}
                    </div>
                )}
                {DialogContentComponent}
            </MuiDialogContent>
            <MuiDialogActions className={`jv-mDialog-footer ${dialogActionClassname} mui`} {...restDialogActionsProps}>
                {DialogActionsComponent}
            </MuiDialogActions>
        </MuiDialog>
    )
})
