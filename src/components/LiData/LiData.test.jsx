import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LiData from './LiData';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock FontAwesomeIcon to avoid rendering errors
jest.mock('@fortawesome/react-fontawesome', () => ({
    FontAwesomeIcon: () => <i />,
}));

// Mock Modal component to simplify tests
jest.mock('../Modal/Modal', () => ({ isOpen, selectedData, onClose }) => (
    isOpen ? <div data-testid="modal">{selectedData.data.name}</div> : null
));

describe('LiData component', () => {
    const setActiveLiIndex = jest.fn();
    const setAnimationKey = jest.fn();
    const dataObject = [
        { name: 'Project 1', skills: ['Skill 1'] },
        { name: 'Project 2', skills: ['Skill 2'] },
    ];

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders list items correctly', () => {
        render(
            <Router>
                <LiData
                    category="test"
                    dataObject={dataObject}
                    activeLiIndex={null}
                    setActiveLiIndex={setActiveLiIndex}
                    setAnimationKey={setAnimationKey}
                />
            </Router>
        );

        dataObject.forEach(data => {
            expect(screen.getByText(data.name)).toBeInTheDocument();
        });
    });

    it('handles mouse enter and leave events correctly', () => {
        render(
            <Router>
                <LiData
                    category="test"
                    dataObject={dataObject}
                    activeLiIndex={null}
                    setActiveLiIndex={setActiveLiIndex}
                    setAnimationKey={setAnimationKey}
                />
            </Router>
        );

        const listItem = screen.getByText('Project 1');

        // Simulate mouse enter
        fireEvent.mouseEnter(listItem);
        expect(setActiveLiIndex).toHaveBeenCalledWith('test-0');
        expect(setAnimationKey).toHaveBeenCalled();

        // Simulate mouse leave
        fireEvent.mouseLeave(listItem);
        expect(setActiveLiIndex).toHaveBeenCalledWith(null);
    });

    it('opens modal with correct data on item click', () => {
        render(
            <Router>
                <LiData
                    category="test"
                    dataObject={dataObject}
                    activeLiIndex={null}
                    setActiveLiIndex={setActiveLiIndex}
                    setAnimationKey={setAnimationKey}
                />
            </Router>
        );

        // Simulate click on the first item
        fireEvent.click(screen.getByText('Project 1'));

        // Assert that modal is opened with correct data
        expect(screen.getByTestId('modal')).toBeInTheDocument();
        expect(screen.getByText('Skill 1')).toBeInTheDocument();

        // Simulate click on the second item
        fireEvent.click(screen.getByText('Project 2'));

        // Assert that modal is opened with correct data
        expect(screen.getByTestId('modal')).toBeInTheDocument();
        expect(screen.getByText('Skill 2')).toBeInTheDocument();
    });
});