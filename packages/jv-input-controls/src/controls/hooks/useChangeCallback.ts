import { BaseInputControlProps } from "@jaspersoft/jv-tools";
import { getBaseInputControlProps } from "../BaseInputControl";
import { useEffectAfterInitial } from "./useEffectAfterInitial";

export const useChangeCallback = (
  theValue: boolean,
  props: BaseInputControlProps,
) => {
  useEffectAfterInitial(() => {
    props?.events?.change?.(getBaseInputControlProps(props, theValue));
  }, [theValue]);
};
