/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */

import { ICDateValidationRule } from "../controls/BaseInputControl";

export const getMandatoryErrorMessage = (
  validationRules: ICDateValidationRule[],
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