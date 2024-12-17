/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import {
  InputControlDataType,
  InputControlProperties,
  InputControlValidationRule,
} from "@jaspersoft/jv-tools";
import { verifyDateLimit } from "./DateInputControlUtils";

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

export const validateTextValue = ({
  textToValidate,
  validationRules = [],
  mandatory = false,
  defaultValue,
  minAndMaxDate,
  dataType = {},
}: {
  textToValidate: string;
  validationRules: InputControlValidationRule[];
  mandatory: boolean;
  defaultValue: string | string[];
  minAndMaxDate?: { [key: string]: string };
  dataType: InputControlDataType;
}): string => {
  // Determine the message based on:
  // 1. whether the field is mandatory and the text value is empty
  // 2. whether the field has a pattern that needs to be matched
  // 3. whether the field meets the max date value
  // 4. whether the field meets the min date value
  let theMsg: string =
    mandatory && !textToValidate.trim()
      ? getMandatoryErrorMessage(validationRules)
      : Array.isArray(defaultValue)
        ? defaultValue[0]
        : defaultValue;
  if (!theMsg.trim() && dataType?.pattern) {
    // we have to evaluate the dataType and check if there is no pattern defined that we need to verify.
    const regex = new RegExp(dataType.pattern);
    regex.lastIndex = 0;
    const isMatch = regex.test(textToValidate);
    // TODO: we will need to translate this message once we add the i18n support:
    theMsg = !isMatch ? "This field does not match the required pattern." : "";
  }
  let isError = false;
  if (!theMsg.trim() && minAndMaxDate) {
    const checkMax = verifyDateLimit({
      maxOrMinDateAsString:
        minAndMaxDate.max ||
        minAndMaxDate.maxDate ||
        minAndMaxDate.maxTime ||
        minAndMaxDate.maxDateTime,
      dataType: dataType,
      dateAsString: textToValidate,
      isVerifyingMin: false,
    });
    theMsg = checkMax.helperText;
    isError = checkMax.isError;
  }
  if (!isError && !theMsg.trim() && minAndMaxDate) {
    const checkMax = verifyDateLimit({
      maxOrMinDateAsString:
        minAndMaxDate.min ||
        minAndMaxDate.minDate ||
        minAndMaxDate.minTime ||
        minAndMaxDate.minDateTime,
      dataType: dataType,
      dateAsString: textToValidate,
      isVerifyingMin: true,
    });
    theMsg = checkMax.helperText;
  }
  return theMsg;
};

export const validateArray = ({
  arrayValue,
  mandatory,
  validationRules,
}: {
  arrayValue: string[];
  mandatory: boolean;
  validationRules: InputControlValidationRule[];
}): string => {
  if (arrayValue.length === 0 && mandatory) {
    return getMandatoryErrorMessage(validationRules);
  }
  return "";
};

export const validateValueAgainstICValidationRules = (
  newTextValue: string | string[],
  currentTextValue: string | string[],
  props?: InputControlProperties,
  defaultValue?: string | string[],
  minAndMaxDate?: { [p: string]: string },
) => {
  const isArray = Array.isArray(newTextValue);
  let finalMsg = "";
  if (
    (isArray &&
      (newTextValue[0] === "" ||
        JSON.stringify(newTextValue) !== JSON.stringify(currentTextValue))) ||
    (!isArray && (newTextValue === "" || newTextValue !== currentTextValue))
  ) {
    const errorMessage = isArray
      ? validateArray({
          arrayValue: newTextValue,
          mandatory: props?.mandatory || false,
          validationRules: props?.validationRules || [],
        })
      : validateTextValue({
          textToValidate: newTextValue,
          validationRules: props?.validationRules || [],
          mandatory: props?.mandatory || false,
          defaultValue: defaultValue || "",
          minAndMaxDate,
          dataType: props?.dataType || {},
        });
    finalMsg = errorMessage?.trim().length > 0 ? errorMessage : "";
  }
  return {
    newValue: newTextValue,
    errorMsg: finalMsg,
  };
};
