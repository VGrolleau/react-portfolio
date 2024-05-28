import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader component', () => {
    it('renders inner elements correctly', () => {
        render(<Loader />);

        // Checks the presence of main elements based on their textual content
        expect(screen.getByText('Travail en cours')).toBeInTheDocument();
        expect(screen.getByText('Virginie')).toBeInTheDocument();
        expect(screen.getByTestId('progress-bar')).toBeInTheDocument();
    });
});