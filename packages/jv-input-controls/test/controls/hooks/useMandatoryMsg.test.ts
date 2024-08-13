import { renderHook } from "@testing-library/react";
import { useErrorMsg } from "../../../src/controls/hooks/useErrorMsg";

const MANDATORY_ERROR_MESSAGE =
  "This field is mandatory so you must enter data.";

const validationRules = [
  {
    mandatoryValidationRule: {
      errorMessage: MANDATORY_ERROR_MESSAGE,
    },
  },
];

describe("useMandatoryMsg custom hook", () => {
  it("should return no error message because it has a valid value", () => {
    const { result } = renderHook(() =>
      useErrorMsg({
        textValue: "I have a value and I am mandatory!",
        isMandatory: true,
        validationRules: validationRules,
      }),
    );
    expect(result.current).toBe("");
  });
  it("should return error message provided by server", () => {
    const { result } = renderHook(() =>
      useErrorMsg({
        textValue: "",
        isMandatory: true,
        validationRules: validationRules,
      }),
    );
    expect(result.current).toBe(MANDATORY_ERROR_MESSAGE);
  });

  it("should return custom error message", () => {
    const customErrorMsg = "Specify a valid value for type number.";
    const { result } = renderHook(() =>
      useErrorMsg({
        textValue: "",
        isMandatory: false,
        validationRules: validationRules,
        defaultValue: customErrorMsg,
      }),
    );
    expect(result.current).toBe(customErrorMsg);
  });
  it("should not return any error even if it is empty but not mandatory", () => {
    const { result } = renderHook(() =>
      useErrorMsg({
        textValue: "",
        isMandatory: false,
        validationRules: validationRules,
      }),
    );
    expect(result.current).toBe("");
  });
});
