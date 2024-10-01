import {
  InputControlPanelConfig,
  InputControls,
  InputControlsPanel,
} from "../src/InputControls";
import { render } from "@testing-library/react";

describe("InputControls plugin", () => {
  it("should allow instantiation, and do so with default config settings", () => {
    let ic = new InputControls({});
    expect(ic).toBeDefined();
    expect(ic.getControls()).toEqual({});
  });
});

describe("InputControlsPanel component", () => {
  const mockVizInputControls = jest.fn();
  const mockV = {
    inputControls: mockVizInputControls,
  };

  const renderComponent = (
    v: any,
    uri: string,
    panelDef: InputControlPanelConfig,
  ) => {
    render(<InputControlsPanel vObject={v} uri={uri} panelDef={panelDef} />);
  };

  it("should instantiate and call inputControls on visualize obj", () => {
    renderComponent(mockV, "/path/to/stuff", {});
    expect(mockVizInputControls).toHaveBeenCalled();
  });
});
