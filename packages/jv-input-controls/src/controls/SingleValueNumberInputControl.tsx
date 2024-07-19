import { TextField as JVTextField } from "@jaspersoft/jv-ui-components/material-ui/TextField/TextField";
import { getMandatoryErrorMessage } from "../utils/ErrorMessageUtils";
import { parseNumber, verifyLimit } from "../utils/NumberUtils";
import {
  BaseInputControlProps,
  ICDateValidationRule,
} from "./BaseInputControl";
import { useControlClasses } from "./hooks/useControlClasses";
import { useLiveState } from "./hooks/useLiveState";

export type NumberICType = "number";

export interface NumberICProps extends BaseInputControlProps {
  variant?: "standard" | "filled" | "outlined" | undefined;
  className?: string;
}

const checkIfNumber = (value: string) => {
  const result = parseNumber(value);
  return result !== null;
};

/**
 * Number Input Control Component
 *
 * Will handle the numbers as a text based input
 * @param props
 * @constructor
 */
export const SingleValueNumberInputControl = (props: NumberICProps) => {
  const {
    className,
    mandatory,
    readOnly,
    visible,
    dataType,
    validationRules,
    ...remainingProps
  } = props;
  const liveState = useLiveState(props.state?.value || "0");

  const controlClasses = useControlClasses([], props);
  // inputProps is needed to handle readOnly by TextField from MUI natively:
  const inputProps: any = {};
  if (readOnly) {
    inputProps.readOnly = true;
  }
  const theInputProps = { ...inputProps, ...liveState };
  let isError = !checkIfNumber(liveState.value);
  let helperText = "";
  if (isError) {
    if (!liveState.value.trim()) {
      helperText = getMandatoryErrorMessage(
        validationRules as ICDateValidationRule[],
      );
    } else {
      // TODO: in the future, this message need to be considered for i18n:
      helperText = "Specify a valid value for type number.";
    }
  } else {
    const valAsNumber = +liveState.value;
    const checkMax = verifyLimit({
      maxOrMinValAsNumber: +(dataType?.maxValue ?? 0),
      dataType,
      valAsNumber,
      isVerifyingMin: false,
    });
    helperText = checkMax.helperText;
    isError = checkMax.isError;

    if (!isError) {
      const checkMin = verifyLimit({
        maxOrMinValAsNumber: +(dataType?.minValue ?? 0),
        dataType,
        valAsNumber,
        isVerifyingMin: true,
      });
      helperText = checkMin.helperText;
      isError = checkMin.isError;
    }
  }
  return (
    <JVTextField
      {...remainingProps}
      variant={props.variant || "outlined"}
      className={`${controlClasses.join(" ")} ${className || ""}`}
      InputProps={theInputProps}
      type="text"
      error={isError ? helperText : false}
    />
  );
};
