import { render, screen } from '@testing-library/react';
import { JVButton as JRSButton } from 'jrs-ui-components/material-ui/Button/Button';
import '@testing-library/jest-dom';

describe("JVButton tests", () => {
    it("should render JVButton", () => {
        render(<JRSButton />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });
});