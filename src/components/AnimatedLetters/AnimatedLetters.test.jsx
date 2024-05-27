import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import AnimatedLetters from "./AnimatedLetters";

describe('AnimatedLetters component', () => {
    it('renders correctly with props', () => {
        const letterClass = 'text-animate';
        const charactersArray = ['H', 'e', 'l', 'l', 'o'];
        const index = 0;

        render(
            <AnimatedLetters letterClass={letterClass} charactersArray={charactersArray} index={index} />
        );

        const letterElements = screen.getAllByText(/l/);
        expect(letterElements).toHaveLength(2); // Since 'l' appears twice in the array
    });

    it('applies animation classes correctly', () => {
        const letterClass = 'text-animate';
        const charactersArray = ['H', 'e', 'l', 'l', 'o'];
        const index = 0;

        render(
            <AnimatedLetters letterClass={letterClass} charactersArray={charactersArray} index={index} />
        );

        const spans = screen.queryAllByText((content, element) => {
            return element.tagName.toLowerCase() === 'span' && charactersArray.includes(content);
        });

        spans.forEach((span, i) => {
            expect(span).toHaveClass(`_${i + index}`);
            expect(span).toHaveClass(letterClass);
        });
    });
});