/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { InputControls, InputControlsConfig } from "../src/InputControls";
import { render } from "@testing-library/react";

describe("InputControlsPanel component", () => {
  const mockVizInputControls = jest.fn();
  const mockV = {
    inputControls: mockVizInputControls,
  };

  const renderComponent = (
    v: any,
    uri: string,
    panelDef: InputControlsConfig,
  ) => {
    render(<InputControls v={v} uri={uri} config={panelDef} />);
  };

  it("should instantiate and call inputControls on visualize obj", () => {
    renderComponent(mockV, "/path/to/stuff", {});
    expect(mockVizInputControls).toHaveBeenCalled();
  });
});
