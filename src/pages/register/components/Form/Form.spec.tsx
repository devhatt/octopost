import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from './Form';

describe('Form component', () => {
  describe('show the content on screen', () => {
    it('renders its content', () => {
      render(<Form />);

      const form = screen.getByRole('form');
      const emailInput = screen.getByRole('textbox', { name: 'Email' });
      const passwordInput = screen.getByLabelText('Password');
      const button = screen.getByText('Sign up');

      expect(form).toBeInTheDocument();
      expect(form).toContainElement(emailInput);
      expect(form).toContainElement(passwordInput);
      expect(button).toBeInTheDocument();
    });
  });

  describe('validate form correctly', () => {
    it('show invalid email error', async () => {
      render(<Form />);

      const emailInput = screen.getByRole('textbox', { name: 'Email' });
      const passwordInput = screen.getByLabelText(/Password/);
      const emailSupportText = screen.getByTestId('email-support-text');
      const submitButton = screen.getByText('Sign up');

      await userEvent.type(emailInput, 'test');
      await userEvent.type(passwordInput, 'test');
      await userEvent.click(submitButton);

      await waitFor(() => {
        expect(
          within(emailSupportText).getByText('Must be a valid email.')
        ).toBeInTheDocument();
      });
    });

    it('show invalid password error', async () => {
      render(<Form />);

      const emailInput = screen.getByRole('textbox', { name: 'Email' });
      const passwordInput = screen.getByLabelText(/Password/);
      const passwordSupportText = screen.getByTestId('password-support-text');
      const submitButton = screen.getByText('Sign up');

      await userEvent.type(emailInput, 'test@email.com');
      await userEvent.type(passwordInput, 'test');
      await userEvent.click(submitButton);

      await waitFor(() => {
        expect(
          within(passwordSupportText).getByText(
            'Must have 8 or more characters.'
          )
        ).toBeInTheDocument();
      });
    });

    it('show need number and special caracter error', async () => {
      render(<Form />);

      const emailInput = screen.getByRole('textbox', { name: 'Email' });
      const passwordInput = screen.getByLabelText(/Password/);
      const passwordSupportText = screen.getByTestId('password-support-text');
      const submitButton = screen.getByText('Sign up');

      await userEvent.type(emailInput, 'test@email.com');
      await userEvent.type(passwordInput, 'testtesttest');
      await userEvent.click(submitButton);

      await waitFor(() => {
        expect(
          within(passwordSupportText).getByText(
            'Must contain at least 1 number and 1 special character.'
          )
        ).toBeInTheDocument();
      });
    });
  });
});
