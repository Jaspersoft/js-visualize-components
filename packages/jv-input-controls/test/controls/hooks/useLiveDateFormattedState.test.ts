/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { renderHook } from "@testing-library/react";
import { useLiveDateFormattedState } from "../../../src/controls/hooks/useLiveDateFormattedState";

describe("useLiveState hook tests", () => {
  const initialValue = "2024-07-08";

  it("should store initial value", () => {
    const { result } = renderHook(() =>
      useLiveDateFormattedState({ initialValue }),
    );
    expect(result.current.value).toBe(initialValue);
  });
  it("should return 2 fields", () => {
    const { result } = renderHook(() =>
      useLiveDateFormattedState({ initialValue }),
    );
    expect(Object.keys(result.current).length).toBe(2);
  });
  it("should return expected fields: value, onChange", () => {
    const { result } = renderHook(() =>
      useLiveDateFormattedState({ initialValue }),
    );
    expect(result.current.value).toBeDefined();
    expect(result.current.onChange).toBeDefined();
    expect(result.current.onChange instanceof Function).toBeTruthy();
  });
  it("should return same date even though a datetime format is provided", () => {
    const dateTimeFormat = "YYYY-MM-DDTHH:mm:ss";
    const { result } = renderHook(() =>
      useLiveDateFormattedState({ format: dateTimeFormat, initialValue }),
    );
    expect(result.current.value).toBe(initialValue);
  });
  it("should return a datetime value", () => {
    const dateTimeFormat = "YYYY-MM-DDTHH:mm:ss",
      dateTimeValue = "2014-09-12T15:46:18";
    const { result } = renderHook(() =>
      useLiveDateFormattedState({
        format: dateTimeFormat,
        initialValue: dateTimeValue,
      }),
    );
    expect(result.current.value).toBe(dateTimeValue);
  });
});
