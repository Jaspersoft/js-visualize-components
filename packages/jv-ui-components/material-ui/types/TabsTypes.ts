/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

export enum SizeToTabs {
  small = "jv-mTabsSmall",
  medium = "jv-mTabsMedium",
  large = "jv-mTabsLarge",
}

export type TabSize = keyof typeof SizeToTabs;
