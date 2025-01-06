import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useDispatch, useSelector } from "react-redux";
import Parameters from "../../../src/components/Tabs/TabsContent/Parameters";
import {
  parametersTabErrorOrLoading,
  setPropertiesDetails,
} from "../../../src/actions/action";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("../../../src/actions/action", () => ({
  parametersTabErrorOrLoading: jest.fn(),
  setPropertiesDetails: jest.fn(),
  scheduleValidationError: jest.fn(),
}));

jest.mock("../../../src/components/common/CommonComponents", () => ({
  JVTypographyComponent: jest.fn(() => <div>JVTypographyComponent</div>),
}));

jest.mock("@jaspersoft/jv-input-controls", () => ({
  InputControls: jest.fn(() => <div>InputControls</div>),
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

describe("Parameters component", () => {
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
      source: {
        parameters: {
          parametersValues: {},
        },
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
    schedulerUIConfig: {
      resourceURI: "/test-uri",
    },
    parametersTabConfig: {
      success: jest.fn(),
      error: jest.fn(),
      events: {
        change: jest.fn(),
      },
      typeConfig: {},
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

  test("renders Parameters component with JVTypographyComponent and InputControls", () => {
    render(<Parameters />);
    expect(screen.getByText("JVTypographyComponent")).toBeInTheDocument();
    expect(screen.getByText("InputControls")).toBeInTheDocument();
  });

  test("dispatches parametersTabErrorOrLoading on mount", () => {
    render(<Parameters />);
    expect(mockDispatch).toHaveBeenCalledWith(
      parametersTabErrorOrLoading({ isError: false, isLoaded: false }),
    );
  });

  test("handles success event in InputControls", () => {
    const params = { data: { parameters: { param1: "value1" } } };
    (useSelector as unknown as jest.Mock).mockImplementation((selector) => ({
      ...mockState,
      parametersTabConfig: {
        ...mockState.parametersTabConfig,
        success: (params: any) => {},
      },
    }));
    render(<Parameters />);
    const successEvent = mockState.parametersTabConfig.success;
    successEvent(params);
    expect(mockDispatch).toHaveBeenCalledWith(
      parametersTabErrorOrLoading({ isLoaded: true, isError: false }),
    );
    expect(mockDispatch).toHaveBeenCalledWith(
      setPropertiesDetails({
        source: {
          ...mockState.scheduleInfo.source,
          parameters: {
            parameterValues: params.data.parameters,
          },
        },
      }),
    );
  });

  test("handles error event in InputControls", () => {
    const error = new Error("Test error");
    (useSelector as unknown as jest.Mock).mockImplementation((selector) => ({
      ...mockState,
      parametersTabConfig: {
        ...mockState.parametersTabConfig,
        error: () => {},
      },
    }));
    render(<Parameters />);
    const errorEvent = mockState.parametersTabConfig.error;
    errorEvent(error);
    expect(mockDispatch).toHaveBeenCalledWith(
      parametersTabErrorOrLoading({ isLoaded: true, isError: true }),
    );
  });

  test("handles change event in InputControls", () => {
    const ics = { param1: "value1" };
    const vs = false;
    (useSelector as unknown as jest.Mock).mockImplementation((selector) => ({
      ...mockState,
      parametersTabConfig: {
        ...mockState.parametersTabConfig,
        events: {
          change: (ics: any, vs: any) => {},
        },
      },
    }));
    render(<Parameters />);
    const changeEvent = mockState.parametersTabConfig.events.change;
    changeEvent(ics, vs);
    expect(mockDispatch).toHaveBeenCalledWith(
      setPropertiesDetails({
        source: {
          ...mockState.scheduleInfo.source,
          parameters: {
            parameterValues: ics,
          },
        },
      }),
    );
  });
});
