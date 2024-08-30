import { useNavigate } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Hero from './Form';

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(() => ({
    navigate: vi.fn(),
  })),
}));

const useNavigateMock = vi.mocked(useNavigate);

describe('Hero component', () => {
  describe('show the content on screen', () => {
    it('renders its content', () => {
      render(<Hero />);

      const octopostLogo = screen.getByLabelText('octopost logo');
      const signInButton = screen.getByText('Sign in');
      const title = screen.getByText('New here?');
      const description = screen.getByText(
        /welcome to octopost. enter your personal/i
      );
      const octopostIcon = screen.getByTestId('octopost-icon');

      expect(octopostLogo).toBeInTheDocument();
      expect(signInButton).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(octopostIcon).toBeInTheDocument();
    });
    it('change page on SignIn click', async () => {
      const navigateMock = vi.fn();

      useNavigateMock.mockReturnValue(navigateMock);

      render(<Hero />);

      const signInButton = screen.getByText('Sign in');

      await userEvent.click(signInButton);

      expect(navigateMock).toHaveBeenCalledWith('/login');
    });
  });
});
