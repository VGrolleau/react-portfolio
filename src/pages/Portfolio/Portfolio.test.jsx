import '@testing-library/jest-dom';
import Portfolio from './Portfolio';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { dataProjects } from '../../data';

describe('Portfolio page', () => {
    it('should display the content after 2.5 seconds', async () => {
        render(
            <Router>
                <Portfolio />
            </Router>
        );

        // Check content rendered after a delay
        await waitFor(() => {
            expect(screen.getByText(/La bataille/i)).toBeInTheDocument();
        }, { timeout: 3000 });
    });

    it('should render personal and openclassrooms projects', async () => {
        render(
            <Router>
                <Portfolio />
            </Router>
        );

        // Wait for content
        await waitFor(() => {
            expect(screen.getByText(/La bataille/i)).toBeInTheDocument();
        }, { timeout: 3000 });

        // Check personal and openclassrooms projects displayed
        dataProjects[0].personal.forEach((project) => {
            expect(screen.getByText(project.name)).toBeInTheDocument();
        });
        dataProjects[0].openclassrooms.forEach((project) => {
            expect(screen.getByText(project.name)).toBeInTheDocument();
        });
    });

    it('should change the overview image when a project is selected', async () => {
        render(
            <Router>
                <Portfolio />
            </Router>
        );

        // Wait for content
        await waitFor(() => {
            expect(screen.getByText(dataProjects[0].personal[0].name)).toBeInTheDocument();
        }, { timeout: 3000 });

        // Click on the first personal project
        const firstPersonalProject = screen.getByText(dataProjects[0].personal[0].name);
        fireEvent.mouseOver(firstPersonalProject);

        // Check overview image has changed
        await waitFor(() => {
            const overviewImage = screen.getByTestId('project-overview');
            const expectedImageUrl = dataProjects[0].personal[0].imageURL.split('/').pop(); // Get file name only

            // Check image URL finished by waiting file name
            expect(overviewImage.src).toMatch(new RegExp(`${expectedImageUrl}$`));
        });
    });
});