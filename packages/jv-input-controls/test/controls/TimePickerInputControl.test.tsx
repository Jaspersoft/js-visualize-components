import { JVDatePickerProvider } from "@jaspersoft/jv-ui-components";
import { render, screen } from "@testing-library/react";
import { JSX } from "react";
import { TimePickerInputControl } from "../../src/controls/TimePickerInputControl";
import "@testing-library/jest-dom";

const requiredProps = {
  id: "column_time_1",
  label: "column_time",
  mandatory: false,
  readOnly: false,
  visible: true,
  type: "singleValueTime",
  state: {
    uri: "/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_time_1",
    id: "column_time_1",
    value: "23:44:21",
  },
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
    render(getTimePickerIC({ state: { value: "15:46:18" } }));
    const datePickerElement = screen.getByRole("textbox");
    expect(datePickerElement).toBeInTheDocument();
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
});
