import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo component', () => {
    it('renders inner elements correctly', () => {
        render(<Logo />);

        const letterElements = screen.getAllByText(/V/);
        expect(letterElements).toHaveLength(4);
    });
});