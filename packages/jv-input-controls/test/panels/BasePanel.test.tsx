/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BasePanel from "../../src/panels/BasePanel";
import { FC } from "react";
import { InputControlsContext } from "../../src/reducer/InputControlsReducer";
import { INITIAL_STATE_FOR_TESTS } from "./mock.state";

const mockDispatch = jest.fn();

const MockInputControlsProvider: FC<any> = ({ children }) => {
  return (
    <InputControlsContext.Provider
      value={{ state: INITIAL_STATE_FOR_TESTS, dispatch: mockDispatch }}
    >
      {children}
    </InputControlsContext.Provider>
  );
};

describe("BasePanel", () => {
  beforeEach(() => {
    cleanup();
    render(
      <MockInputControlsProvider>
        <BasePanel />
      </MockInputControlsProvider>,
    );
  });

  it("renders BooleanInputControl", () => {
    expect(
      screen.getByLabelText(INITIAL_STATE_FOR_TESTS.inputControls[0].label),
    ).toBeInTheDocument();
  });

  it("renders SingleValueTextInputControl", () => {
    expect(
      screen.getByLabelText(INITIAL_STATE_FOR_TESTS.inputControls[1].label),
    ).toBeInTheDocument();
  });

  it("renders DatePickerTextFieldInputControl", () => {
    expect(
      screen.getByLabelText(INITIAL_STATE_FOR_TESTS.inputControls[2].label),
    ).toBeInTheDocument();
  });

  it("renders TimePickerTextFieldInputControl", () => {
    expect(
      screen.getByLabelText(INITIAL_STATE_FOR_TESTS.inputControls[3].label),
    ).toBeInTheDocument();
  });

  it("renders DateTimePickerTextFieldInputControl", () => {
    expect(
      screen.getByLabelText(INITIAL_STATE_FOR_TESTS.inputControls[4].label),
    ).toBeInTheDocument();
  });

  it("renders SingleValueNumberInputControl", () => {
    expect(
      screen.getByLabelText(INITIAL_STATE_FOR_TESTS.inputControls[6].label),
    ).toBeInTheDocument();
  });
});
