/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { JSX } from "react";
import {
  SingleValueNumberInputControl,
  NumberICProps,
} from "../../src/controls/SingleValueNumberInputControl";

const LARGE_CSS_CLASS = "jv-mInputLarge";
const requiredProps: NumberICProps = {
  id: "column_float_1",
  label: "column_float",
  mandatory: false,
  readOnly: false,
  visible: true,
  type: "singleValueNumber",
  state: {
    uri: "/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_float_1",
    id: "column_float_1",
    value: "1234.56",
  },
  validationRules: [],
  handleIcChange: jest.fn(),
};

const getNumberIC = (options?: any): JSX.Element => {
  const mergedProps = { ...requiredProps, ...options };
  return <SingleValueNumberInputControl {...mergedProps} />;
};

describe("SingleValueNumberInputControl tests", () => {
  test("SingleValueNumberInputControl is rendered correctly", () => {
    render(getNumberIC());
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  // Test for label prop
  test("displays the label when provided", () => {
    const testLabel = "Test Label";
    render(getNumberIC({ label: testLabel }));
    const labelElement = screen.queryByLabelText(testLabel);
    expect(labelElement).toBeInTheDocument();
  });

  // Test for value prop
  test("uses value as the initial input value", () => {
    const defaultValue = "1234.56";
    render(
      getNumberIC({ state: { ...requiredProps.state, value: defaultValue } }),
    );
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement.value).toBe(defaultValue);
  });

  test("a string is an invalid value for this input", async () => {
    const defaultValue = "this is a string";
    const { getByRole } = render(getNumberIC());

    const inputElement = getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: defaultValue } });

    await waitFor(() => {
      const element = screen.getByText(
        "Specify a valid value for type number.",
      );
      expect(element).toBeVisible();
    });
  });

  test("a combination of numbers and strings is an invalid value", async () => {
    const defaultValue = "1.23e-10";
    const { getByRole } = render(
      getNumberIC({
        state: {
          value: "initial value",
        },
      }),
    );
    const inputElement = getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: defaultValue } });

    await waitFor(() => {
      const element = screen.getByText(
        "Specify a valid value for type number.",
      );
      expect(element).toBeVisible();
    });
  });

  // Test for onChange event
  test("updates value on change", () => {
    const { getByRole } = render(getNumberIC({}));
    const inputElement = getByRole("textbox") as HTMLInputElement;
    const newValue = "3926";
    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(inputElement.value).toBe(newValue);
  });

  // Test for variant prop
  test("changes style based on variant prop", () => {
    const { rerender } = render(getNumberIC({ variant: "outlined" }));
    let inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("jv-MuiOutlinedInput-input");

    rerender(getNumberIC({ variant: "filled" }));
    inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("jv-MuiFilledInput-input");
  });

  // test for default size.
  test("check the default size is large if it is not provided", () => {
    // Render the component
    const { container } = render(getNumberIC({}));

    // Use querySelector to get the first div with the class "jv-mInputLarge"
    const divElement = container.querySelector(`div.${LARGE_CSS_CLASS}`);

    // Assert that the element is found and has the expected class
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass(LARGE_CSS_CLASS);
  });

  // test className prop
  test("check wrapping CSS class", () => {
    const cssClass = "ANY_CLASS";
    // Render the component
    const { container } = render(getNumberIC({ className: cssClass }));

    // Use querySelector to get the first div with the class "jv-mInputLarge"
    const divElement = container.querySelector(`div.${cssClass}`);

    // Assert that the element is found and has the expected class
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass(cssClass);
  });

  // test readOnly prop
  test("check the component is read-only", () => {
    // Render the component
    const { rerender } = render(getNumberIC({ readOnly: true }));
    let inputElement = screen.getByRole("textbox") as HTMLInputElement;

    // Assert that the element is found and has the expected attribute
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("readonly");

    rerender(getNumberIC({}));
    inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement).not.toHaveAttribute("readonly");
  });

  // test visible prop
  test("check the component is visible or not", () => {
    const HIDDEN_CLASS_NAME = "jv-uVisibility-hide";
    // Render the component
    const { container } = render(getNumberIC({ visible: false }));
    // Use querySelector to get the first div with the class "jv-mInputLarge"
    const divElement = container.querySelector(`div.${HIDDEN_CLASS_NAME}`);

    // Assert that the element is found and has the expected class
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass(HIDDEN_CLASS_NAME);
  });

  // Test for mandatory field
  test("verify the field shows error when mandatory prop is set", async () => {
    const { getByRole } = render(
      getNumberIC({
        mandatory: true,
        validationRules: [
          {
            mandatoryValidationRule: {
              errorMessage: "This field is mandatory so you must enter data.",
            },
          },
        ],
        dataType: {
          type: "number",
          maxValue: "10",
          strictMax: true,
          minValue: "5",
          strictMin: true,
        },
        state: {
          uri: "/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_float_1",
          id: "column_float_1",
          value: "something",
          error: "This field is mandatory so you must enter data.",
        },
      }),
    );

    const inputElement = getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "" } });

    await waitFor(() => {
      const CSS_ERROR_CLASS = "jv-mInputRequired";
      let wrapperDiv = document.querySelector(
        `div.${CSS_ERROR_CLASS}`,
      ) as HTMLInputElement;
      expect(wrapperDiv).toBeInTheDocument();
      const muiError = document.querySelector(".Mui-error");
      expect(muiError).toBeInTheDocument();
      const errorMsg = document.querySelector(
        ".jv-MuiFormHelperText-root.jv-mInput-error",
      );
      expect(errorMsg).toBeInTheDocument();
    });
  });

  test("verify the field shows error when value is not under the range of valid values", async () => {
    const { getByRole } = render(
      getNumberIC({
        mandatory: true,
        validationRules: [
          {
            mandatoryValidationRule: {
              errorMessage: "This field is mandatory so you must enter data.",
            },
          },
        ],
        dataType: {
          type: "number",
          maxValue: "10",
          strictMax: true,
          minValue: "5",
          strictMin: true,
        },
        state: {
          uri: "/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_float_1",
          id: "column_float_1",
          value: "",
          error: "This field is mandatory so you must enter data.",
        },
      }),
    );

    const inputElement = getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "3" } });

    await waitFor(() => {
      const muiError = document.querySelector(".Mui-error");
      expect(muiError).toBeInTheDocument();
      const errorMsg = document.querySelector(
        ".jv-MuiFormHelperText-root.jv-mInput-error",
      );
      expect(errorMsg).toBeInTheDocument();
    });
  });

  test("verify the field does not show error when value is under the range of valid values", async () => {
    const { getByRole } = render(
      getNumberIC({
        mandatory: true,
        validationRules: [
          {
            mandatoryValidationRule: {
              errorMessage: "This field is mandatory so you must enter data.",
            },
          },
        ],
        dataType: {
          type: "number",
          maxValue: "10",
          strictMax: true,
          minValue: "5",
          strictMin: true,
        },
        state: {
          uri: "/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_float_1",
          id: "column_float_1",
          value: "",
          error: "This field is mandatory so you must enter data.",
        },
      }),
    );

    const inputElement = getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "7" } });

    await waitFor(() => {
      const muiError = document.querySelector(".Mui-error");
      expect(muiError).not.toBeInTheDocument();
      const errorMsg = document.querySelector(
        ".MuiFormHelperText-root.jv-mInput-error",
      );
      expect(errorMsg).not.toBeInTheDocument();
    });
  });

  // New test scenarios
  test("calls handleIcChange with correct parameters on value change", () => {
    const handleIcChange = jest.fn();
    render(
      getNumberIC({
        handleIcChange,
        state: {
          value: "1234.56",
        },
      }),
    );
    const inputElement = screen.queryByLabelText(
      requiredProps.label,
    ) as HTMLInputElement;
    const newValue = "5678.90";
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

  test("displays error message when validation fails", async () => {
    render(
      getNumberIC({
        validationRules: [
          {
            mandatoryValidationRule: {
              errorMessage: "This field is mandatory so you must enter data.",
            },
          },
        ],
        dataType: {
          type: "number",
          maxValue: "10",
          strictMax: true,
          minValue: "5",
          strictMin: true,
        },
        state: {
          value: "6",
        },
      }),
    );
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "500" } });

    await waitFor(() => {
      const errorElement = screen.getByText(
        "Verify the number is lower than 10.",
      );
      expect(errorElement).toBeVisible();
    });
  });
});
