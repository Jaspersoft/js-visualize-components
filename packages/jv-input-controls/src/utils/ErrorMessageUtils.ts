import { ICValidationRule } from "../controls/BaseInputControl";

export const getMandatoryErrorMessage = (
  validationRules: ICValidationRule[] | undefined,
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
