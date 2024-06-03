import '@testing-library/jest-dom';
import Contact from './Contact';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import emailjs from '@emailjs/browser';

describe('Contact page', () => {
    it('should display the content after 2.5 seconds', async () => {
        render(<Contact />);

        // Check content rendered after a delay
        await waitFor(() => {
            expect(screen.getByText(/Me contacter/i)).toBeInTheDocument();
        }, { timeout: 3000 });
    });

    it('should display validation errors for the form', async () => {
        render(<Contact />);

        // Check content rendered after a delay
        await waitFor(() => {
            expect(screen.getByText(/Me contacter/i)).toBeInTheDocument();
        }, { timeout: 3000 });

        // Post form with empty inputs
        fireEvent.click(screen.getByText(/envoyer/i));

        // Check displaying validation errors
        expect(screen.getByText(/Le nom doit comporter au moins 2 caractères/i)).toBeInTheDocument();
        expect(screen.getByText(/Veuillez entrer une adresse e-mail valide/i)).toBeInTheDocument();
        expect(screen.getByText(/L'objet doit comporter au moins 3 caractères/i)).toBeInTheDocument();
        expect(screen.getByText(/Le message doit comporter au moins 10 caractères/i)).toBeInTheDocument();
    });

    jest.mock(emailjs, () => ({
        sendForm: jest.fn()
    }));

    window.alert = jest.fn();

    it('should send the form successfully', async () => {
        emailjs.sendForm.mockResolvedValueOnce({ status: 200 });

        render(<Contact />);

        // Simulate display content delay
        await waitFor(() => {
            expect(screen.getByText(/Me contacter/i)).toBeInTheDocument();
        }, { timeout: 3000 });

        // Fill form inputs
        fireEvent.change(screen.getByPlaceholderText(/Nom/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'john.doe@example.com' } });
        fireEvent.change(screen.getByPlaceholderText(/Objet/i), { target: { value: 'Test Subject' } });
        fireEvent.change(screen.getByPlaceholderText(/Message/i), { target: { value: 'Test Message' } });

        // Post form
        fireEvent.click(screen.getByText(/envoyer/i));

        // Check emailjs API was called
        await waitFor(() => {
            expect(emailjs.sendForm).toHaveBeenCalled();
        });

        // Check success alert displayed
        expect(window.alert).toHaveBeenCalledWith('Message envoyé avec succès !')
    });
});