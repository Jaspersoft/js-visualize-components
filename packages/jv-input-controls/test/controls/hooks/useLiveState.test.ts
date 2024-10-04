/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { act, renderHook } from "@testing-library/react";
import { useLiveState } from "../../../src/controls/hooks/useLiveState";

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
  it("should set value from checked event property for checkboxes", () => {
    const { result } = renderHook(() => useLiveState(false));
    expect(result.current.value).toBe(false);
    act(() => {
      result.current.onChange({
        target: {
          type: "checkbox",
          checked: true,
          value: 42,
        },
      });
    });
    expect(result.current.value).toBe(true);
  });
  // it("should call the callback method if it is provided", () => {
  //   const callback = jest.fn();
  //   // help me fix the next line
  //   const { result } = renderHook(() =>
  //     useLiveState(0, {
  //       events: { change: callback },
  //       id: "column_time_1",
  //       label: "column_time",
  //       mandatory: false,
  //       readOnly: false,
  //       visible: true,
  //       type: "singleValueTime",
  //       state: {
  //         uri: "/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_time_1",
  //         id: "column_time_1",
  //         value: "23:44:21",
  //       },
  //     }),
  //   );
  //   act(() => {
  //     result.current.onChange({
  //       target: {
  //         type: "text",
  //         value: 42,
  //       },
  //     });
  //   });
  //   expect(callback).toHaveBeenCalled();
  // });
});
