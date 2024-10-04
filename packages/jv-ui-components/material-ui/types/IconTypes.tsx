/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

export type IconSize = "small" | "medium" | "large";

export const SizeToClass: { [key in IconSize]: string } = {
  small: "jv-mIconSmall",
  medium: "",
  large: "jv-mIconLarge",
};
