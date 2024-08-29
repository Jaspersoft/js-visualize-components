import { InputControls } from "../src/InputControls";

describe("InputControls plugin", () => {
  it("should allow instantiation, and do so with default config settings", () => {
    let ic = new InputControls({});
    expect(ic).toBeDefined();
    expect(ic.getControls()).toEqual({});
  });
});
