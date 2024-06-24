import { SingleValueTextInputControl } from '../src/controls/SingleValueTextInputControl';
import { render, screen } from '@testing-library/react';
// let JVTextField, SingleValueTextInputControl;
import '@testing-library/jest-dom';

describe("SingleValueTextInputControls tests", () => {
  // beforeAll(async () => {
  //   const module = await import('../src/controls/SingleValueTextInputControl');
  //   // const module = await import('@jaspersoft/jv-ui-components');
  //   // JVTextField = module.JVTextField;
  //   SingleValueTextInputControl = module.SingleValueTextInputControl;
  // });

  test('SingleValueTextInputControls is imported correctly', () => {
    render(<SingleValueTextInputControl />);
    const buttonElement = screen.getByRole('textbox');
    expect(buttonElement).toBeInTheDocument();
    // expect(SingleValueTextInputControl).toBeDefined();
  });
  // it("should run tests", () => {
  //   expect(1).toBe(1);
  // });
  // it("compares snapshot", () => {
  //   render(<SingleValueTextInputControl />);
  //   const textElement = screen.getByRole('textbox');
  //   expect(textElement).toBeInTheDocument();
  // });

});