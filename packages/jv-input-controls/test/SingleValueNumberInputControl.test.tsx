import { SizeToClass } from "@jaspersoft/jv-ui-components/material-ui/types/InputTypes";
import { fireEvent, render, screen } from "@testing-library/react";
import { JSX } from "react";
import { SingleValueNumberInputControl } from "../src/controls/SingleValueNumberInputControl";
import "@testing-library/jest-dom";

const LARGE_CSS_CLASS = SizeToClass.large;
const requiredProps = {
  id: "column_float_1",
  label: "column_float",
  mandatory: false,
  readOnly: false,
  visible: true,
  type: "singleValueNumber",
  state: {
    uri: "/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_float_1",
    id: "column_float_1",
    value: "0.33",
  },
};

const getNumberIC = (options?: object): JSX.Element => {
  return (
    <SingleValueNumberInputControl {...{ ...requiredProps, ...options }} />
  );
};

describe("SingleValueNumberInputControls tests", () => {
  test("SingleValueNumberInputControls is rendered correctly", () => {
    render(getNumberIC());
    const buttonElement = screen.getByRole("textbox");
    expect(buttonElement).toBeInTheDocument();
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
    const defaultValue = "1,786";
    render(
      getNumberIC({
        state: {
          value: defaultValue,
        },
      }),
    );
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement.value).toBe(defaultValue);
  });

  test("a string is an invalid value for this input", () => {
    const defaultValue = "this is a string";
    render(
      getNumberIC({
        state: {
          value: defaultValue,
        },
      }),
    );
    const element = screen.getByText("Specify a valid value for type number.");
    expect(element).toBeVisible();
  });

  test("a combination of numbers and strings is an invalid value", () => {
    const defaultValue = "1.23e-10";
    render(
      getNumberIC({
        state: {
          value: defaultValue,
        },
      }),
    );
    const element = screen.getByText("Specify a valid value for type number.");
    expect(element).toBeVisible();
  });

  // Test for onChange event
  test("updates value on change", () => {
    const { getByRole } = render(getNumberIC({}));
    const inputElement = getByRole("textbox") as HTMLInputElement;
    const newValue = "3,926";
    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(inputElement.value).toBe(newValue);
  });

  // Test for variant prop
  test("changes style based on variant prop", () => {
    const { rerender } = render(getNumberIC({ variant: "outlined" }));
    let inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("MuiOutlinedInput-input");

    rerender(getNumberIC({ variant: "filled" }));
    inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("MuiFilledInput-input");
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
  test("verify the field shows error when mandatory prop is set", () => {
    const CSS_ERROR_CLASS = "jv-uMandatory";
    const { container } = render(getNumberIC({ mandatory: true }));
    let wrapperDiv = container.querySelector(
      `div.${CSS_ERROR_CLASS}`,
    ) as HTMLInputElement;
    expect(wrapperDiv).toBeInTheDocument();
  });
});
