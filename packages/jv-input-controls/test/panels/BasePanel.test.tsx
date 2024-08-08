/*
 * Copyright © 2005-2024. Cloud Software Group, Inc. All rights reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc End User License Agreement.
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BasePanel from "../../src/panels/BasePanel";

describe("BasePanel", () => {
  const mockCallbackChange = jest.fn();

  const renderComponent = (controls: any, config?: any) => {
    render(
      <BasePanel
        controls={controls}
        config={config}
        callbackChange={mockCallbackChange}
      />,
    );
  };

  test("renders BooleanInputControl", () => {
    const controls = {
      data: [{ id: "1", type: "bool", label: "Boolean Control" }],
    };
    renderComponent(controls);
    expect(screen.getByLabelText("Boolean Control")).toBeInTheDocument();
  });

  test("renders SingleValueTextInputControl", () => {
    const controls = {
      data: [
        {
          id: "2",
          type: "singleValueText",
          label: "Text Control",
          dataType: "string",
        },
      ],
    };
    renderComponent(controls);
    expect(screen.getByLabelText("Text Control")).toBeInTheDocument();
  });

  test("renders SingleValueNumberInputControl", () => {
    const controls = {
      data: [
        {
          id: "3",
          type: "singleValueNumber",
          label: "Number Control",
          dataType: "number",
        },
      ],
    };
    renderComponent(controls);
    expect(screen.getByLabelText("Number Control")).toBeInTheDocument();
  });

  test("renders DatePickerInputControl", () => {
    const controls = {
      data: [
        {
          id: "4",
          type: "singleValueDate",
          label: "Date Control",
          dataType: "date",
        },
      ],
    };
    const config = { singleValueDate: { type: "material" } };
    renderComponent(controls, config);
    expect(screen.getByLabelText("Date Control")).toBeInTheDocument();
  });

  test("renders DatePickerTextFieldInputControl", () => {
    const controls = {
      data: [
        {
          id: "5",
          type: "singleValueDate",
          label: "Date Control",
          dataType: "date",
        },
      ],
    };
    renderComponent(controls);
    expect(screen.getByLabelText("Date Control")).toBeInTheDocument();
  });

  test("renders DateTimePickerInputControl", () => {
    const controls = {
      data: [
        {
          id: "6",
          type: "singleValueDatetime",
          label: "Datetime Control",
          dataType: "datetime",
        },
      ],
    };
    const config = { singleValueDatetime: { type: "material" } };
    renderComponent(controls, config);
    expect(screen.getByLabelText("Datetime Control")).toBeInTheDocument();
  });

  test("renders DateTimePickerTextFieldInputControl", () => {
    const controls = {
      data: [
        {
          id: "7",
          type: "singleValueDatetime",
          label: "Datetime Control",
          dataType: "datetime",
        },
      ],
    };
    renderComponent(controls);
    expect(screen.getByLabelText("Datetime Control")).toBeInTheDocument();
  });

  test("renders SingleSelectInputControl", () => {
    const controls = {
      data: [{ id: "8", type: "singleSelect", label: "Select Control" }],
    };
    renderComponent(controls);
    expect(screen.getByLabelText("Select Control")).toBeInTheDocument();
  });

  test("renders TimePickerInputControl", () => {
    const controls = {
      data: [
        {
          id: "9",
          type: "singleValueTime",
          label: "Time Control",
          dataType: "time",
        },
      ],
    };
    const config = { singleValueTime: { type: "material" } };
    renderComponent(controls, config);
    expect(screen.getByLabelText("Time Control")).toBeInTheDocument();
  });

  test("renders TimePickerTextFieldInputControl", () => {
    const controls = {
      data: [
        {
          id: "10",
          type: "singleValueTime",
          label: "Time Control",
          dataType: "time",
        },
      ],
    };
    renderComponent(controls);
    expect(screen.getByLabelText("Time Control")).toBeInTheDocument();
  });
});
