import { render, screen } from '@testing-library/react';

import MainComposer from './ContentEditor';

describe('MainComposer', () => {
  describe('when component loads', () => {
    it('MediaInputs must be visible when component starts', async () => {
      render(<MainComposer isOpen title="main content" />);

      const mediaInputs = screen.getByTestId('mediaInputs');
      expect(mediaInputs).toBeInTheDocument();
    });
  });
});
