import { InputControlProperties } from "@jaspersoft/jv-tools";
import { getInputControlProperties } from "../BaseInputControl";
import { useEffectAfterInitial } from "./useEffectAfterInitial";

export const useChangeCallback = (
  theValue: boolean,
  props: InputControlProperties,
) => {
  useEffectAfterInitial(() => {
    props?.events?.change?.(getInputControlProperties(props, theValue));
  }, [theValue]);
};
