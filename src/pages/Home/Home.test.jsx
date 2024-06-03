import '@testing-library/jest-dom';
import Home from './Home';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Home page', () => {
    it('should display the content after 2.5 seconds', async () => {
        render(
            <Router>
                <Home />
            </Router>
        );

        // Check content rendered after a delay
        await waitFor(() => {
            expect(screen.getByText(/Développeuse Fullstack/i)).toBeInTheDocument();
        }, { timeout: 3000 });
    });

    it('should have a link to contact page', async () => {
        render(
            <Router>
                <Home />
            </Router>
        );

        // Wait for content
        await waitFor(() => {
            expect(screen.getByText(/Me contacter/i)).toBeInTheDocument();
        }, { timeout: 3000 });

        // Check "Me contacter" link is present and link to contact page
        const link = screen.getByRole('link', { name: /Me contacter/i });
        expect(link).toHaveAttribute('href', '/contact');
    });
});