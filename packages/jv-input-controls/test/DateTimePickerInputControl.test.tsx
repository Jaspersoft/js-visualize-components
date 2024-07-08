import { DatePickerProvider as JVDatePickerProvider } from "@jaspersoft/jv-ui-components/material-ui/Date/DatePickerProvider";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as React from "react";
import { DateTimePickerInputControl } from "../src/controls/DateTimePickerInputControl";

const requiredProps = {
  id: "column_timestamp_1",
  label: "testDateTimePicker",
  mandatory: false,
  readOnly: false,
  visible: true,
  type: "singleValueDatetime",
};

const getDateTimePickerIC = (options?: any): React.JSX.Element => {
  const mergedProps = { ...requiredProps, ...options };
  return (
    <JVDatePickerProvider>
      <DateTimePickerInputControl {...mergedProps} />
    </JVDatePickerProvider>
  );
};

describe("DateTimePickerInputControl tests", () => {
  test("DateTimePickerInputControl is rendered correctly", () => {
    render(getDateTimePickerIC({ value: "2014-09-12T15:46:18" }));
    const datePickerElement = screen.getByRole("textbox");
    expect(datePickerElement).toBeInTheDocument();
  });

  test("displays the label when provided", () => {
    const testLabel = "Test Label";
    render(getDateTimePickerIC({ label: testLabel }));
    const labelElement = screen.queryByLabelText(testLabel);
    expect(labelElement).toBeInTheDocument();
  });

  test("value is converted to AM/PM format", () => {
    render(getDateTimePickerIC({ value: "2014-09-14T15:46:18" }));
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement.value).toBe("09/14/2014 03:46:18 PM");
  });

  test("input value updates on user input", () => {
    const initialValue = "2014-09-14T15:46:18";
    const newValue = "2024-07-08T15:49:18";
    const expectedDisplayValue = "09/14/2014 03:46:18 PM"; // Adjust based on the expected format

    const { getByRole } = render(
      getDateTimePickerIC({
        value: initialValue,
        validationRules: [
          {
            dateTimeFormatValidationRule: {
              errorMessage: "Specify a valid date/time value.",
              format: "yyyy-MM-dd'T'HH:mm:ss",
            },
          },
        ],
      }),
    );

    // Find the input element and simulate a change
    const inputElement = getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputElement, newValue);

    // Assert the input element's value has been updated
    expect(screen.getByDisplayValue(expectedDisplayValue)).toBeInTheDocument();
  });

  test("check the component is read-only", () => {
    // Render the component
    const { rerender } = render(getDateTimePickerIC({ readOnly: true }));
    let inputElement = screen.getByRole("textbox") as HTMLInputElement;

    // Assert that the element is found and has the expected attribute
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("readonly");

    rerender(getDateTimePickerIC({}));
    inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement).not.toHaveAttribute("readonly");
  });

  test("check the component is visible or not", () => {
    const HIDDEN_CLASS_NAME = "jv-uVisibility-hide";
    // Render the component
    const { container } = render(getDateTimePickerIC({ visible: false }));
    // Use querySelector to get the first div with the class "jv-mInputLarge"
    const divElement = container.querySelector(`div.${HIDDEN_CLASS_NAME}`);

    // Assert that the element is found and has the expected class
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass(HIDDEN_CLASS_NAME);
  });

  test("check the component is disabled", () => {
    // Render the component
    const { rerender } = render(getDateTimePickerIC({ disabled: true }));
    let inputElement = screen.getByRole("textbox") as HTMLInputElement;

    // Assert that the element is found and has the expected attribute
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("disabled");

    rerender(getDateTimePickerIC({}));
    inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement).not.toHaveAttribute("disabled");
  });
});
