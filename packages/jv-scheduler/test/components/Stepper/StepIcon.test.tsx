import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { StepIcon } from "../../../src/components/Stepper/StepIcon";
import {
  ERROR_STATE,
  INCOMPLETE_DEFAULT_STATE,
  INCOMPLETE_STATE,
  SUCCESS_STATE,
} from "../../../src/constants/schedulerConstants";

describe("StepIcon component", () => {
  test("renders success icon", () => {
    render(<StepIcon icon={SUCCESS_STATE} data-testid="step-icon" />);
    expect(screen.getByTestId("step-icon")).toHaveClass("jv-uColor-success");
  });

  test("renders error icon", () => {
    render(<StepIcon icon={ERROR_STATE} data-testid="step-icon" />);
    expect(screen.getByTestId("step-icon")).toHaveClass("jv-uColor-error");
  });

  test("renders incomplete default icon", () => {
    render(
      <StepIcon icon={INCOMPLETE_DEFAULT_STATE} data-testid="step-icon" />,
    );
    expect(screen.getByTestId("step-icon")).toHaveClass("jv-uColor-incomplete");
  });

  test("renders incomplete icon", () => {
    render(<StepIcon icon={INCOMPLETE_STATE} data-testid="step-icon" />);
    expect(screen.getByTestId("step-icon")).toHaveClass("jv-uColor-incomplete");
  });
});
