import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  NotificationStepDefaultMessage,
  ParametersStepDefaultMessage,
  ScheduleStepDefaultMessage,
  OutputStepDefaultMessage,
} from "../../../src/components/Stepper/DefaultData";
import moment from "moment";
import { useSelector } from "react-redux";

jest.mock("i18next", () => ({
  use: jest.fn().mockReturnThis(),
  init: jest.fn(),
}));

// Mock the useSelector hook
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("ParametersStepDefaultMessage component", () => {
  const mockState = {
    scheduleInfo: {
      scheduleJobName: "Test Job Name",
      trigger: {
        simpleTrigger: {
          startDate: moment().toISOString(),
          startType: "DATE_TIME",
        },
      },
      repositoryDestination: {
        outputDescription: "Test Description",
      },
    },
    stepperState: {
      scheduleJobDescription: "Test Job Description",
      recurrenceInterval: 5,
      recurrenceIntervalUnit: "HOURS",
      subject: "Test Subject",
      address: ["test@example.com", "test2@example.com"],
      resultSendType: "SEND_LINK",
      messageText: "Test Message",
      baseOutputFilename: "TestFileName",
      outputFormat: ["pdf", "html"],
      outputTimeZone: "UTC",
    },
    userTimeZones: [{ code: "UTC", description: "Coordinated Universal Time" }],
  };

  beforeEach(() => {
    (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
      selector(mockState),
    );
  });

  afterEach(() => {
    cleanup();
  });

  test("renders parameters step default message correctly", () => {
    const { unmount } = render(<ParametersStepDefaultMessage />);

    expect(
      screen.getByText("stepper.parameters.ic.helpertext"),
    ).toBeInTheDocument();
    unmount();
  });

  test("renders recipients correctly", () => {
    const { unmount } = render(<NotificationStepDefaultMessage />);
    expect(
      screen.getByText(/stepper\.notifications\.recipients\.key/i),
    ).toBeInTheDocument();
    unmount();
  });

  test("renders subject correctly", () => {
    const { unmount } = render(<NotificationStepDefaultMessage />);
    expect(
      screen.getByText(/stepper\.notifications\.subject\.key/i),
    ).toBeInTheDocument();
    unmount();
  });

  test("renders message correctly", () => {
    render(<NotificationStepDefaultMessage />);
    expect(
      screen.getByText(/stepper\.notifications\.message\.key/i),
    ).toBeInTheDocument();
  });

  test("renders access type correctly", () => {
    render(<NotificationStepDefaultMessage />);
    expect(
      screen.getByText(/stepper\.notifications\.access\.key/i),
    ).toBeInTheDocument();
  });

  test("renders helper texts when data is missing", () => {
    (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
      selector({
        stepperState: {},
        userTimeZones: [],
      }),
    );
    render(<NotificationStepDefaultMessage />);

    expect(
      screen.getByText("stepper.notifications.recipients.helpertext"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("stepper.notifications.subject.helpertext"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("stepper.notifications.message.helpertext"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("stepper.notifications.access.helpertext"),
    ).toBeInTheDocument();
  });

  test("renders job name correctly", () => {
    render(<ScheduleStepDefaultMessage />);
    expect(screen.getByText("Test Job Name")).toBeInTheDocument();
  });

  test("renders job description correctly", () => {
    render(<ScheduleStepDefaultMessage />);
    expect(screen.getByText("Test Job Description")).toBeInTheDocument();
  });

  test("renders recurrence interval correctly", () => {
    render(<ScheduleStepDefaultMessage />);
    expect(
      screen.getByText(/stepper\.schedule\.recurrence\.helpertext/i),
    ).toBeInTheDocument();
  });

  test("renders start date correctly", () => {
    render(<ScheduleStepDefaultMessage />);
    expect(
      screen.getByText(/stepper\.schedule\.startnow\.value/i),
    ).toBeInTheDocument();
  });

  test("renders helper texts when data is missing", () => {
    (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
      selector({
        scheduleInfo: {},
        stepperState: {},
      }),
    );
    render(<ScheduleStepDefaultMessage />);
    expect(
      screen.getByText("stepper.schedule.jobname.helpertext"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("stepper.schedule.description.helpertext"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("stepper.schedule.recurrence.helpertext"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("stepper.schedule.startnow.value"),
    ).toBeInTheDocument();
  });
  test("renders file name correctly", () => {
    render(<OutputStepDefaultMessage />);
    expect(screen.getByText("stepper.output.filename.key")).toBeInTheDocument();
    expect(screen.getByText("TestFileName")).toBeInTheDocument();
  });

  test("renders file description correctly", () => {
    render(<OutputStepDefaultMessage />);
    expect(
      screen.getByText("stepper.output.description.key"),
    ).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  test("renders output timezone correctly", () => {
    render(<OutputStepDefaultMessage />);
    expect(screen.getByText("stepper.output.timezone.key")).toBeInTheDocument();
    expect(
      screen.getByText("UTC - Coordinated Universal Time"),
    ).toBeInTheDocument();
  });

  test("renders output formats correctly", () => {
    render(<OutputStepDefaultMessage />);
    expect(screen.getByText("stepper.output.formats.key")).toBeInTheDocument();
    expect(
      screen.getByText("output.format.pdf, output.format.html"),
    ).toBeInTheDocument();
  });

  test("renders helper text when file name is missing", () => {
    (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
      selector({
        ...mockState,
        stepperState: { ...mockState.stepperState, baseOutputFilename: "" },
      }),
    );
    render(<OutputStepDefaultMessage />);
    expect(screen.getByText("stepper.output.helpertext")).toBeInTheDocument();
  });

  test("renders helper text when file description is missing", () => {
    (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
      selector({
        ...mockState,
        scheduleInfo: { repositoryDestination: { outputDescription: "" } },
      }),
    );
    render(<OutputStepDefaultMessage />);
    expect(
      screen.getByText("stepper.output.description.helpertext"),
    ).toBeInTheDocument();
  });

  test("renders additional formats when more than max limit", () => {
    (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
      selector({
        ...mockState,
        stepperState: {
          ...mockState.stepperState,
          outputFormat: ["pdf", "html", "csv", "xml", "csv1", "pdf1", "xls"],
        },
      }),
    );
    render(<OutputStepDefaultMessage />);
    expect(
      screen.getByText(
        /output\.format\.pdf, output\.format\.html, output\.format\.csv, output\.format\.xml, output\.format\.csv1 \(\+2 schedule\.more\)/i,
      ),
    ).toBeInTheDocument();
  });
});
