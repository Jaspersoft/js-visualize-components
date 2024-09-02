import { render, screen } from "@testing-library/react";
import { JVButton } from "@jaspersoft/jv-ui-components";
import "@testing-library/jest-dom";

describe("Button tests", () => {
  it("should render Button", () => {
    render(<JVButton />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
