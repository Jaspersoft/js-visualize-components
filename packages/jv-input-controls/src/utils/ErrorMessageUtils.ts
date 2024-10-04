/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { InputControlValidationRule } from "@jaspersoft/jv-tools";

export const getMandatoryErrorMessage = (
  validationRules: InputControlValidationRule[] | undefined,
): string => {
  if (!validationRules) {
    return "";
  }
  const rule = validationRules.find((rule) => rule.mandatoryValidationRule);
  if (!rule) {
    return "";
  }
  return rule!.mandatoryValidationRule!.errorMessage || "";
};
