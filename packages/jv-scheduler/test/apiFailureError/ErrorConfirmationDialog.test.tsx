import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { ErrorConfirmationDialog } from "../../src/components/apiFailureError/ErrorConfirmationDialog";

const mockStore = configureStore([]);
const initialState = {
  scheduleApisFailure: ["createScheduleApiFailure"],
  lastApiCalledFailed: "createScheduleApiFailure",
};

describe("ErrorConfirmationDialog component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  test("renders error message and sub-container message correctly", () => {
    render(
      <Provider store={store}>
        <ErrorConfirmationDialog />
      </Provider>,
    );

    expect(
      screen.getByText(
        "You can close this error message and try to save the schedule again.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "A network error is preventing the schedule from being saved.",
      ),
    ).toBeInTheDocument();
  });

  test("dispatches setApiFailure action on cancel button click", () => {
    render(
      <Provider store={store}>
        <ErrorConfirmationDialog />
      </Provider>,
    );

    const cancelButton = screen.getByText(/cancel/i);
    cancelButton.click();

    expect(store.dispatch).toHaveBeenCalled();
  });
});
