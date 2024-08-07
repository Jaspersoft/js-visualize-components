/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */

import { getBaseInputControlProps } from "../controls/BaseInputControl";

export const triggerCallbackIfNeeded = (
  props: any,
  value: string | boolean,
) => {
  if (props && props.callbackChange) {
    props.callbackChange(getBaseInputControlProps(props, value));
  }
};
