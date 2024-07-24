import { SizeToClass } from "@jaspersoft/jv-ui-components/material-ui/types/InputTypes";
import { fireEvent, render, screen } from "@testing-library/react";
import { JSX } from "react";
import { DateTimePickerTextFieldInputControl } from "../src/controls/DateTimePickerTextFieldInputControl";
import "@testing-library/jest-dom";

const LARGE_CSS_CLASS = SizeToClass.large;
const requiredProps = {
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
};

const getDateTimePickerTextFieldIC = (options?: object): JSX.Element => {
  return (
    <DateTimePickerTextFieldInputControl
      {...{ ...requiredProps, ...options }}
    />
  );
};

describe("DateTimePickerTextFieldInputControl tests", () => {
  test("DateTimePickerTextFieldInputControl is rendered correctly", () => {
    const { container } = render(getDateTimePickerTextFieldIC());
    const buttonElement = container.querySelector("input");
    expect(buttonElement).toBeInTheDocument();
  });

  // Test for label prop
  test("displays the label when provided", () => {
    const testLabel = "Test Label";
    render(getDateTimePickerTextFieldIC({ label: testLabel }));
    const labelElement = screen.queryByLabelText(testLabel);
    expect(labelElement).toBeInTheDocument();
  });

  // Test for value prop
  test("uses value as the initial input value", () => {
    const defaultValue = "2014-09-12T15:46:18.000";
    const { container } = render(
      getDateTimePickerTextFieldIC({ state: { value: defaultValue } }),
    );

    const inputElement = container.querySelector("input") as HTMLInputElement;
    expect(inputElement.value).toBe(defaultValue);
  });

  // Test for onChange event
  test("updates value on change", () => {
    const { container } = render(getDateTimePickerTextFieldIC({}));
    const inputElement = container.querySelector("input") as HTMLInputElement;
    const newValue = "2024-07-15T15:46:18.000";
    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(inputElement.value).toBe(newValue);
  });

  // Test for variant prop
  test("changes style based on variant prop", () => {
    const { container } = render(
      getDateTimePickerTextFieldIC({ variant: "outlined" }),
    );
    let inputElement = container.querySelector("input") as HTMLInputElement;
    expect(inputElement).toHaveClass("MuiOutlinedInput-input");
  });

  // test for default size.
  test("check the default size is large if it is not provided", () => {
    // Render the component
    const { container } = render(getDateTimePickerTextFieldIC({}));

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
      getDateTimePickerTextFieldIC({ className: cssClass }),
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
    const { container } = render(
      getDateTimePickerTextFieldIC({ readOnly: true }),
    );
    let inputElement = container.querySelector("input") as HTMLInputElement;

    // Assert that the element is found and has the expected attribute
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("readonly");
  });

  // test visible prop
  test("check the component is visible or not", () => {
    const HIDDEN_CLASS_NAME = "jv-uVisibility-hide";
    // Render the component
    const { container } = render(
      getDateTimePickerTextFieldIC({ visible: false }),
    );
    // Use querySelector to get the first div with the class "jv-mInputLarge"
    const divElement = container.querySelector(`div.${HIDDEN_CLASS_NAME}`);

    // Assert that the element is found and has the expected class
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass(HIDDEN_CLASS_NAME);
  });

  // Test for mandatory field
  test("verify the field shows error when mandatory prop is set", () => {
    const CSS_ERROR_CLASS = "jv-uMandatory";
    const { container } = render(
      getDateTimePickerTextFieldIC({
        mandatory: true,
        validationRules: [
          {
            mandatoryValidationRule: {
              errorMessage: "This field is mandatory so you must enter data.",
            },
          },
          {
            dateTimeFormatValidationRule: {
              errorMessage: "Specify a valid date/time value.",
              format: "yyyy-MM-dd'T'HH:mm:ss",
            },
          },
        ],
        state: {
          uri: "/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_timestamp_1",
          id: "column_timestamp_1",
          value: "",
          error: "This field is mandatory so you must enter data.",
        },
        dataType: {
          type: "datetime",
          maxValue: "2024-07-25T06:17:36",
          strictMax: true,
          minValue: "2024-07-17T02:07:17",
          strictMin: true,
        },
      }),
    );
    let wrapperDiv = container.querySelector(
      `div.${CSS_ERROR_CLASS}`,
    ) as HTMLInputElement;
    expect(wrapperDiv).toBeInTheDocument();
  });
});
