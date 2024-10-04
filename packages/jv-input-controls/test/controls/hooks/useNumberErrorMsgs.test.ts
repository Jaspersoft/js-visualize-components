/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { act, renderHook, waitFor } from "@testing-library/react";
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
  it("should return an error message for invalid number input", async () => {
    const { result, rerender } = renderHook(
      ({ textValue }) =>
        useNumberErrorMsg({
          textValue,
          props: ALL_PROPS,
        }),
      {
        initialProps: { textValue: "" },
      },
    );
    act(() => {
      rerender({ textValue: "abc" });
    });
    await waitFor(() => {
      expect(result.current).toBe("Specify a valid value for type number.");
    });
  });

  it("should return an error message for mandatory field with empty input", async () => {
    const { result, rerender } = renderHook(
      ({ textValue }) =>
        useNumberErrorMsg({
          textValue,
          props: ALL_PROPS,
        }),
      {
        initialProps: { textValue: "75" },
      },
    );
    act(() => {
      rerender({ textValue: "" });
    });
    await waitFor(() => {
      expect(result.current).toBe("Specify a valid value for type number.");
    });
  });
  it("should return an error message for input not matching the required pattern", async () => {
    const { result, rerender } = renderHook(
      ({ textValue }) =>
        useNumberErrorMsg({
          textValue,
          props: {
            ...ALL_PROPS,
            dataType: {
              ...ALL_PROPS.dataType,
              maxValue: "500",
              pattern: "^[1-5]$",
            },
          },
        }),
      {
        initialProps: { textValue: "" },
      },
    );

    act(() => {
      rerender({ textValue: "300" });
    });

    await waitFor(() => {
      const customErrorMsg = "This field does not match the required pattern.";
      expect(result.current).toBe(customErrorMsg);
    });
  });

  it("should return an error message for input exceeding the max value", async () => {
    const { result, rerender } = renderHook(
      ({ textValue }) =>
        useNumberErrorMsg({
          textValue,
          props: ALL_PROPS,
        }),
      {
        initialProps: { textValue: "" },
      },
    );
    act(() => {
      rerender({ textValue: "200" });
    });
    await waitFor(() => {
      expect(result.current).toBe(
        "Verify the number is lower or equal than 10.",
      );
    });
  });

  it("should return an error message for input below the min value", async () => {
    const { result, rerender } = renderHook(
      ({ textValue }) =>
        useNumberErrorMsg({
          textValue,
          props: ALL_PROPS,
        }),
      {
        initialProps: { textValue: "" },
      },
    );
    act(() => {
      rerender({ textValue: "0" });
    });
    await waitFor(() => {
      expect(result.current).toBe(
        "Verify the number is greater or equal than 1.",
      );
    });
  });

  it("should not return an error message for valid number input", async () => {
    const { result, rerender } = renderHook(
      ({ textValue }) =>
        useNumberErrorMsg({
          textValue,
          props: ALL_PROPS,
        }),
      {
        initialProps: { textValue: "" },
      },
    );
    act(() => {
      rerender({ textValue: "5" });
    });
    await waitFor(() => {
      expect(result.current).toBe("");
    });
  });

  it("should call the callback method if it is provided", async () => {
    const callback = jest.fn();
    const { rerender } = renderHook(
      ({ textValue }) =>
        useNumberErrorMsg({
          textValue,
          props: {
            ...ALL_PROPS,
            events: { change: callback },
          },
        }),
      {
        initialProps: { textValue: "" },
      },
    );

    act(() => {
      rerender({ textValue: "5" });
    });
    await waitFor(() => {
      expect(callback).toHaveBeenCalled();
    });
  });
});
