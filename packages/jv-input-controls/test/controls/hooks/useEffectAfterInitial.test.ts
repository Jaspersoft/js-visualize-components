/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { act, renderHook } from "@testing-library/react";
import { useEffectAfterInitial } from "../../../src/controls/hooks/useEffectAfterInitial";

describe("useEffectAfterInitial", () => {
  it("should not call the callback on initial render", () => {
    const callback = jest.fn();
    renderHook(() => useEffectAfterInitial(callback, []));

    expect(callback).not.toHaveBeenCalled();
  });

  it("should call the callback on subsequent renders when dependencies change", () => {
    const callback = jest.fn();
    const { rerender } = renderHook(
      ({ deps }) => useEffectAfterInitial(callback, deps),
      {
        initialProps: { deps: [1] },
      },
    );

    // Initial render, callback should not be called
    expect(callback).not.toHaveBeenCalled();

    // Rerender with new dependencies
    act(() => {
      rerender({ deps: [2] });
    });

    // Callback should be called on dependency change
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should not call the callback if dependencies do not change", () => {
    const callback = jest.fn();
    const { rerender } = renderHook(
      ({ deps }) => useEffectAfterInitial(callback, deps),
      {
        initialProps: { deps: [1] },
      },
    );

    // Initial render, callback should not be called
    expect(callback).not.toHaveBeenCalled();

    // Rerender with the same dependencies
    act(() => {
      rerender({ deps: [1] });
    });

    // Callback should not be called as dependencies did not change
    expect(callback).not.toHaveBeenCalled();
  });
});
