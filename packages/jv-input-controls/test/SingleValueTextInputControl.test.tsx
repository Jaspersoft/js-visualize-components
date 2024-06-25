import { render, screen } from '@testing-library/react';
import { SingleValueTextInputControl } from '../src/controls/SingleValueTextInputControl';
import '@testing-library/jest-dom';

describe("SingleValueTextInputControls tests", () => {
  test('SingleValueTextInputControls is imported correctly', () => {
    const theEl = <SingleValueTextInputControl />;
    render(theEl);
    const buttonElement = screen.getByRole('textbox');
    expect(buttonElement).toBeInTheDocument();
  });
});