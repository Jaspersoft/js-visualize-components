/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { JVDatePickerProvider } from "@jaspersoft/jv-ui-components";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { JSX } from "react";
import {
  DateTimeICProps,
  DateTimePickerInputControl,
} from "../../src/controls/DateTimePickerInputControl";

const requiredProps: DateTimeICProps = {
  id: "column_timestamp_1",
  label: "column_timestamp",
  mandatory: false,
  readOnly: false,
  visible: true,
  type: "singleValueDatetime",
  state: {
    uri: "/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_timestamp_1",
    id: "column_timestamp_1",
    value: "2014-09-12T15:46:18",
  },
  validationRules: [],
  handleIcChange: jest.fn(),
};

const getDateTimePickerIC = (options?: any): JSX.Element => {
  const mergedProps = { ...requiredProps, ...options };
  return (
    <JVDatePickerProvider>
      <DateTimePickerInputControl {...mergedProps} />
    </JVDatePickerProvider>
  );
};

describe("DateTimePickerInputControl tests", () => {
  test("DateTimePickerInputControl is rendered correctly", () => {
    render(getDateTimePickerIC({ state: { value: "2014-09-12T15:46:18" } }));
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
    render(
      getDateTimePickerIC({
        state: {
          value: "2014-09-14T15:46:18",
        },
        validationRules: [
          {
            dateTimeFormatValidationRule: {
              errorMessage: "Specify a valid date/time value.",
              format: "MM/dd/yyyy hh:mm:ssA",
            },
          },
        ],
      }),
    );
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement.value).toBe("09/14/2014 03:46:18 PM");
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

  // New test scenarios
  test("calls handleIcChange with correct parameters on value change", () => {
    const handleIcChange = jest.fn();
    render(
      getDateTimePickerIC({
        handleIcChange,
        state: {
          value: "2014-09-12T15:46:18",
        },
      }),
    );
    const inputElement = screen.queryByLabelText(
      requiredProps.label,
    ) as HTMLInputElement;
    const newValue = "2014-09-13T15:46:18";
    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(handleIcChange).toHaveBeenCalledWith(
      expect.objectContaining({
        id: requiredProps.id,
        label: requiredProps.label,
        mandatory: requiredProps.mandatory,
        readOnly: requiredProps.readOnly,
        visible: requiredProps.visible,
        type: requiredProps.type,
      }),
      { [requiredProps.id]: "" },
    );
  });

  test("displays error message when validation fails", () => {
    render(
      getDateTimePickerIC({
        validationRules: [
          {
            dateTimeFormatValidationRule: {
              errorMessage: "Specify a valid date/time value.",
              format: "yyyy-MM-dd'T'HH:mm:ss",
            },
          },
        ],
        dataType: {
          type: "datetime",
          maxValue: "2024-12-31T00:00:00",
          strictMax: true,
          strictMin: false,
        },
        state: {
          ...requiredProps.state,
          value: "2014-09-12T15:46:18",
        },
      }),
    );
    const inputElement = screen.queryByLabelText(
      requiredProps.label,
    ) as HTMLInputElement;
    fireEvent.change(inputElement, {
      target: { value: "12/31/2024 12:00:00 PM" },
    });
    const errorElement = screen.getByText(
      "Verify the date is before 2024-12-31T00:00:00.",
    );
    expect(errorElement).toBeVisible();
  });
});
