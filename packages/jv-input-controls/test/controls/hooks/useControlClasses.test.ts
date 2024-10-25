/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { renderHook } from "@testing-library/react";
import { useControlClasses } from "../../../src/controls/hooks/useControlClasses";

const requiredProps = {
  id: "0",
  label: "test",
  mandatory: false,
  readOnly: false,
  visible: true,
  type: "bool",
};

describe("useControlClasses custom hook", () => {
  it("should return an array with initial class provided", () => {
    const { result } = renderHook(() =>
      useControlClasses(["testing-class"], requiredProps),
    );
    expect(result.current).toContain("testing-class");
  });

  it("should include mandatory class for mandatory IC", () => {
    const icProps = { ...requiredProps, mandatory: true };
    const { result } = renderHook(() => useControlClasses([], icProps));
    expect(result.current).toContain("jv-mInputRequired");
  });

  it("should return hidden if not visible", () => {
    const icProps = { ...requiredProps, visible: false };
    const { result } = renderHook(() => useControlClasses([], icProps));
    expect(result.current).toContain("jv-uVisibility-hide");
    expect(result.current).not.toContain("jv-mInputRequired");
  });
});
