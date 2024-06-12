import { render, screen } from '@testing-library/react';

import MainComposer from './MainComposer';

describe('MainComposer', () => {
  describe('when component loads', () => {
    it('MediaInputs must be visible when component starts', () => {
      render(<MainComposer />);

      const mediaInputs = screen.getByTestId('manyMediaInputs');
      expect(mediaInputs).toBeInTheDocument();
    });
  });
});
