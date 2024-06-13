import { render, screen } from '@testing-library/react';
import { JVButton } from 'jrs-ui-components/material-ui/Button/Button';
import '@testing-library/jest-dom';

describe("JVButton tests", () => {
    it("should render JVButton", () => {
        render(<JVButton />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });
});