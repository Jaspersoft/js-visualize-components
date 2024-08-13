import { useEffect, useState } from "react";
import { getMandatoryErrorMessage } from "../../utils/ErrorMessageUtils";
import {
  BaseInputControlProps,
  getBaseInputControlProps,
  ICValidationRule,
} from "../BaseInputControl";

interface UseMandatoryMsgProps {
  validationRules: ICValidationRule[];
  isMandatory: boolean;
  textValue: string;
  defaultValue?: string;
  props?: BaseInputControlProps;
}

export const useErrorMsg = ({
  validationRules,
  isMandatory,
  textValue,
  defaultValue = "",
  props,
}: UseMandatoryMsgProps) => {
  const [msg, setMsg] = useState<string>(defaultValue);

  useEffect(() => {
    // Determine the message based on:
    // 1. whether the field is mandatory and the text value is empty
    // 2. whether the field has a pattern that needs to be matched
    let theMsg =
      isMandatory && !textValue.trim()
        ? getMandatoryErrorMessage(validationRules)
        : defaultValue;
    if (!theMsg.trim() && props?.dataType?.pattern) {
      // we have to evaluate the dataType and check if there is no pattern defined that we need to verify.
      const regex = new RegExp(props.dataType.pattern);
      regex.lastIndex = 0;
      const isMatch = regex.test(textValue);
      // TODO: we will need to translate this message once we add the i18n support:
      theMsg = !isMatch
        ? "This field does not match the required pattern."
        : "";
    }
    // also, we have to trigger the callback because there was an error
    props?.events?.change?.(getBaseInputControlProps(props, textValue), {
      [props.id]: theMsg,
    });
    setMsg(theMsg);
  }, [validationRules, isMandatory, textValue, defaultValue]);
  return msg;
};
