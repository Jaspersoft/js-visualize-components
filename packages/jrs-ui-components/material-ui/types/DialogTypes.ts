export enum DialogSizeToClass {
    general = 'jv-mDialogConfirm',
    warning = 'jv-mDialogWarning',
    delete = 'jv-mDialogDelete',
    error = 'jv-mDialogError',
    default = ''
}

export type DialogSize = keyof typeof DialogSizeToClass;
