/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

export enum ColorToClass {
  theme = "jv-mLinkTheme",
  default = "",
}

export type LinkColor = keyof typeof ColorToClass;
