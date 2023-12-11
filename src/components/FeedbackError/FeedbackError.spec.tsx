import { render, screen } from '@testing-library/react';

import FeedbackError from './FeedbackError';

describe('FeedbackEror', () => {
  describe('when initialize', () => {
    describe('there is no error', () => {
      it('renders nothing on screen', () => {
        render(<FeedbackError />);

        expect(
          screen.queryByTestId(/error-container/i)
        ).not.toBeInTheDocument();
      });
    });
  });
});
