/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { useState } from "react";
import { validateValueAgainstICValidationRules } from "../../utils/ErrorMessageUtils";
import { InputControlProperties } from "@jaspersoft/jv-tools";
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
  const [theTextValue, setTheTextValue] = useState<string | string[]>(
    textValue,
  );

  useEffectAfterInitial(() => {
    const { newValue, errorMsg } = validateValueAgainstICValidationRules(
      textValue,
      theTextValue,
      props,
      defaultValue,
      minAndMaxDate,
    );
    setTheTextValue(newValue);
    setMsg(errorMsg);
  }, [textValue]);
  return msg;
};
