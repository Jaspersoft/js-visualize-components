/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

export enum DialogSizeToClass {
  general = "jv-mDialogConfirm",
  warning = "jv-mDialogWarning",
  delete = "jv-mDialogDelete",
  error = "jv-mDialogError",
  default = "",
}

export type DialogSize = keyof typeof DialogSizeToClass;
