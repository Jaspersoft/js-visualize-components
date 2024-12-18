import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ErrorTemplate } from "../../../src/components/Stepper/ErrorTemplate";

describe("ErrorTemplate component", () => {
  it("renders error text with correct class", () => {
    const errorMessage = "This is an error message";
    render(<ErrorTemplate text={errorMessage} />);
    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveClass(
      "jv-mText jv-uMargin-b-01 jv-uColor-error",
    );
  });
});
