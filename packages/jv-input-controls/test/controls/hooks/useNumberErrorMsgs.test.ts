import { renderHook } from "@testing-library/react";
import { useNumberErrorMsg } from "../../../src/controls/hooks/useNumberErrorMsgs";

const ALL_PROPS = {
  id: "parStoreId",
  description: "",
  type: "singleValueNumber",
  uri: "repo:/public/Samples/Reports/StoreDetails_1_files/parStoreId",
  label: "parStoreId",
  mandatory: true,
  readOnly: false,
  visible: true,
  masterDependencies: [],
  slaveDependencies: [],
  validationRules: [
    {
      mandatoryValidationRule: {
        errorMessage: "This field is mandatory so you must enter data.",
      },
    },
  ],
  state: {
    uri: "/public/Samples/Reports/StoreDetails_1_files/parStoreId",
    id: "parStoreId",
    value: "",
    error: "This field is mandatory so you must enter data.",
  },
  dataType: {
    type: "number",
    maxValue: "10",
    strictMax: false,
    minValue: "1",
    strictMin: false,
  },
};

describe("useNumberErrorMsg", () => {
  it("should return an error message for invalid number input", () => {
    const { result } = renderHook(() =>
      useNumberErrorMsg({
        textValue: "abc",
        props: ALL_PROPS,
      }),
    );
    expect(result.current).toBe("Specify a valid value for type number.");
  });

  it("should return an error message for mandatory field with empty input", () => {
    const { result } = renderHook(() =>
      useNumberErrorMsg({
        textValue: "",
        props: ALL_PROPS,
      }),
    );
    expect(result.current).toBe("Specify a valid value for type number.");
  });
  it("should return an error message for input not matching the required pattern", () => {
    const customErrorMsg = "This field does not match the required pattern.";
    const { result } = renderHook(() =>
      useNumberErrorMsg({
        textValue: "300",
        props: {
          ...ALL_PROPS,
          dataType: {
            ...ALL_PROPS.dataType,
            maxValue: "500",
            pattern: "^[1-5]$",
          },
        },
      }),
    );
    expect(result.current).toBe(customErrorMsg);
  });

  it("should return an error message for input exceeding the max value", () => {
    const { result } = renderHook(() =>
      useNumberErrorMsg({
        textValue: "200",
        props: ALL_PROPS,
      }),
    );
    expect(result.current).toBe("Verify the number is lower or equal than 10.");
  });

  it("should return an error message for input below the min value", () => {
    const { result } = renderHook(() =>
      useNumberErrorMsg({
        textValue: "0",
        props: ALL_PROPS,
      }),
    );
    expect(result.current).toBe(
      "Verify the number is greater or equal than 1.",
    );
  });

  it("should not return an error message for valid number input", () => {
    const { result } = renderHook(() =>
      useNumberErrorMsg({
        textValue: "5",
        props: ALL_PROPS,
      }),
    );
    expect(result.current).toBe("");
  });

  it("should call the callback method if it is provided", () => {
    const callback = jest.fn();
    renderHook(() =>
      useNumberErrorMsg({
        textValue: "5",
        props: {
          ...ALL_PROPS,
          events: { change: callback },
        },
      }),
    );
    expect(callback).toHaveBeenCalled();
  });
});