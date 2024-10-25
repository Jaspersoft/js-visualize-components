/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { JVDatePickerProvider } from "@jaspersoft/jv-ui-components";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import * as React from "react";
import { DatePickerInputControl } from "../../src/controls/DatePickerInputControl";

const requiredProps = {
  id: "column_date_1",
  label: "column_date",
  mandatory: false,
  readOnly: false,
  visible: true,
  type: "singleValueDate",
  state: {
    uri: "/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_date_1",
    id: "column_date_1",
    value: "2009-09-12",
  },
};

const getDatePickerIC = (options?: any): React.JSX.Element => {
  const mergedProps = { ...requiredProps, ...options };
  return (
    <JVDatePickerProvider>
      <DatePickerInputControl {...mergedProps} />
    </JVDatePickerProvider>
  );
};

describe("DatePickerInputControl tests", () => {
  test("DatePickerInputControl is rendered correctly", () => {
    render(
      getDatePickerIC({
        state: {
          value: "2022-04-17",
        },
      }),
    );
    const datePickerElement = screen.getByRole("textbox");
    expect(datePickerElement).toBeInTheDocument();
  });

  // Test for label prop
  test("displays the label when provided", () => {
    const testLabel = "Test Label";
    render(getDatePickerIC({ label: testLabel }));
    const labelElement = screen.queryByLabelText(testLabel);
    expect(labelElement).toBeInTheDocument();
  });

  // Test for value prop
  test("uses value as the initial input value", () => {
    const defaultValue = "04/17/2022";
    render(
      getDatePickerIC({
        state: {
          value: defaultValue,
        },
      }),
    );
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement.value).toBe(defaultValue);
  });

  // Test for onChange event
  test("updates value on change", () => {
    render(
      getDatePickerIC({
        state: {
          value: "04/17/2022",
        },
      }),
    );
    const datePicker = screen.queryByLabelText(
      requiredProps.label,
    ) as HTMLInputElement;
    const newValue = "04/18/2022";
    fireEvent.change(datePicker, { target: { value: newValue } });
    expect(screen.getByDisplayValue(newValue)).toBeVisible();
  });

  // test readOnly prop
  test("check the component is read-only", () => {
    // Render the component
    const { rerender } = render(getDatePickerIC({ readOnly: true }));
    let inputElement = screen.getByRole("textbox") as HTMLInputElement;

    // Assert that the element is found and has the expected attribute
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("readonly");

    rerender(getDatePickerIC({}));
    inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement).not.toHaveAttribute("readonly");
  });

  // test visible prop
  test("check the component is visible or not", () => {
    const HIDDEN_CLASS_NAME = "jv-uVisibility-hide";
    // Render the component
    const { container } = render(getDatePickerIC({ visible: false }));
    // Use querySelector to get the first div with the class "jv-mInputLarge"
    const divElement = container.querySelector(`div.${HIDDEN_CLASS_NAME}`);

    // Assert that the element is found and has the expected class
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass(HIDDEN_CLASS_NAME);
  });

  // test disable prop
  test("check the component is disabled", () => {
    // Render the component
    const { rerender } = render(getDatePickerIC({ disabled: true }));
    let inputElement = screen.getByRole("textbox") as HTMLInputElement;

    // Assert that the element is found and has the expected attribute
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("disabled");

    rerender(getDatePickerIC({}));
    inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement).not.toHaveAttribute("disabled");
  });
});
