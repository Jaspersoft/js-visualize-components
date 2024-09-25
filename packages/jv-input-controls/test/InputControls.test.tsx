import { InputControls } from "../src/InputControls";
import { render } from "@testing-library/react";

describe("InputControlsPanel component", () => {
  const mockError = jest.fn(),
    mockVizInputControls = jest.fn();
  const mockV = {
    inputControls: mockVizInputControls,
  };

  const renderComponent = (v: any, uri: string) => {
    render(<InputControls vObject={v} uri={uri} handleError={mockError} />);
  };

  it("should instantiate and call inputControls on visualize obj", () => {
    renderComponent(mockV, "/path/to/stuff");
    expect(mockVizInputControls).toHaveBeenCalled();
  });
});
