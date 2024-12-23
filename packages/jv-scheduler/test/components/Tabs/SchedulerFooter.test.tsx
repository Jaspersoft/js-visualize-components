import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useDispatch, useSelector } from "react-redux";
import SchedulerFooter from "../../../src/components/Tabs/SchedulerFooter";
import {
  allTabValidationError,
  createScheduleJob,
} from "../../../src/actions/action";
import { IState } from "../../../src/types/scheduleType";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("../../../src/actions/action", () => ({
  allTabValidationError: jest.fn(),
  createScheduleJob: jest.fn(),
}));

jest.mock("i18next", () => ({
  use: jest.fn().mockReturnThis(),
  init: jest.fn(),
}));

jest.mock("react-i18next", () => ({
  useTranslation: jest.fn().mockReturnValue({
    t: (key: string) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe("SchedulerFooter component", () => {
  const mockDispatch = jest.fn();
  const mockState: Partial<IState> = {
    schedulerUIConfig: {
      server: "https://test.com",
      contextPath: "/test",
      events: {
        cancelBtnClick: jest.fn(),
      },
    },
    parametersTabLoading: {
      isError: false,
      isLoaded: true,
    },
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

  test("renders SchedulerFooter component with buttons", () => {
    render(<SchedulerFooter />);
    expect(screen.getByText("create.schedule.button")).toBeInTheDocument();
    expect(screen.getByText("cancel.button")).toBeInTheDocument();
  });

  test("enables create button when parametersTabLoading is loaded without error", () => {
    render(<SchedulerFooter />);
    expect(screen.getByText("create.schedule.button")).not.toBeDisabled();
  });

  test("handles create schedule button click", () => {
    render(<SchedulerFooter />);
    fireEvent.click(screen.getByText("create.schedule.button"));
    expect(mockDispatch).toHaveBeenCalledWith(
      allTabValidationError(expect.any(Function)),
    );
  });

  test("handles cancel button click", () => {
    render(<SchedulerFooter />);
    fireEvent.click(screen.getByText("cancel.button"));
    expect(
      mockState.schedulerUIConfig?.events?.cancelBtnClick,
    ).toHaveBeenCalled();
  });

  test("calls createScheduleJob when validation passes", () => {
    (allTabValidationError as jest.Mock).mockImplementation((callback) =>
      callback(false),
    );
    render(<SchedulerFooter />);
    fireEvent.click(screen.getByText("create.schedule.button"));
    expect(mockDispatch).toHaveBeenCalledWith(
      createScheduleJob(expect.any(Function)),
    );
  });

  test("enables create button when validation fails", () => {
    (allTabValidationError as jest.Mock).mockImplementation((callback) =>
      callback(true),
    );
    render(<SchedulerFooter />);
    fireEvent.click(screen.getByText("create.schedule.button"));
    expect(screen.getByText("create.schedule.button")).not.toBeDisabled();
  });
});
