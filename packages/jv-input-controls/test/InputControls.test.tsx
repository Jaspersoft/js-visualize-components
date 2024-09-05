import { InputControls, InputControlsPanel } from "../src/InputControls";
import { render } from "@testing-library/react";

describe("InputControls plugin", () => {
  it("should allow instantiation, and do so with default config settings", () => {
    let ic = new InputControls({});
    expect(ic).toBeDefined();
    expect(ic.getControls()).toEqual({});
  });
});

describe("InputControlsPanel component", () => {
  const mockError = jest.fn(),
    mockVizInputControls = jest.fn();
  const mockV = {
    inputControls: mockVizInputControls,
  };

  const renderComponent = (v: any, uri: string) => {
    render(
      <InputControlsPanel vObject={v} uri={uri} handleError={mockError} />,
    );
  };

  it("should instantiate and call inputControls on visualize obj", () => {
    renderComponent(mockV, "/path/to/stuff");
    expect(mockVizInputControls).toHaveBeenCalled();
  });
});
