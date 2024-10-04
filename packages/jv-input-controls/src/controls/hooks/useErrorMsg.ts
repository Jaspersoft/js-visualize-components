import { useState } from "react";
import { verifyDateLimit } from "../../utils/DateInputControlUtils";
import { getMandatoryErrorMessage } from "../../utils/ErrorMessageUtils";
import { InputControlProperties } from "@jaspersoft/jv-tools";
import { getInputControlProperties } from "../BaseInputControl";
import { useEffectAfterInitial } from "./useEffectAfterInitial";

interface UseMandatoryMsgProps {
  textValue: string | string[];
  defaultValue?: string;
  props?: InputControlProperties;
  minAndMaxDate?: { [key: string]: string };
}

export const useErrorMsg = ({
  textValue,
  defaultValue = "",
  props,
  minAndMaxDate,
}: UseMandatoryMsgProps) => {
  const [msg, setMsg] = useState<string>(defaultValue);

  const validateTextValue = (textToValidate: string): string => {
    // Determine the message based on:
    // 1. whether the field is mandatory and the text value is empty
    // 2. whether the field has a pattern that needs to be matched
    // 3. whether the field meets the max date value
    // 4. whether the field meets the min date value
    let theMsg: string =
      props?.mandatory && !textToValidate.trim()
        ? getMandatoryErrorMessage(props?.validationRules)
        : defaultValue;
    if (!theMsg.trim() && props?.dataType?.pattern) {
      // we have to evaluate the dataType and check if there is no pattern defined that we need to verify.
      const regex = new RegExp(props.dataType.pattern);
      regex.lastIndex = 0;
      const isMatch = regex.test(textToValidate);
      // TODO: we will need to translate this message once we add the i18n support:
      theMsg = !isMatch
        ? "This field does not match the required pattern."
        : "";
    }
    let isError = false;
    if (!theMsg.trim() && minAndMaxDate) {
      const checkMax = verifyDateLimit({
        maxOrMinDateAsString:
          minAndMaxDate.max ||
          minAndMaxDate.maxDate ||
          minAndMaxDate.maxTime ||
          minAndMaxDate.maxDateTime,
        dataType: props?.dataType,
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
        dataType: props?.dataType,
        dateAsString: textToValidate,
        isVerifyingMin: true,
      });
      theMsg = checkMax.helperText;
    }
    return theMsg;
  };

  const validateArray = (arrayValue: string[]): string => {
    if (arrayValue.length === 0 && props?.mandatory) {
      return getMandatoryErrorMessage(props?.validationRules);
    }
    return "";
  };

  useEffectAfterInitial(() => {
    const errorMessage = Array.isArray(textValue)
      ? validateArray(textValue)
      : validateTextValue(textValue);
    const finalMsg = errorMessage?.trim().length > 0 ? errorMessage : "";
    // also, we have to trigger the callback in case there was an error
    props?.events?.change?.(getInputControlProperties(props, textValue), {
      [props.id]: finalMsg,
    });
    setMsg(finalMsg);
  }, [textValue]);
  return msg;
};
