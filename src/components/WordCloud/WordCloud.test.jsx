import '@testing-library/jest-dom';
import WordCloud from './WordCloud';
import { render, screen } from '@testing-library/react';
import { useMediaQuery } from 'react-responsive';
import TagCloud from 'TagCloud';

// Mock the TagCloud function
jest.mock('tagcloud.js', () => jest.fn());

describe('WordCloud component', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders the skill-charts container', () => {
        render(<WordCloud />);

        const container = screen.getByRole('region', { class: /skill-charts/i });
        expect(container).toBeInTheDocument();
    });

    it('uses correct options for mobile', () => {
        useMediaQuery.mockReturnValueOnce(true); // Mock isMobile to true
        render(<WordCloud />);

        const expectedOptions = {
            radius: 200,
            maxSpeed: 'fast',
            initSpeed: 'fast',
            direction: 135,
            keep: false
        };

        expect(TagCloud).toHaveBeenCalledWith('.skill-charts', expect.any(Array), expectedOptions);
    });

    it('uses correct options for tablet', () => {
        useMediaQuery.mockReturnValueOnce(false).mockReturnValueOnce(true); // Mock isMobile to false and isTablet to true
        render(<WordCloud />);

        const expectedOptions = {
            radius: 250,
            maxSpeed: 'fast',
            initSpeed: 'fast',
            direction: 135,
            keep: false
        };

        expect(TagCloud).toHaveBeenCalledWith('.skill-charts', expect.any(Array), expectedOptions);
    });

    it('uses correct options for desktop', () => {
        useMediaQuery.mockReturnValueOnce(false).mockReturnValueOnce(false); // Mock isMobile and isTablet to false
        render(<WordCloud />);

        const expectedOptions = {
            radius: 400,
            maxSpeed: 'fast',
            initSpeed: 'fast',
            direction: 135,
            keep: false
        };

        expect(TagCloud).toHaveBeenCalledWith('.skill-charts', expect.any(Array), expectedOptions);
    });
});