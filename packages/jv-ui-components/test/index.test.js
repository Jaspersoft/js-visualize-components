import { render, screen } from '@testing-library/react';
import { Button } from '@jaspersoft/jv-ui-components/material-ui/Button/Button';
import '@testing-library/jest-dom';

describe("Button tests", () => {
    it("should render Button", () => {
        render(<Button />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });
});
