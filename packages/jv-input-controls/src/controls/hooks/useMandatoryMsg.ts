import { useEffect, useState } from "react";
import { getMandatoryErrorMessage } from "../../utils/ErrorMessageUtils";
import { ICDateValidationRule } from "../BaseInputControl";

interface UseMandatoryMsgProps {
  validationRules: ICDateValidationRule[];
  isMandatory: boolean;
  textValue: string;
  defaultValue?: string;
}

export const useMandatoryMsg = ({
  validationRules,
  isMandatory,
  textValue,
  defaultValue = "",
}: UseMandatoryMsgProps) => {
  const [msg, setMsg] = useState<string>(defaultValue);

  useEffect(() => {
    // Determine the message based on whether the field is mandatory and the text value is empty
    const theMsg =
      isMandatory && !textValue.trim()
        ? getMandatoryErrorMessage(validationRules)
        : defaultValue;
    setMsg(theMsg);
  }, [validationRules, isMandatory, textValue, defaultValue]);

  return msg;
};
