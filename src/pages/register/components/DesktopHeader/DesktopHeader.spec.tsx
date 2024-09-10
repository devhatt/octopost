import { render, screen } from '@testing-library/react';

import DesktopHeader from './DesktopHeader';

describe('DesktopHeader component', () => {
  describe('show the content on screen', () => {
    it('renders its content', () => {
      render(<DesktopHeader />);

      const logo = screen.getByLabelText('octopost logo');

      expect(logo).toBeInTheDocument();
    });
  });
});
