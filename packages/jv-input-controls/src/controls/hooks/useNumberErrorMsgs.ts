import { useState } from "react";
import { getMandatoryErrorMessage } from "../../utils/ErrorMessageUtils";
import { checkIfNumber, verifyLimit } from "../../utils/NumberUtils";
import { InputControlProperties } from "@jaspersoft/jv-tools";
import { getInputControlProperties } from "../BaseInputControl";
import { useEffectAfterInitial } from "./useEffectAfterInitial";

interface UseNumberErrorMsgProps {
  textValue: string;
  props?: InputControlProperties;
}

export const useNumberErrorMsg = ({
  textValue,
  props,
}: UseNumberErrorMsgProps) => {
  const [msg, setMsg] = useState<string>("");

  useEffectAfterInitial(() => {
    // Determine the message based on:
    // 1. whether the field is a number or not
    // 2. whether the field is mandatory and the text value is empty
    // 3. whether the field has a pattern that needs to be matched
    // 4. whether the field meets the max value
    // 5. whether the field meets the min value
    let isError = !checkIfNumber(textValue);
    let theMsg: string;
    if (isError) {
      theMsg = "Specify a valid value for type number.";
      props?.events?.change?.(getInputControlProperties(props, textValue), {
        [props.id]: theMsg,
      });
      setMsg(theMsg);
      return;
    }
    theMsg =
      props?.mandatory && !textValue.trim()
        ? getMandatoryErrorMessage(props?.validationRules)
        : "";
    if (!theMsg.trim() && props?.dataType?.pattern) {
      // we have to evaluate the dataType and check if there is no pattern defined that we need to verify.
      const regex = new RegExp(`${props.dataType.pattern}`);
      regex.lastIndex = 0;
      const isMatch = regex.test(textValue);
      // TODO: we will need to translate this message once we add the i18n support:
      theMsg = !isMatch
        ? "This field does not match the required pattern."
        : "";
    }
    const valAsNumber = +textValue;
    if (!theMsg.trim()) {
      // verify max limit:
      const checkMax = verifyLimit({
        maxOrMinValAsNumber:
          props?.dataType?.maxValue !== undefined
            ? +props.dataType.maxValue
            : null,
        dataType: props?.dataType,
        valAsNumber,
        isVerifyingMin: false,
      });
      theMsg = checkMax.helperText;
      isError = checkMax.isError;
    }
    if (!isError && !theMsg.trim()) {
      // verify min limit:
      const checkMin = verifyLimit({
        maxOrMinValAsNumber:
          props?.dataType?.minValue !== undefined
            ? +props.dataType.minValue
            : null,
        dataType: props?.dataType,
        valAsNumber,
        isVerifyingMin: true,
      });
      theMsg = checkMin.helperText;
    }
    // also, we have to trigger the callback because there was an error
    props?.events?.change?.(getInputControlProperties(props, textValue), {
      [props.id]: theMsg,
    });
    setMsg(theMsg);
  }, [textValue]);
  return msg;
};
