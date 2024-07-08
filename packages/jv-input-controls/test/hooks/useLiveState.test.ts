import * as React from "react";
import { useLiveState } from "../../src/controls/hooks/useLiveState";
import { renderHook } from "@testing-library/react";

describe("useLiveState hook tests", () => {
  it("should store initial value", () => {
    const { result } = renderHook(() => useLiveState(42));
    expect(result.current.value).toBe(42);
  });
  it("should return 2 fields", () => {
    const { result } = renderHook(() => useLiveState(0));
    expect(Object.keys(result.current).length).toBe(2);
  });
  it("should return expected fields: value, onChange", () => {
    const { result } = renderHook(() => useLiveState(0));
    expect(result.current.value).toBeDefined();
    expect(result.current.onChange).toBeDefined();
    expect(result.current.onChange instanceof Function).toBeTruthy();
  });
});
