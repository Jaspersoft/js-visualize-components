import { render, screen } from '@testing-library/react';
import { Button as JRSButton } from 'jrs-ui-components/material-ui/Button/Button';
import '@testing-library/jest-dom';

describe("JRSButton tests", () => {
    it("should render JRSButton", () => {
        render(<JRSButton />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });
});