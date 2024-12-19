/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { renderHook } from "@testing-library/react";
import { useChangeCallback } from "../../../src/controls/hooks/useChangeCallback";
import { BooleanInputControlProps } from "../../../src/controls/BooleanInputControl";
import { CommonInputControlProperties } from "@jaspersoft/jv-tools";

describe("useChangeCallback custom hook", () => {
  const mockHandleIcChange = jest.fn();
  const commonBooleanICProps: CommonInputControlProperties = {
    id: "test-id",
    label: "Test Label",
    mandatory: false,
    readOnly: false,
    visible: true,
    type: "bool",
  };
  const booleanICProps: BooleanInputControlProps = {
    ...commonBooleanICProps,
    handleIcChange: mockHandleIcChange,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call handleIcChange with correct parameters when theValue changes", () => {
    const { rerender } = renderHook(
      ({ theValue }) => useChangeCallback(theValue, booleanICProps),
      {
        initialProps: { theValue: false },
      },
    );

    rerender({ theValue: true });
    // This emulates the "response" object sent to the user on the events.change callback:
    const successResponse = { [commonBooleanICProps.id]: "" };
    expect(mockHandleIcChange).toHaveBeenCalledWith(
      expect.objectContaining(commonBooleanICProps),
      successResponse,
    );
  });

  it("should not call handleIcChange on initial render", () => {
    renderHook(() => useChangeCallback(false, booleanICProps));

    expect(mockHandleIcChange).not.toHaveBeenCalled();
  });

  it("should call handleIcChange only after theValue changes", () => {
    const { rerender } = renderHook(
      ({ theValue }) => useChangeCallback(theValue, booleanICProps),
      {
        initialProps: { theValue: false },
      },
    );

    rerender({ theValue: false });
    expect(mockHandleIcChange).not.toHaveBeenCalled();

    rerender({ theValue: true });
    expect(mockHandleIcChange).toHaveBeenCalledTimes(1);
  });
});
