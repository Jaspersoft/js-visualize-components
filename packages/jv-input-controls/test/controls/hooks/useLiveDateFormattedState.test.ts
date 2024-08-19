/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */

import { useLiveDateFormattedState } from "../../../src/controls/hooks/useLiveDateFormattedState";
import { act, renderHook } from "@testing-library/react";
import { useLiveState } from "../../../src/controls/hooks/useLiveState";

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
  it("should call the callback method if it is provided", () => {
    const callback = jest.fn();
    // help me fix the next line
    const { result } = renderHook(() =>
      useLiveDateFormattedState({
        initialValue: "2014-09-12T15:46:18",
        format: "YYYY-MM-DDTHH:mm:ss",
        props: {
          events: { change: callback },
          id: "column_time_1",
          label: "column_time",
          mandatory: false,
          readOnly: false,
          visible: true,
          type: "singleValueTime",
          state: {
            uri: "/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_time_1",
            id: "column_time_1",
            value: "23:44:21",
          },
        },
      }),
    );
    act(() => {
      result.current.onChange({
        target: {
          type: "date",
          value: "2014-09-12T15:46:18",
        },
      });
    });
    expect(callback).toHaveBeenCalled();
  });
});
