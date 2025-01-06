import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useSelector } from "react-redux";
import Stepper from "../../../src/components/Stepper/Stepper";
import moment from "moment";
import {
  NOTIFICATIONS_TAB,
  OUTPUT_TAB,
  PARAMETERS_TAB,
  SCHEDULE_TAB,
} from "../../../src/constants/schedulerConstants";

jest.mock("i18next", () => ({
  use: jest.fn().mockReturnThis(),
  init: jest.fn(),
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("Stepper component", () => {
  const mockState = {
    currentActiveTab: SCHEDULE_TAB,
    visitedTabs: [SCHEDULE_TAB, OUTPUT_TAB, NOTIFICATIONS_TAB, PARAMETERS_TAB],
    tabsConfiguration: {
      stepsToShow: [
        { name: SCHEDULE_TAB, title: "Schedule" },
        { name: OUTPUT_TAB, title: "Output" },
        { name: NOTIFICATIONS_TAB, title: "Notifications" },
      ],
    },
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
    scheduleErrors: {
      scheduleJobName: null,
      scheduleJobDescription: null,
      address: null,
      subject: null,
      messageText: null,
      recurrenceInterval: null,
      recurrenceIntervalUnit: null,
      startDate: null,
      baseOutputFilename: null,
      outputFormat: null,
      folderURI: null,
      baseOutputFileDescription: null,
      parameters: null,
    },
  };

  beforeEach(() => {
    (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
      selector(mockState),
    );
  });

  it("renders JVStepper with correct props", () => {
    render(<Stepper />);
    expect(screen.getByText("Schedule")).toBeInTheDocument();
    expect(screen.getByText("Output")).toBeInTheDocument();
    expect(screen.getByText("Notifications")).toBeInTheDocument();
  });
});
