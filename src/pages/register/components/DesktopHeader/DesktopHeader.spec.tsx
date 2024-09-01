import { NavLink } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import DesktopHeader from './DesktopHeader';

vi.mock('react-router-dom', () => ({
  NavLink: vi.fn(({ children }) => children),
}));

const NavLinkMocked = vi.mocked(NavLink);

describe('DesktopHeader component', () => {
  describe('show the content on screen', () => {
    it('renders its content', () => {
      render(<DesktopHeader />);

      const text = screen.getByText(/Already have an account/);
      const link = screen.getByText(/Sign In/);

      expect(text).toBeInTheDocument();
      expect(link).toBeInTheDocument();
    });
    it('push generate link to sign in page', () => {
      render(<DesktopHeader />);

      expect(NavLinkMocked).toHaveBeenCalledWith(
        expect.objectContaining({
          to: 'login',
        }),
        {}
      );
    });
  });
});
