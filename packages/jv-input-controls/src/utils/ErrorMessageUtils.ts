/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */

import { ICValidationRule } from "../controls/BaseInputControl";

export const getMandatoryErrorMessage = (
  validationRules: ICValidationRule[],
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

export const getValidationRuleByKey = ({
  validationRules,
  key,
}: {
  validationRules: ICValidationRule[];
  key:
    | "dateTimeFormatValidationRule"
    | "mandatoryValidationRule"
    | "regexpValidationRule"
    | "rangeValidationRule";
}): null | ICValidationRule => {
  if (!validationRules) {
    return null;
  }
  const rule = validationRules.find((rule) => rule[key] !== undefined);
  return rule || null;
};
