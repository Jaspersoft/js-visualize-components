import { useEffect } from "react";
import {
  BaseInputControlProps,
  getBaseInputControlProps,
} from "../BaseInputControl";

export const useChangeCallback = (
  theValue: boolean,
  props: BaseInputControlProps,
) => {
  useEffect(() => {
    props?.events?.change?.(getBaseInputControlProps(props, theValue));
  }, [theValue]);
};
