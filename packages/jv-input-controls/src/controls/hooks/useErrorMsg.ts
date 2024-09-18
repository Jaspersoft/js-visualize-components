import { useState } from "react";
import { verifyDateLimit } from "../../utils/DateInputControlUtils";
import { getMandatoryErrorMessage } from "../../utils/ErrorMessageUtils";
import {
  BaseInputControlProps,
  getBaseInputControlProps,
} from "../BaseInputControl";
import { useEffectAfterInitial } from "./useEffectAfterInitial";
import { useTranslation } from "react-i18next";

interface UseMandatoryMsgProps {
  textValue: string;
  defaultValue?: string;
  props?: BaseInputControlProps;
  minAndMaxDate?: { [key: string]: string };
}

export const useErrorMsg = ({
  textValue,
  defaultValue = "",
  props,
  minAndMaxDate,
}: UseMandatoryMsgProps) => {
  const { t } = useTranslation() as { t: (k: string) => string };
  const [msg, setMsg] = useState<string>(defaultValue);

  useEffectAfterInitial(() => {
    // Determine the message based on:
    // 1. whether the field is mandatory and the text value is empty
    // 2. whether the field has a pattern that needs to be matched
    // 3. whether the field meets the max date value
    // 4. whether the field meets the min date value
    let theMsg =
      props?.mandatory && !textValue.trim()
        ? getMandatoryErrorMessage(props?.validationRules)
        : defaultValue;
    if (!theMsg.trim() && props?.dataType?.pattern) {
      // we have to evaluate the dataType and check if there is no pattern defined that we need to verify.
      const regex = new RegExp(props.dataType.pattern);
      regex.lastIndex = 0;
      const isMatch = regex.test(textValue);
      theMsg = isMatch ? "" : t("error.not.matching.pattern");
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
        dateAsString: textValue,
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
        dateAsString: textValue,
        isVerifyingMin: true,
      });
      theMsg = checkMax.helperText;
    }
    // also, we have to trigger the callback because there was an error
    props?.events?.change?.(getBaseInputControlProps(props, textValue), {
      [props.id]: theMsg,
    });
    setMsg(theMsg);
  }, [textValue]);
  return msg;
};
