import { DatePickerProvider as JVDatePickerProvider } from "@jaspersoft/jv-ui-components/material-ui/Date/DatePickerProvider";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import * as React from "react";
import { DatePickerInputControl } from "../src/controls/DatePickerInputControl";

const requiredProps = {
  id: "date-picker-id",
  label: "testDatePicker",
  mandatory: false,
  readOnly: false,
  visible: true,
  type: "singleValueDate",
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
      getDatePickerIC({ defaultValue: "2022-04-17", value: "2022-04-17" }),
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
  //
  // Test for value prop
  test("uses value as the initial input value", () => {
    const defaultValue = "04/17/2022";
    render(getDatePickerIC({ value: defaultValue }));
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement.value).toBe(defaultValue);
  });
  //
  // Test for onChange event
  test("updates value on change", () => {
    const { getByRole } = render(getDatePickerIC());
    const inputElement = getByRole("textbox") as HTMLInputElement;
    const newValue = "04/18/2022";
    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(inputElement.value).toBe(newValue);
  });
});
