import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useDispatch, useSelector } from "react-redux";
import SchedulerMain from "../../src/components/SchedulerMain";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("../../src/actions/action", () => ({
  setInitialPluginState: jest.fn(),
}));

jest.mock("../../src/components/Stepper/Stepper", () =>
  jest.fn(() => <div>Stepper</div>),
);
jest.mock("../../src/components/Tabs/SchedulerHeader", () =>
  jest.fn(() => <div>SchedulerHeader</div>),
);
jest.mock("../../src/components/Tabs/Tabs", () =>
  jest.fn(() => <div>Tabs</div>),
);
jest.mock("../../src/components/Tabs/SchedulerFooter", () =>
  jest.fn(() => <div>SchedulerFooter</div>),
);
jest.mock(
  "../../src/components/apiFailureError/ErrorConfirmationDialog",
  () => ({
    ErrorConfirmationDialog: jest.fn(() => <div>ErrorConfirmationDialog</div>),
  }),
);

describe("SchedulerMain component", () => {
  const mockDispatch = jest.fn();
  const mockState = {
    stepperConfiguration: { show: true },
  };

  beforeEach(() => {
    (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
    (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
      selector(mockState),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders SchedulerMain component with all subcomponents", () => {
    render(
      <SchedulerMain
        schedulerData={{}}
        schedulerUIConfig={{}}
        visualize={{}}
        uri="test-uri"
      />,
    );

    expect(screen.getByText("Stepper")).toBeInTheDocument();
    expect(screen.getByText("SchedulerHeader")).toBeInTheDocument();
    expect(screen.getByText("Tabs")).toBeInTheDocument();
    expect(screen.getByText("SchedulerFooter")).toBeInTheDocument();
    expect(screen.getByText("ErrorConfirmationDialog")).toBeInTheDocument();
  });

  test("dispatches setInitialPluginState on mount", () => {
    render(
      <SchedulerMain
        schedulerData={{}}
        schedulerUIConfig={{}}
        visualize={{}}
        uri="test-uri"
      />,
    );

    expect(mockDispatch).toHaveBeenCalled();
  });

  test("does not render Stepper when stepperConfig.show is false", () => {
    (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ stepperConfiguration: { show: false } }),
    );

    render(
      <SchedulerMain
        schedulerData={{}}
        schedulerUIConfig={{}}
        visualize={{}}
        uri="test-uri"
      />,
    );

    expect(screen.queryByText("Stepper")).not.toBeInTheDocument();
  });
});
