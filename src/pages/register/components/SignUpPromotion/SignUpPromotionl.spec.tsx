import { render, screen } from '@testing-library/react';

import SignUpPromotion from './SignUpPromotion';

describe('SignUpPromotion component', () => {
  describe('show the content on screen', () => {
    it('renders its content', () => {
      render(<SignUpPromotion />);

      const title = screen.getByText('Join us right now!');
      const description = screen.getByText('Register your account now!');

      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });
});
