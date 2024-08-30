import { NavLink } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import Footer from './Footer';

vi.mock('react-router-dom', () => ({
  NavLink: vi.fn(({ children }) => children),
}));

const NavLinkMocked = vi.mocked(NavLink);

describe('Footer component', () => {
  describe('show the content on screen', () => {
    it('renders its content', () => {
      render(<Footer />);

      const text = screen.getByText(/Already have an account/);
      const link = screen.getByText(/Sign In/);

      expect(text).toBeInTheDocument();
      expect(link).toBeInTheDocument();
    });
    it('push generate link to sign in page', () => {
      render(<Footer />);

      expect(NavLinkMocked).toHaveBeenCalledWith(
        expect.objectContaining({
          to: 'login',
        }),
        {}
      );
    });
  });
});
