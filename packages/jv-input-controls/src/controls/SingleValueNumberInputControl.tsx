import { TextField as JVTextField } from "@jaspersoft/jv-ui-components/material-ui/TextField/TextField";
import { getMandatoryErrorMessage } from "../utils/ErrorMessageUtils";
import { parseNumber, verifyLimit } from "../utils/NumberUtils";
import { BaseInputControlProps, ICValidationRule } from "./BaseInputControl";
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
    events,
    ...remainingProps
  } = props;
  const liveState = useLiveState(props.state?.value || "");

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
    // TODO: in the future, this message need to be considered for i18n:
    helperText =
      mandatory && !liveState.value.trim()
        ? getMandatoryErrorMessage(validationRules as ICValidationRule[])
        : "Specify a valid value for type number.";
  } else {
    const valAsNumber = +liveState.value;
    const checkMax = verifyLimit({
      maxOrMinValAsNumber: dataType?.maxValue ? +dataType.maxValue : null,
      dataType,
      valAsNumber,
      isVerifyingMin: false,
    });
    helperText = checkMax.helperText;
    isError = checkMax.isError;

    if (!isError) {
      const checkMin = verifyLimit({
        maxOrMinValAsNumber: dataType?.minValue ? +dataType.minValue : null,
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
      className={`${className || ""}`}
      textFieldClassName={`${controlClasses.join(" ")}`}
      InputProps={theInputProps}
      type="text"
      error={isError ? helperText : false}
    />
  );
};
