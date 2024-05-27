import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hamburger from './Hamburger';

describe('Hamburger component', () => {
    it('renders correctly with isOpen true', () => {
        render(<Hamburger isOpen={true} />);

        const burger1 = screen.getByTestId('burger1');
        const burger2 = screen.getByTestId('burger2');
        const burger3 = screen.getByTestId('burger3');

        expect(burger1).toBeInTheDocument();
        expect(burger2).toBeInTheDocument();
        expect(burger3).toBeInTheDocument();
    });

    it('renders correctly with isOpen false', () => {
        render(<Hamburger isOpen={false} />);

        const burger1 = screen.getByTestId('burger1');
        const burger2 = screen.getByTestId('burger2');
        const burger3 = screen.getByTestId('burger3');

        expect(burger1).toBeInTheDocument();
        expect(burger2).toBeInTheDocument();
        expect(burger3).toBeInTheDocument();
    });
});
