import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FieldHeader } from "../../../src/components/Stepper/FieldHeader";

describe("FieldHeader component", () => {
  it("renders text with correct class", () => {
    const headerText = "This is a header";
    render(<FieldHeader text={headerText} />);
    const headerElement = screen.getByText(headerText);
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass("jv-uGrey-light jv-uMargin-b-01");
  });
});
