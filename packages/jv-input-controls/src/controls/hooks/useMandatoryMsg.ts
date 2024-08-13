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

export const useMandatoryMsg = ({
  validationRules,
  isMandatory,
  textValue,
  defaultValue = "",
  props,
}: UseMandatoryMsgProps) => {
  const [msg, setMsg] = useState<string>(defaultValue);

  useEffect(() => {
    // Determine the message based on whether the field is mandatory and the text value is empty
    const theMsg =
      isMandatory && !textValue.trim()
        ? getMandatoryErrorMessage(validationRules)
        : defaultValue;
    setMsg(theMsg);
    // if (!errorText.trim()) {
    // we have to evaluate the regexpValidationRule.
    // }
    // also, we have to trigger the callback because there was an error
    props?.events?.change?.(getBaseInputControlProps(props, textValue), {
      [props.id]: theMsg,
    });
  }, [validationRules, isMandatory, textValue, defaultValue]);
  return msg;
};
