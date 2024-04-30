import { render, screen } from '@testing-library/react';

import { instagramLink, tiktokLink, twitterLink } from './links/links';

import Header from './Header';

describe('Header component', () => {
  describe('show the content on screen', () => {
    it('renders its content', () => {
      render(<Header />);

      const octopostLogo = screen.getByAltText('octopost logo');

      const tiktokIcon = screen.getByAltText('tiktok icon');

      const twitterIcon = screen.getByAltText('twitter icon');

      const instagramIcon = screen.getByAltText('instagram icon');

      expect(octopostLogo).toBeInTheDocument();

      expect(tiktokIcon).toBeInTheDocument();

      expect(twitterIcon).toBeInTheDocument();

      expect(instagramIcon).toBeInTheDocument();
    });
  });

  describe('ensure links are correct', () => {
    it('renders social icons with correct URL', () => {
      render(<Header />);

      const tiktokIcon = screen.getByRole('link', { name: 'tiktok icon' });
      const hrefTiktok = tiktokIcon.getAttribute('href');

      const twitterIcon = screen.getByRole('link', { name: 'twitter icon' });
      const hrefTwitter = twitterIcon.getAttribute('href');

      const instagramIcon = screen.getByRole('link', {
        name: 'instagram icon',
      });
      const hrefInstagram = instagramIcon.getAttribute('href');

      expect(hrefTiktok).toEqual(tiktokLink);
      expect(hrefTwitter).toEqual(twitterLink);
      expect(hrefInstagram).toEqual(instagramLink);
    });
  });
});
