import { render, screen } from '@testing-library/react';

import Header from './Header';

import { home, social_medias } from '../../../../constants/social-medias';

describe('Header component', () => {
  describe('show the content on screen', () => {
    it('renders its content', () => {
      render(<Header />);

      const octopostLogo = screen.getByLabelText('octopost logo');
      const tiktokIcon = screen.getByLabelText('tiktok icon');
      const twitterIcon = screen.getByLabelText('twitter icon');
      const instagramIcon = screen.getByLabelText('instagram icon');

      expect(octopostLogo).toBeInTheDocument();
      expect(tiktokIcon).toBeInTheDocument();
      expect(twitterIcon).toBeInTheDocument();
      expect(instagramIcon).toBeInTheDocument();
    });
    it('ensures social media links are correct', () => {
      render(<Header />);

      const homeLink = screen.getByLabelText('octopost logo');
      const tiktokLink = screen.getByLabelText('tiktok icon');
      const twitterLink = screen.getByLabelText('twitter icon');
      const instagramLink = screen.getByLabelText('instagram icon');

      expect(homeLink.getAttribute('href')).toBe(home);
      expect(tiktokLink.getAttribute('href')).toBe(social_medias.tiktok);
      expect(twitterLink.getAttribute('href')).toBe(social_medias.twitter);
      expect(instagramLink.getAttribute('href')).toBe(social_medias.instagram);
    });
  });
});
