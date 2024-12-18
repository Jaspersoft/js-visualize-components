/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { JVTypographyComponent } from "../../../src/components/common/CommonComponents";

describe("Common components", () => {
  const renderComponent = () => {
    render(
      <JVTypographyComponent text={"Hello World"} data-testid="typography" />,
    );
  };

  test("renders Typography component", () => {
    renderComponent();
    expect(screen.getByTestId("typography")).toBeInTheDocument();
  });
});
