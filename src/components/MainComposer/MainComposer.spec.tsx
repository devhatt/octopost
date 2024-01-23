import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MainComposer from './MainComposer';

describe('MainComposer', () => {
  describe('when component loads', () => {
    it('MediaInputs must be visible when component starts', async () => {
      render(<MainComposer isOpen title="main content" />);

      const mediaInputs = screen.getByTestId('mediaInputs');
      expect(mediaInputs).toBeInTheDocument();
    });
  });
});
