import { render, screen } from '@testing-library/react';

import UserImage from './UserImage';

describe('UserImage', () => {
  describe('when initialize', () => {
    it('renders with image when receive by props', () => {
      render(<UserImage accountName="fulano" image="profileImage.com" />);
      expect(screen.getByAltText(/profile user/i)).toBeInTheDocument();
    });

    it('renders with initial name letter if no image', () => {
      render(<UserImage accountName="fulano" image="" />);
      expect(screen.getByText(/f/i)).toBeInTheDocument();
      expect(screen.queryByAltText(/profile user/i)).not.toBeInTheDocument();
    });
  });
});
