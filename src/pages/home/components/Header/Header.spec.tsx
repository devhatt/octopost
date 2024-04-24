import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('when initialize', () => {
  it('renders without crashing', () => {
    render(<Header />);

    const octopostLogo = screen.getByAltText('octopost logo');
    expect(octopostLogo).toBeInTheDocument();

    const tiktokIcon = screen.getByAltText('tiktok icon');
    expect(tiktokIcon).toBeInTheDocument();

    const twitterIcon = screen.getByAltText('twitter icon');
    expect(twitterIcon).toBeInTheDocument();

    const instagramIcon = screen.getByAltText('instagram icon');
    expect(instagramIcon).toBeInTheDocument();
  });
});
