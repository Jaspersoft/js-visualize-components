import { JVDatePickerProvider } from "@jaspersoft/jv-ui-components";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as React from "react";
import { DateTimePickerInputControl } from "../../src/controls/DateTimePickerInputControl";

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
});
