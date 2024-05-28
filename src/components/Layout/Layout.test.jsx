import '@testing-library/jest-dom';
import Layout from './Layout';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

describe('Layout component', () => {
    it('renders Sidebar component', () => {
        render(
            <Router>
                <Layout />
            </Router>
        );

        // Verify if Sidebar is rendered by checking for an element unique to Sidebar
        expect(screen.getByText('Virginie')).toBeInTheDocument();
    });

    it('renders Outlet content', () => {
        render(
            <MemoryRouter initialEntries={['/test']}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="test" element={<div>Test Page</div>} />
                    </Route>
                </Routes>
            </MemoryRouter>
        );

        // Verify if the Outlet renders the child route correctly
        expect(screen.getByText('Test Page')).toBeInTheDocument();
    });

    it('renders children tags', () => {
        render(
            <Router>
                <Layout />
            </Router>
        );

        // Verify if tags are rendered correctly
        expect(screen.getByText('<body>')).toBeInTheDocument();
        expect(screen.getByText('</body>')).toBeInTheDocument();
        expect(screen.getByText('</html>')).toBeInTheDocument();
    });
});