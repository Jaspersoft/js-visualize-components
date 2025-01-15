import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useDispatch, useSelector } from "react-redux";
import Tabs from "../../../src/components/Tabs/Tabs";
import {
  setCurrentActiveTab,
  setVisitedTab,
} from "../../../src/actions/action";
// import { currentTabValidationError } from "../../../src/actions/action";

import {
  SCHEDULE_TAB,
  PARAMETERS_TAB,
  NOTIFICATIONS_TAB,
  OUTPUT_TAB,
} from "../../../src/constants/schedulerConstants";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("../../../src/actions/action", () => ({
  setCurrentActiveTab: jest.fn(),
  setVisitedTab: jest.fn(),
  currentTabValidationError: jest.fn(),
}));

jest.mock("../../../src/components/Tabs/TabsContent/Schedule", () =>
  jest.fn(() => <div>Schedule</div>),
);
jest.mock("../../../src/components/Tabs/TabsContent/Parameters", () =>
  jest.fn(() => <div>Parameters</div>),
);
jest.mock("../../../src/components/Tabs/TabsContent/Output", () =>
  jest.fn(() => <div>Output</div>),
);
jest.mock(
  "../../../src/components/Tabs/TabsContent/notifications/Notifications",
  () => jest.fn(() => <div>Notifications</div>),
);

describe("Tabs component", () => {
  const mockDispatch = jest.fn();
  const mockState = {
    visitedTabs: ["schedule"],
    tabsConfiguration: {
      tabsToShow: [
        { key: "schedule", label: "Schedule", value: SCHEDULE_TAB },
        { key: "parameters", label: "Parameters", value: PARAMETERS_TAB },
        {
          key: "notifications",
          label: "Notifications",
          value: NOTIFICATIONS_TAB,
        },
        { key: "output", label: "Output", value: OUTPUT_TAB },
      ],
    },
    currentActiveTab: SCHEDULE_TAB,
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

  test("renders Tabs component with JVTabs and JVTab", () => {
    render(<Tabs />);

    expect(screen.getByLabelText("navigationPanel")).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /schedule/i })).toBeInTheDocument();
    expect(
      screen.getByRole("tab", { name: /parameters/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("tab", { name: /notifications/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /output/i })).toBeInTheDocument();
  });
  test("handles tab change and sets visited tab", () => {
    render(<Tabs />);
    fireEvent.click(
      screen.getByRole("tab", {
        name: /output/i,
      }),
    );
    expect(mockDispatch).toHaveBeenCalledWith(setVisitedTab([OUTPUT_TAB]));
    expect(mockDispatch).toHaveBeenCalledWith(setCurrentActiveTab(OUTPUT_TAB));
  });

  // test("handles tab change and sets visited tab", () => {
  //   (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
  //     selector({ ...mockState,
  //       currentActiveTab: PARAMETERS_TAB, }),
  //   );
  //   render(<Tabs />);
  //   screen.logTestingPlaygroundURL();
  //   fireEvent.click(screen.getByRole('tab', {
  //     name: /parameters/i
  //   }));
  //   expect(mockDispatch).toHaveBeenCalledWith(setVisitedTab([PARAMETERS_TAB]));
  //   expect(mockDispatch).toHaveBeenCalledWith(setCurrentActiveTab(PARAMETERS_TAB));
  // });
});
