import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "../../../src/components/loader/Loader";

jest.mock("@jaspersoft/jv-ui-components", () => ({
  JVCircularProgress: jest.fn(() => <div data-testid="circular-progress" />),
}));

describe("Loader component", () => {
  test("renders Loader component with two JVCircularProgress elements", () => {
    render(<Loader />);
    const progressElements = screen.getAllByTestId("circular-progress");
    expect(progressElements).toHaveLength(2);
  });
});
