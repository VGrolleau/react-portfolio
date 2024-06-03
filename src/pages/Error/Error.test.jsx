import '@testing-library/jest-dom';
import Error from './Error';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Error page', () => {
    it('should display the content after 2.5 seconds', async () => {
        render(<Error />, { wrapper: MemoryRouter });

        // Check content rendered after a delay
        await waitFor(() => {
            expect(screen.getByText(/Oups/i)).toBeInTheDocument();
        }, { timeout: 3000 });
    });

    it('should have a link to return to the homepage', async () => {
        render(<Error />, { wrapper: MemoryRouter });

        // Wait for the content
        await waitFor(() => {
            expect(screen.getByText(/Retourner à la page d'accueil/i)).toBeInTheDocument();
        }, { timeout: 3000 });

        // Check back to home link presence
        const link = screen.getByRole('link', { name: /Retourner à la page d'accueil/i });
        expect(link).toHaveAttribute('href', '/');
    });
});