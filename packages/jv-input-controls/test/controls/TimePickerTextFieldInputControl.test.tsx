/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { SizeToClass } from "@jaspersoft/jv-ui-components/material-ui/types/InputTypes";
import { fireEvent, render, screen } from "@testing-library/react";
import { JSX } from "react";
import {
  TimePickerTextFieldInputControl,
  TimeTextFieldICProps,
} from "../../src/controls/TimePickerTextFieldInputControl";
import "@testing-library/jest-dom";

const LARGE_CSS_CLASS = SizeToClass.large;
const requiredProps: TimeTextFieldICProps = {
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

const getTimePickerTextFieldIC = (options?: object): JSX.Element => {
  return (
    <TimePickerTextFieldInputControl {...{ ...requiredProps, ...options }} />
  );
};

describe("TimePickerTextFieldInputControl tests", () => {
  test("TimePickerTextFieldInputControl is rendered correctly", () => {
    const { container } = render(getTimePickerTextFieldIC());
    const buttonElement = container.querySelector("input");
    expect(buttonElement).toBeInTheDocument();
  });

  // Test for label prop
  test("displays the label when provided", () => {
    const testLabel = "Test Label";
    render(getTimePickerTextFieldIC({ label: testLabel }));
    const labelElement = screen.queryByLabelText(testLabel);
    expect(labelElement).toBeInTheDocument();
  });

  // Test for value prop
  test("uses value as the initial input value", () => {
    const defaultValue = "23:44:21";
    const { container } = render(
      getTimePickerTextFieldIC({ state: { value: defaultValue } }),
    );

    const inputElement = container.querySelector("input") as HTMLInputElement;
    expect(inputElement.value).toBe(defaultValue);
  });

  // Test for onChange event
  test("updates value on change", () => {
    const { container } = render(getTimePickerTextFieldIC({}));
    const inputElement = container.querySelector("input") as HTMLInputElement;
    const newValue = "11:22:16";
    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(inputElement.value).toBe(newValue);
  });

  // Test for variant prop
  test("changes style based on variant prop", () => {
    const { container } = render(
      getTimePickerTextFieldIC({ variant: "outlined" }),
    );
    let inputElement = container.querySelector("input") as HTMLInputElement;
    expect(inputElement).toHaveClass("jv-MuiOutlinedInput-input");
  });

  // test for default size.
  test("check the default size is large if it is not provided", () => {
    // Render the component
    const { container } = render(getTimePickerTextFieldIC({}));

    // Use querySelector to get the first div with the class "jv-mInputLarge"
    const divElement = container.querySelector(`div.${LARGE_CSS_CLASS}`);

    // Assert that the element is found and has the expected class
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass(LARGE_CSS_CLASS);
  });

  // test className prop
  test("check wrapping CSS class", () => {
    const cssClass = "jv-mInput";
    // Render the component
    const { container } = render(
      getTimePickerTextFieldIC({ className: cssClass }),
    );

    // Use querySelector to get the first div with the class "jv-mInputLarge"
    const inputElement = container.querySelector(
      `.${cssClass}`,
    ) as HTMLInputElement;
    // Assert that the element is found and has the expected class
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass(cssClass);
  });

  // test readOnly prop
  test("check the component is read-only", () => {
    // Render the component
    const { container } = render(getTimePickerTextFieldIC({ readOnly: true }));
    let inputElement = container.querySelector("input") as HTMLInputElement;

    // Assert that the element is found and has the expected attribute
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("readonly");
  });

  // test visible prop
  test("check the component is visible or not", () => {
    const HIDDEN_CLASS_NAME = "jv-uVisibility-hide";
    // Render the component
    const { container } = render(getTimePickerTextFieldIC({ visible: false }));
    // Use querySelector to get the first div with the class "jv-mInputLarge"
    const divElement = container.querySelector(`div.${HIDDEN_CLASS_NAME}`);

    // Assert that the element is found and has the expected class
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass(HIDDEN_CLASS_NAME);
  });

  // Test for mandatory field
  test("verify the field shows error when mandatory prop is set", () => {
    const CSS_ERROR_CLASS = "jv-mInputRequired";
    const { container } = render(
      getTimePickerTextFieldIC({
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
        state: {
          uri: "/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_time_1",
          id: "column_time_1",
          value: "",
          error: "This field is mandatory so you must enter data.",
        },
        dataType: {
          type: "time",
          maxValue: "16:59:23",
          strictMax: true,
          minValue: "04:20:44",
          strictMin: true,
        },
      }),
    );
    let wrapperDiv = container.querySelector(
      `div.${CSS_ERROR_CLASS}`,
    ) as HTMLInputElement;
    expect(wrapperDiv).toBeInTheDocument();
  });

  // New test scenarios
  test("calls handleIcChange with correct parameters on value change", () => {
    const handleIcChange = jest.fn();
    render(
      getTimePickerTextFieldIC({
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
      getTimePickerTextFieldIC({
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
    fireEvent.change(inputElement, { target: { value: "19:25:36" } });
    const errorElement = screen.getByText(
      "Verify the time is before 19:15:00.",
    );
    expect(errorElement).toBeVisible();
  });
});
