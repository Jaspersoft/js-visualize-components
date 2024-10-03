import { InputControls, InputControlConfig } from "../src/InputControls";
import { render } from "@testing-library/react";

describe("InputControlsPanel component", () => {
  const mockVizInputControls = jest.fn();
  const mockV = {
    inputControls: mockVizInputControls,
  };

  const renderComponent = (
    v: any,
    uri: string,
    panelDef: InputControlConfig,
  ) => {
    render(<InputControls vObject={v} uri={uri} panelDef={panelDef} />);
  };

  it("should instantiate and call inputControls on visualize obj", () => {
    renderComponent(mockV, "/path/to/stuff", {});
    expect(mockVizInputControls).toHaveBeenCalled();
  });
});
