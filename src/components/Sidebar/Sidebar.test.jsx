import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';

describe('Sidebar component', () => {
    it('renders correctly', () => {
        render(
            <Router>
                <Sidebar />
            </Router>
        );

        // Check main elements presence
        expect(screen.getByRole('link', { name: /virginie/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /accueil/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /à propos/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /compétences/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /projets/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    });

    it('toggles the hamburger menu', () => {
        render(
            <Router>
                <Sidebar />
            </Router>
        );

        // Check menu doesn't have hamburger-open class at the begining
        const nav = screen.getByRole('navigation');
        expect(nav).not.toHaveClass('hamburger-open');

        // Check hamburger button presence
        const hamburgerButton = screen.getByTestId('hamburger-button');
        expect(hamburgerButton).toBeInTheDocument();

        // Click on hamburger button
        fireEvent.click(hamburgerButton);

        // Check menu has hamburger-open class now
        expect(nav).toHaveClass('hamburger-open');
    });
});