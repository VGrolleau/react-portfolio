import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Modal component', () => {
    const onClose = jest.fn();

    const selectedData = {
        data: {
            name: 'Project Name',
            imageURL: 'assets/images/projects/bataille.png',
            category: 'personal',
            skills: ['Skill 1', 'Skill 2'],
            description: {
                text: 'Description text',
                li: [
                    { content: 'List item 1', sublevel: [] },
                    { content: 'List item 2', sublevel: ['Subitem 1', 'Subitem 2'] },
                ],
            },
            links: {
                github: {
                    frontend: {
                        text: "GitHub",
                        url: "https://example-github.com/"
                    },
                },
                site: {
                    app: {
                        text: "Site",
                        url: "https://example-site.com"
                    },
                }
            },
        },
        category: 'personal',
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders correctly when isOpen is true', () => {
        render(
            <Router>
                <Modal isOpen={true} selectedData={selectedData} onClose={onClose} />
            </Router>
        );

        expect(screen.getByText('Project Name')).toBeInTheDocument();
        expect(screen.getByText('personnel')).toBeInTheDocument();
        expect(screen.getByText('Skill 1')).toBeInTheDocument();
        expect(screen.getByText('Skill 2')).toBeInTheDocument();
        expect(screen.getByText('Description text')).toBeInTheDocument();
        expect(screen.getByText('List item 1')).toBeInTheDocument();
        expect(screen.getByText('List item 2')).toBeInTheDocument();
        expect(screen.getByText('Subitem 1')).toBeInTheDocument();
        expect(screen.getByText('Subitem 2')).toBeInTheDocument();
        expect(screen.getByText('GitHub')).toBeInTheDocument();
        expect(screen.getByText('GitHub')).toHaveAttribute('href', 'https://example-github.com/');

        // Checks whether the onClose function is called when the close button is clicked
        fireEvent.click(screen.getByRole('button', { class: /close-button/i }));
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('does not render when isOpen is false', () => {
        render(
            <Router>
                <Modal isOpen={false} selectedData={selectedData} onClose={onClose} />
            </Router>
        );

        const modal = screen.queryByTestId('modal');
        expect(modal).not.toBeInTheDocument();
    });

});