import '@testing-library/jest-dom';
import About from "./About";
import { render, screen, waitFor } from '@testing-library/react';

// Mock the AnimatedLetters component
jest.mock('../../components/AnimatedLetters/AnimatedLetters', () => ({ letterClass, charactersArray, index }) => (
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

        // Wait for the content to appear
        await waitFor(() => {
            expect(screen.getByText((content, element) => {
                return element.tagName.toLowerCase() === 'p' && /Diplômée Développeuse/i.test(content);
            })).toBeInTheDocument();
        }, { timeout: 3000 });
    });

    it('should render the cube with icons', async () => {
        render(<About />);

        // Wait for the content to appear
        await waitFor(() => {
            expect(screen.getByTestId('stage-cube-cont')).toBeInTheDocument();
        }, { timeout: 3000 });

        expect(screen.getByTestId('face1')).toBeInTheDocument();
        expect(screen.getByTestId('face2')).toBeInTheDocument();
        expect(screen.getByTestId('face3')).toBeInTheDocument();
        expect(screen.getByTestId('face4')).toBeInTheDocument();
        expect(screen.getByTestId('face5')).toBeInTheDocument();
        expect(screen.getByTestId('face6')).toBeInTheDocument();
    });
});