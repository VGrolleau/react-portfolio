import '@testing-library/jest-dom';
import Skills from './Skills';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { dataTechTags } from '../../data';

// Polyfill window.matchMedia
window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    };
};

describe('Skills page', () => {
    it('should display the content after 2.5 seconds', async () => {
        render(
            <Router>
                <Skills />
            </Router>
        );

        // Check content rendered after a delay
        await waitFor(() => {
            expect(screen.getByText(/Spécialisée/i)).toBeInTheDocument();
        }, { timeout: 3000 });
    });

    it('should render the description and links', async () => {
        render(
            <Router>
                <Skills />
            </Router>
        );

        // Check that the description contains technologies
        await waitFor(() => {
            dataTechTags.forEach((data) => {
                const techRegex = new RegExp(data.name, 'i');
                expect(screen.getByText(techRegex)).toBeInTheDocument();
            });
        }, { timeout: 3000 });

        // Check that LinkedIn and CV links are present
        expect(screen.getByText(/mon profil LinkedIn/i)).toHaveAttribute('href', 'https://www.linkedin.com/in/virginie-grolleau-/');
        expect(screen.getByText(/mon CV/i)).toHaveAttribute('href', expect.stringContaining('cv-grolleau-virginie.pdf'));
    });
});