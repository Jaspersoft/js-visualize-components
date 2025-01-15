import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useSelector } from "react-redux";
import configureStore from "redux-mock-store";
import Schedule from "../../../src/components/Tabs/TabsContent/Schedule";
import { updateChangeToStore } from "../../../src/utils/schedulerUtils";
import { useStoreUpdate } from "../../../src/hooks/useStoreUpdate";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

jest.mock("../../../src/utils/schedulerUtils", () => ({
  updateChangeToStore: jest.fn(),
}));
jest.mock("../../../src/hooks/useStoreUpdate", () => ({
  useStoreUpdate: jest.fn(),
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

const mockStore = configureStore([]);

describe("Schedule component", () => {
  let store: any;
  const mockState: any = {
    scheduleErrors: {
      recurrenceInterval: "",
      scheduleJobName: "",
      scheduleJobDescription: "",
    },
    stepperConfiguration: { show: true },
    scheduleInfo: {
      scheduleJobName: "Test Job",
      scheduleJobDescription: "Test Description",
      trigger: {
        simpleTrigger: {
          startDate: "2024-01-01T00:00:00",
          startType: 1,
          recurrenceInterval: 5,
          recurrenceIntervalUnit: "HOUR",
        },
      },
      outputTimeZone: "UTC",
    },
    fieldsVisibility: {
      scheduleJobName: true,
      scheduleJobDescription: true,
      recurrenceInterval: true,
      recurrenceIntervalUnit: true,
      startTime: true,
    },
  };

  beforeEach(() => {
    store = mockStore(mockState);
    store.dispatch = jest.fn();
    (useStoreUpdate as jest.Mock).mockReturnValue(jest.fn());
    (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
      selector(mockState),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders Schedule component with all fields", () => {
    render(<Schedule />);
    expect(
      screen.getByLabelText("schedule.job.name.label"),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("schedule.job.description.label"),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("schedule.recurrence.interval"),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("schedule.recurrence.timeframe"),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("schedule.recurrence.start.now"),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("schedule.recurrence.start.custom"),
    ).toBeInTheDocument();
  });

  test("handles job name change and blur", () => {
    render(<Schedule />);
    const jobNameInput = screen.getByLabelText("schedule.job.name.label");
    fireEvent.change(jobNameInput, { target: { value: "New Job Name" } });
    fireEvent.blur(jobNameInput);
    expect(updateChangeToStore).toHaveBeenCalledWith(
      { scheduleJobName: "New Job Name" },
      "scheduleJobName",
      "New Job Name",
      true,
      expect.any(Function),
    );
  });

  test("handles job description change and blur", () => {
    render(<Schedule />);
    const jobDescriptionInput = screen.getByLabelText(
      "schedule.job.description.label",
    );
    fireEvent.change(jobDescriptionInput, {
      target: { value: "New Description" },
    });
    fireEvent.blur(jobDescriptionInput);
    expect(updateChangeToStore).toHaveBeenCalledWith(
      { scheduleJobDescription: "New Description" },
      "scheduleJobDescription",
      "New Description",
      true,
      expect.any(Function),
    );
  });

  test("handles recurrence interval change and blur", () => {
    render(<Schedule />);
    const intervalInput = screen.getByLabelText("schedule.recurrence.interval");
    fireEvent.change(intervalInput, { target: { value: "10" } });
    fireEvent.blur(intervalInput);
    expect(useStoreUpdate).toHaveBeenCalled();
  });

  test("handles recurrence timeframe change", () => {
    render(<Schedule />);
    const timeframeSelect = screen.getByDisplayValue(/hour/i);
    fireEvent.change(timeframeSelect, { target: { value: "DAYS" } });
    expect(useStoreUpdate).toHaveBeenCalled();
  });

  test("handles start type change to specific time", () => {
    render(<Schedule />);
    const specificTimeRadio = screen.getByLabelText(
      "schedule.recurrence.start.custom",
    );
    fireEvent.click(specificTimeRadio);
    expect(useStoreUpdate).toHaveBeenCalled();
  });

  test("handles specific date time change and blur", () => {
    render(<Schedule />);
    const dateTimeInput = screen.getByLabelText(
      "schedule.recurrence.start.custom",
    );
    fireEvent.change(dateTimeInput, {
      target: { value: "2024-01-02T00:00:00" },
    });
    fireEvent.blur(dateTimeInput);
    expect(useStoreUpdate).toHaveBeenCalled();
  });
});
