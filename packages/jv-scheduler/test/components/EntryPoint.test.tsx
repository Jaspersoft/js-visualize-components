import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
// import { useTranslation } from "react-i18next";
import EntryPoint, { renderScheduler } from "../../src/components/EntryPoint";
import { getSchedulerData } from "../../src/utils/configurationUtils";
import { VisualizeClient } from "@jaspersoft/jv-tools";
import { SchedulerConfig } from "../../src/types/scheduleType";

jest.mock("react-dom/client", () => ({
  createRoot: jest.fn().mockReturnValue({
    render: jest.fn(),
    unmount: jest.fn(),
  }),
}));

jest.mock("i18next", () => ({
  use: jest.fn().mockReturnThis(),
  init: jest.fn(),
}));

jest.mock("react-i18next", () => ({
  useTranslation: jest.fn().mockReturnValue({
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

jest.mock("../../src/utils/configurationUtils", () => ({
  getSchedulerData: jest.fn(),
}));
const mockErrorFunction = jest.fn();
const mockConfig: SchedulerConfig = {
  server: "http://localhost:8080",
  contextPath: "/jasperserver-pro",
  locale: "en",
  events: {
    error: mockErrorFunction,
    success: jest.fn(),
  },
};

const mockVisualizeClient = {} as VisualizeClient;

describe("EntryPoint component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders without crashing", async () => {
    (getSchedulerData as jest.Mock).mockResolvedValue({});
    render(
      <EntryPoint v={mockVisualizeClient} config={mockConfig} uri="test-uri" />,
    );
    await waitFor(() =>
      expect(screen.queryByText("Error fetching data")).not.toBeInTheDocument(),
    );
  });

  test("calls error event when root element is not found", () => {
    const container = document.getElementById("root") as HTMLElement;
    renderScheduler(mockVisualizeClient, "test-uri", container, mockConfig);
    expect(mockErrorFunction).toHaveBeenCalledWith({
      "container.not.found": "Root element is not found",
    });
  });

  // test("renders SchedulerMain when data is fetched successfully", async () => {
  //   (getSchedulerData as jest.Mock).mockResolvedValue({});
  //   render(
  //     <EntryPoint v={mockVisualizeClient} config={mockConfig} uri="test-uri" />
  //   );
  //   screen.logTestingPlaygroundURL();
  //   await waitFor(() => expect(screen.getByText("SchedulerMain")).toBeInTheDocument());
  // });

  // test("calls error event when data fetch fails", async () => {
  //   (getSchedulerData as jest.Mock).mockRejectedValue(new Error("Fetch error"));
  //   render(
  //     <EntryPoint v={mockVisualizeClient} config={mockConfig} uri="test-uri" />
  //   );
  //   await waitFor(() => expect(mockConfig.events?.error).toHaveBeenCalledWith("Fetch error"));
  // });
  //
  // test("changes language based on config locale", async () => {
  //   (getSchedulerData as jest.Mock).mockResolvedValue({});
  //   render(
  //     <EntryPoint v={mockVisualizeClient} config={{ ...mockConfig, locale: "fr" }} uri="test-uri" />
  //   );
  //   await waitFor(() => expect(useTranslation().i18n.changeLanguage).toHaveBeenCalledWith("fr"));
  // });
});
