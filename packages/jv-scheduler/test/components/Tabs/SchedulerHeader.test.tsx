import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useTranslation } from "react-i18next";
import SchedulerHeader from "../../../src/components/Tabs/SchedulerHeader";
import { translationProps } from "../../../src/types/scheduleType";
import i18nScheduler from "../../../src/i18n";

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

describe("SchedulerHeader component", () => {
  const mockTranslation = {
    t: (key: string) => key,
  } as unknown as translationProps;

  beforeEach(() => {
    (useTranslation as jest.Mock).mockReturnValue(mockTranslation);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders SchedulerHeader component with translated text", () => {
    render(<SchedulerHeader />);
    expect(screen.getByText("create.schedule.header")).toBeInTheDocument();
  });

  test("uses i18nScheduler for translations", () => {
    render(<SchedulerHeader />);
    expect(useTranslation).toHaveBeenCalledWith(undefined, {
      i18n: i18nScheduler,
    });
  });
});
