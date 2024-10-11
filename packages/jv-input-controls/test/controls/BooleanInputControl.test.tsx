/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import * as React from "react";
import { BooleanInputControl } from "../../src/controls/BooleanInputControl";
import { cleanup, render } from "@testing-library/react";

const requiredProps = {
  id: "0",
  label: "test",
  mandatory: false,
  readOnly: false,
  visible: true,
  type: "bool",
};

const getBoolIC = (options?: object): React.JSX.Element => {
  return <BooleanInputControl {...{ ...requiredProps, ...options }} />;
};

describe("BooleanInputControl tests", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should create checkbox", () => {
    render(getBoolIC());
    const checkboxElement = document.querySelectorAll('input[type="checkbox"]');
    expect(checkboxElement.length).toBe(1);
  });

  it("should create switch", () => {
    render(getBoolIC({ styleType: "switch" }));
    const switchElement = document.querySelectorAll('input[type="checkbox"]');
    expect(switchElement.length).toBe(1);
    expect((switchElement[0] as any).checked).not.toBeTruthy();
  });

  it("should be checked when state.value === true", () => {
    render(getBoolIC({ state: { value: "true" } }));
    const checkboxElement = document.querySelectorAll('input[type="checkbox"]');
    expect((checkboxElement[0] as any).checked).toBeTruthy();
  });

  it("should be disabled when readOnly is true", () => {
    render(getBoolIC({ readOnly: true }));
    const checkboxElement = document.querySelector('input[type="checkbox"]');
    expect(checkboxElement).toHaveProperty("disabled", true);
  });
});
