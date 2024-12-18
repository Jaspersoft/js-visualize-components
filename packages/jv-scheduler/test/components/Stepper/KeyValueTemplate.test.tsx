import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { KeyValueTemplate } from "../../../src/components/Stepper/KeyValueTemplate";

describe("KeyValueTemplate component", () => {
  it("renders KeyValueTemplate with title and value", () => {
    render(<KeyValueTemplate title="Test Title" value="Test Value" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Value")).toBeInTheDocument();
  });

  it("applies className and dataName props", () => {
    render(
      <KeyValueTemplate
        title="Test Title"
        value="Test Value"
        className="test-class"
        dataName="test-data-name"
      />,
    );
    const typographyElement = screen.getByText("Test Title").closest("p");
    expect(typographyElement).toHaveClass("test-class");
    expect(typographyElement).toHaveAttribute("data-name", "test-data-name");
  });

  it("renders with undefined value", () => {
    render(<KeyValueTemplate title="Test Title" value={undefined} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.queryByText("undefined")).not.toBeInTheDocument();
  });

  it("renders with null value", () => {
    render(<KeyValueTemplate title="Test Title" value={null} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.queryByText("null")).not.toBeInTheDocument();
  });

  it("renders with numeric value", () => {
    render(<KeyValueTemplate title="Test Title" value={123} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("123")).toBeInTheDocument();
  });
});
