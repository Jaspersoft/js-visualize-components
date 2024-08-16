import { renderHook } from "@testing-library/react";
import { useErrorMsg } from "../../../src/controls/hooks/useErrorMsg";
import { getMinAndMaxSettings } from "../../../src/utils/DateInputControlUtils";

const MANDATORY_ERROR_MESSAGE =
  "This field is mandatory so you must enter data.";

const validationRules = [
  {
    mandatoryValidationRule: {
      errorMessage: MANDATORY_ERROR_MESSAGE,
    },
  },
  {
    dateTimeFormatValidationRule: {
      errorMessage: "Specify a valid date/time value.",
      format: "yyyy-MM-dd'T'HH:mm:ss",
    },
  },
];

const props = {
  id: "theDateTime",
  description: "theDateTime",
  type: "singleValueDatetime",
  uri: "repo:/public/Samples/Resources/Input_Controls/theDateTime",
  label: "theDateTime",
  mandatory: false,
  readOnly: false,
  visible: true,
  masterDependencies: [],
  slaveDependencies: [],
  state: {
    uri: "/public/Samples/Resources/Input_Controls/theDateTime",
    id: "theDateTime",
    value: "",
  },
  dataType: {
    type: "datetime",
    maxValue: "2024-08-23T09:24:23",
    strictMax: true,
    minValue: "2024-08-14T06:14:19",
    strictMin: true,
  },
  validationRules,
};

describe("useErrorMsg custom hook", () => {
  it("should return no error message because it has a valid value", () => {
    const { result } = renderHook(() =>
      useErrorMsg({
        textValue: "I have a value and I am mandatory!",
        props,
      }),
    );
    expect(result.current).toBe("");
  });
  it("should return error message provided by server", () => {
    const { result } = renderHook(() =>
      useErrorMsg({
        textValue: "",
        props: {
          ...props,
          mandatory: true,
        },
      }),
    );
    expect(result.current).toBe(MANDATORY_ERROR_MESSAGE);
  });

  it("should return custom error message", () => {
    const customErrorMsg = "Specify a valid value for type number.";
    const { result } = renderHook(() =>
      useErrorMsg({
        textValue: "",
        defaultValue: customErrorMsg,
        props,
      }),
    );
    expect(result.current).toBe(customErrorMsg);
  });
  it("should not return any error even if it is empty but not mandatory", () => {
    const { result } = renderHook(() =>
      useErrorMsg({
        textValue: "",
        props,
      }),
    );
    expect(result.current).toBe("");
  });
  it("should return error for type date because of max date value is specified", () => {
    const { result } = renderHook(() =>
      useErrorMsg({
        textValue: "2024-08-23T09:24:23",
        props,
        minAndMaxDate: getMinAndMaxSettings(props.dataType, {
          minKey: "minDateTime",
          maxKey: "maxDateTime",
        }),
      }),
    );
    expect(result.current).toBe(
      "Verify the date is before 2024-08-23T09:24:23.",
    );
  });
  it("should return error for type date because of min date value is specified", () => {
    const { result } = renderHook(() =>
      useErrorMsg({
        textValue: "2024-08-14T06:14:19",
        props,
        minAndMaxDate: getMinAndMaxSettings(props.dataType, {
          minKey: "minDateTime",
          maxKey: "maxDateTime",
        }),
      }),
    );
    expect(result.current).toBe(
      "Verify the date is after 2024-08-14T06:14:19.",
    );
  });
  it("should not return error for type date because of max date value is specified", () => {
    const { result } = renderHook(() =>
      useErrorMsg({
        textValue: "2024-08-23T09:24:22",
        props: {
          ...props,
          dataType: {
            ...props.dataType,
            strictMax: false,
          },
        },
        minAndMaxDate: getMinAndMaxSettings(props.dataType, {
          minKey: "minDateTime",
          maxKey: "maxDateTime",
        }),
      }),
    );
    expect(result.current).toBe("");
  });
  it("should not return error for type date because of min date value is specified", () => {
    const { result } = renderHook(() =>
      useErrorMsg({
        textValue: "2024-08-14T06:14:20",
        props: {
          ...props,
          dataType: {
            ...props.dataType,
            strictMin: false,
          },
        },
        minAndMaxDate: getMinAndMaxSettings(props.dataType, {
          minKey: "minDateTime",
          maxKey: "maxDateTime",
        }),
      }),
    );
    expect(result.current).toBe("");
  });
});
