/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */

import {
  BaseInputControlProps,
  getBaseInputControlProps,
} from "../controls/BaseInputControl";

export const triggerCallbackIfNeeded = (
  props: BaseInputControlProps | undefined,
  value: string | boolean,
) => {
  props?.events?.change?.(getBaseInputControlProps(props, value));
};
