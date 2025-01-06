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
  TimePickerInputControl,
  TimeICProps,
} from "../../src/controls/TimePickerInputControl";

const requiredProps: TimeICProps = {
  id: "column_time_1",
  label: "column_time",
  mandatory: false,
  readOnly: false,
  visible: true,
  type: "singleValueTime",
  state: {
    uri: "/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_time_1",
    id: "column_time_1",
    value: "15:46:18",
  },
  validationRules: [],
  handleIcChange: jest.fn(),
};

const getTimePickerIC = (options?: any): JSX.Element => {
  const mergedProps = { ...requiredProps, ...options };
  return (
    <JVDatePickerProvider>
      <TimePickerInputControl {...mergedProps} />
    </JVDatePickerProvider>
  );
};

describe("TimePickerInputControl tests", () => {
  test("TimePickerInputControl is rendered correctly", () => {
    render(
      getTimePickerIC({ state: { ...requiredProps.state, value: "10:46:18" } }),
    );
    const timePickerElement = screen.getByRole("textbox");
    expect(timePickerElement).toBeInTheDocument();
  });

  test("displays the label when provided", () => {
    const testLabel = "Test Label";
    render(getTimePickerIC({ label: testLabel }));
    const labelElement = screen.queryByLabelText(testLabel);
    expect(labelElement).toBeInTheDocument();
  });

  test("value is converted to AM/PM format", () => {
    render(
      getTimePickerIC({
        state: {
          value: "15:46:18",
        },
        validationRules: [
          {
            dateTimeFormatValidationRule: {
              errorMessage: "Specify a valid date/time value.",
              format: "hh:mm:ssA",
            },
          },
        ],
      }),
    );
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement.value).toBe("03:46:18PM");
  });

  test("uses value as the initial input value", () => {
    const defaultValue = "15:46:18";
    render(getTimePickerIC({ state: { value: defaultValue } }));
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement.value).toBe(defaultValue);
  });

  test("updates value on change", () => {
    render(getTimePickerIC({ state: { value: "15:46:18" } }));
    const timePicker = screen.getByRole("textbox") as HTMLInputElement;
    const newValue = "16:46:18";
    fireEvent.change(timePicker, { target: { value: newValue } });
    expect(screen.getByDisplayValue(newValue)).toBeVisible();
  });

  test("check the component is read-only", () => {
    // Render the component
    const { rerender } = render(getTimePickerIC({ readOnly: true }));
    let inputElement = screen.getByRole("textbox") as HTMLInputElement;

    // Assert that the element is found and has the expected attribute
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("readonly");

    rerender(getTimePickerIC({}));
    inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement).not.toHaveAttribute("readonly");
  });

  test("check the component is visible or not", () => {
    const HIDDEN_CLASS_NAME = "jv-uVisibility-hide";
    // Render the component
    const { container } = render(getTimePickerIC({ visible: false }));
    // Use querySelector to get the first div with the class "jv-mInputLarge"
    const divElement = container.querySelector(`div.${HIDDEN_CLASS_NAME}`);

    // Assert that the element is found and has the expected class
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass(HIDDEN_CLASS_NAME);
  });

  test("check the component is disabled", () => {
    // Render the component
    const { rerender } = render(getTimePickerIC({ disabled: true }));
    let inputElement = screen.getByRole("textbox") as HTMLInputElement;

    // Assert that the element is found and has the expected attribute
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("disabled");

    rerender(getTimePickerIC({}));
    inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement).not.toHaveAttribute("disabled");
  });

  // New test scenarios
  test("calls handleIcChange with correct parameters on value change", () => {
    const handleIcChange = jest.fn();
    render(
      getTimePickerIC({
        handleIcChange,
        state: {
          value: "15:46:18",
        },
      }),
    );
    const inputElement = screen.queryByLabelText(
      requiredProps.label,
    ) as HTMLInputElement;
    const newValue = "16:46:18";
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
      getTimePickerIC({
        mandatory: true,
        validationRules: [
          {
            mandatoryValidationRule: {
              errorMessage: "This field is mandatory so you must enter data.",
            },
          },
          {
            dateTimeFormatValidationRule: {
              errorMessage: "Specify a valid time value.",
              format: "HH:mm:ss",
            },
          },
        ],
        dataType: {
          type: "time",
          maxValue: "19:15:00",
          strictMax: true,
          minValue: "07:00:00",
          strictMin: true,
        },
        state: {
          ...requiredProps.state,
          value: "15:46:18",
        },
      }),
    );
    const inputElement = screen.queryByLabelText(
      requiredProps.label,
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "06:30:00" } });
    const errorElement = screen.getByText("Verify the time is after 07:00:00.");
    expect(errorElement).toBeVisible();
  });
});
