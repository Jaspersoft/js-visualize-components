import { SizeToClass } from '@jaspersoft/jv-ui-components/material-ui/types/InputTypes';
import { fireEvent, render, screen } from '@testing-library/react';
import { SingleValueTextInputControl } from '../src/controls/SingleValueTextInputControl';
import '@testing-library/jest-dom';
import * as React from 'react'

const LARGE_CSS_CLASS = SizeToClass.large;
const requiredProps = {
  id: '0',
  label: 'test',
  mandatory: false,
  readOnly: false,
  visible: true,
  type: 'singleValueText',
};

const getTextIC = (options?: object): JSX.Element => {
  return (
    <SingleValueTextInputControl {...{ ...requiredProps, ...options }} />
  );
}

describe('SingleValueTextInputControls tests', () => {

  test('SingleValueTextInputControls is rendered correctly', () => {
    render(getTextIC());
    const buttonElement = screen.getByRole('textbox');
    expect(buttonElement).toBeInTheDocument();
  });

  // Test for label prop
  test('displays the label when provided', () => {
    const testLabel = 'Test Label';
    render(getTextIC({ label: testLabel }));
    const labelElement = screen.queryByLabelText(testLabel);
    expect(labelElement).toBeInTheDocument();
  });

  // Test for value prop
  test('uses value as the initial input value', () => {
    const defaultValue = 'Default Value';
    render(getTextIC({ defaultValue: defaultValue }));
    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    expect(inputElement.value).toBe(defaultValue);
  });

  // Test for onChange event
  test('updates value on change', () => {
    const { getByRole } = render(getTextIC({}));
    const inputElement = getByRole('textbox') as HTMLInputElement;
    const newValue = 'New Value';
    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(inputElement.value).toBe(newValue);
  });

  // Test for variant prop
  test('changes style based on variant prop', () => {
    const { rerender } = render(getTextIC({ variant: "outlined" }));
    let inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveClass('MuiOutlinedInput-input');

    rerender(getTextIC({ variant: "filled" }));
    inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveClass('MuiFilledInput-input');
  });

  // test for default size.
  test('check the default size is large if it is not provided', () => {
    // Render the component
    const { container } = render(getTextIC({}));

    // Use querySelector to get the first div with the class "jv-mInputLarge"
    const divElement = container.querySelector(`div.${LARGE_CSS_CLASS}`);

    // Assert that the element is found and has the expected class
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass(LARGE_CSS_CLASS);
  });

  // test className prop
  test('check wrapping CSS class', () => {
    const cssClass = 'ANY_CLASS';
    // Render the component
    const { container } = render(getTextIC({ className: cssClass }));

    // Use querySelector to get the first div with the class "jv-mInputLarge"
    const divElement = container.querySelector(`div.${cssClass}`);

    // Assert that the element is found and has the expected class
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass(cssClass);
  });

  // test readOnly prop
  test('check the component is read-only', () => {
    // Render the component
    const { rerender } = render(getTextIC({ readOnly: true }));
    let inputElement = screen.getByRole('textbox') as HTMLInputElement;

    // Assert that the element is found and has the expected attribute
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('readonly');

    rerender(getTextIC({}));
    inputElement = screen.getByRole('textbox') as HTMLInputElement;
    expect(inputElement).not.toHaveAttribute('readonly');
  });

  // test visible prop
  test('check the component is visible or not', () => {
    const HIDDEN_CLASS_NAME = 'jv-uVisibility-hide';
    // Render the component
    const { container } = render(getTextIC({ visible: false }));
    // Use querySelector to get the first div with the class "jv-mInputLarge"
    const divElement = container.querySelector(`div.${HIDDEN_CLASS_NAME}`);

    // Assert that the element is found and has the expected class
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass(HIDDEN_CLASS_NAME);
  });

  // Test for mandatory field
  test('verify the field shows error when mandatory prop is set', () => {
    const CSS_ERROR_CLASS = 'Mui-error';
    const { container } = render(getTextIC({ mandatory: true }));
    let wrapperDiv = container.querySelector(`div.${CSS_ERROR_CLASS}`) as HTMLInputElement;
    expect(wrapperDiv).toBeInTheDocument();
    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    const newValue = 'New Value';
    fireEvent.change(inputElement, { target: { value: newValue } });
    wrapperDiv = container.querySelector(`div.${CSS_ERROR_CLASS}`) as HTMLInputElement;
    expect(wrapperDiv).not.toBeInTheDocument();
  });
});
