import { render, screen } from '@testing-library/react';

import SocialLogin from './SocialLogin';

describe('SocialLogin component', () => {
  describe('show the content on screen', () => {
    it('renders its content', () => {
      render(<SocialLogin />);

      const title = screen.getByText('or continue with');
      const twitterLogo = screen.getByLabelText('twitter logo');
      const tiktokLogo = screen.getByLabelText('twitter logo');
      const instagramLogo = screen.getByLabelText('twitter logo');

      expect(title).toBeInTheDocument();
      expect(twitterLogo).toBeInTheDocument();
      expect(tiktokLogo).toBeInTheDocument();
      expect(instagramLogo).toBeInTheDocument();
    });
  });
});
