import { renderHook } from "@testing-library/react";
import { useControlClasses } from "../../src/controls/hooks/useControlClasses";

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
    expect(result.current).toContain("jv-uMandatory");
  });

  it("should return readonly for readonly classes", () => {
    const icProps = { ...requiredProps, readOnly: true };
    const { result } = renderHook(() => useControlClasses([], icProps));
    expect(result.current).toContain("jv-uReadOnly");
    expect(result.current).not.toContain("jv-uMandatory");
  });
});
