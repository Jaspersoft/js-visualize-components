/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import React from "react";
import { screen } from "@testing-library/dom";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";
import { ErrorDialog } from "../../../src/components/common/ErrorDialog";

describe("Error dialog", () => {
  const mockCancelBtnFunction = jest.fn();
  beforeEach(() => {
    cleanup();
  });
  const renderComponent = () => {
    render(
      <ErrorDialog
        handleCancelBtn={mockCancelBtnFunction}
        errorMsg={"error message"}
        subContainerMsg={"sub container message"}
        style={{ zIndex: 1350 }}
      />,
    );
  };

  test("renders error dialog and cancel button", () => {
    renderComponent();
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /cancel/i,
      }),
    ).toBeInTheDocument();
  });

  // test("calls handleCancelBtn function when cancel button is clicked", async () => {
  //     const mockCancelBtnFunction = () => {
  //         console.log("mock cancel button function")
  //     };
  //     renderComponent(mockCancelBtnFunction);
  //     const button = screen.getByTestId("actionBtn");
  //     console.log(button.onclick?.toString(), "button onclick event");
  //     await act(async () => {
  //         userEvent.click(button);
  //     });
  //     expect(mockCancelBtnFunction).toHaveBeenCalled();
  // });
});
