import '@testing-library/jest-dom';
import About from "./About";
import { render, screen, waitFor } from '@testing-library/react';

// Mock the AnimatedLetters component
jest.mock('../AnimatedLetters/AnimatedLetters', () => ({ letterClass, charactersArray, index }) => (
    <span>{charactersArray.join('')}</span>
));

describe('About page', () => {
    it('should initially not display the content', () => {
        render(<About />);
        const container = screen.queryByText(/Diplômée Développeuse/i);
        expect(container).not.toBeInTheDocument();
    });

    it('should display the content after 2.5 seconds', async () => {
        render(<About />);
        await screen.findByText(/Diplômée Développeuse d’Application JavaScript React/i, { timeout: 3000 });
    });

    it('should update letterClass after 5.5 seconds', async () => {
        render(<About />);
        const animatedLetters = screen.getByText('À propos de moi');

        // Wait for the class to change
        await waitFor(() => {
            expect(animatedLetters).toHaveClass('text-animate-hover');
        }, { timeout: 6000 });
    });

    it('should render the cube with icons', async () => {
        render(<About />);
        await screen.findByText(/Diplômée Développeuse d’Application JavaScript React/i, { timeout: 3000 });

        expect(screen.getByText(/HTML/i)).toBeInTheDocument();
        expect(screen.getByText(/React/i)).toBeInTheDocument();
        expect(screen.getByText(/CSS/i)).toBeInTheDocument();
        expect(screen.getByText(/Sass/i)).toBeInTheDocument();
        expect(screen.getByText(/JavaScript/i)).toBeInTheDocument();
        expect(screen.getByText(/Git/i)).toBeInTheDocument();
    });
});