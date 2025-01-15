import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useDispatch, useSelector } from "react-redux";
import Output from "../../../src/components/Tabs/TabsContent/Output";
import { updateChangeToStore } from "../../../src/utils/schedulerUtils";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
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

jest.mock("../../../src/components/apiFailureError/MessageAPIError", () => ({
  MessageAPIError: jest.fn(() => <div>MessageAPIError</div>),
}));

jest.mock("../../../src/utils/schedulerUtils", () => ({
  updateChangeToStore: jest.fn(),
}));

describe("Output component", () => {
  const mockDispatch = jest.fn();
  const mockState = {
    outputFormats: ["pdf", "html"],
    userTimeZones: [{ code: "UTC", description: "Coordinated Universal Time" }],
    stepperConfiguration: { show: true },
    scheduleErrors: { baseOutputFilename: "Error" },
    scheduleInfo: {
      baseOutputFileDescription: "test",
      scheduleJobName: "name",
      scheduleJobDescription: "description",
      mailNotification: {
        messageText: "message",
        subject: "subject",
        toAddresses: {
          address: "a@test.com",
        },
        resultSendType: "SEND",
      },
      outputTimeZone: "UTC",
      outputFormats: { outputFormat: ["pdf"] },
      baseOutputFilename: "testFile",
      repositoryDestination: {
        outputDescription: "testDescription",
        folderURI: "/test",
        saveToRepository: true,
      },
    },
    fieldsVisibility: {
      baseOutputFilename: true,
      outputDescription: true,
      outputFormat: true,
      outputTimeZone: true,
    },
    scheduleApisFailure: {
      userTimezoneApiFailure: false,
      userOutputFormatApiFailure: false,
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

  test("renders Output component with all fields", () => {
    render(<Output />);
    expect(screen.getByText("output.title")).toBeInTheDocument();
    expect(screen.getByLabelText("output.file.name.label")).toBeInTheDocument();
    expect(
      screen.getByLabelText("output.file.description.label"),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("output.timezone.label")).toBeInTheDocument();
    expect(screen.getByText("output.formats.label")).toBeInTheDocument();
  });

  test("handles file name change and blur", () => {
    render(<Output />);
    const input = screen.getByLabelText("output.file.name.label");
    fireEvent.change(input, { target: { value: "newFileName" } });
    fireEvent.blur(input);
    expect(updateChangeToStore).toHaveBeenCalledWith(
      { baseOutputFilename: "newFileName" },
      "baseOutputFilename",
      "newFileName",
      true,
      expect.any(Function),
    );
  });

  test("handles output description change and blur", () => {
    render(<Output />);
    const input = screen.getByLabelText("output.file.description.label");
    fireEvent.change(input, { target: { value: "newDescription" } });
    fireEvent.blur(input);
    expect(updateChangeToStore).toHaveBeenCalledWith(
      {
        repositoryDestination: {
          ...mockState.scheduleInfo!.repositoryDestination,
          outputDescription: "newDescription",
        },
      },
      "baseOutputFileDescription",
      "newDescription",
      true,
      expect.any(Function),
    );
  });

  // test("handles timezone change", () => {
  //   render(<Output />);
  //   screen.logTestingPlaygroundURL()
  //   const select =  screen.getByDisplayValue(/UTC/i);
  //   fireEvent.change(select, { target: { value: "UTC" } });
  //   expect(updateChangeToStore).toHaveBeenCalledWith(
  //     { outputTimeZone: "UTC" },
  //     "outputTimeZone",
  //     "UTC",
  //     true,
  //     expect.any(Function)
  //   );
  // });

  test("handles output format change", () => {
    render(<Output />);
    const checkbox = screen.getByLabelText("output.format.pdf");
    fireEvent.click(checkbox);
    expect(updateChangeToStore).toHaveBeenCalledWith(
      { outputFormats: { outputFormat: [] } },
      "outputFormat",
      [],
      true,
      expect.any(Function),
    );
  });

  test("renders MessageAPIError when there are API failures", () => {
    (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
      selector({
        ...mockState,
        scheduleApisFailure: {
          userTimezoneApiFailure: true,
          userOutputFormatApiFailure: true,
        },
      }),
    );
    render(<Output />);
    expect(screen.getByText("MessageAPIError")).toBeInTheDocument();
  });
});
