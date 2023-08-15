import { render, screen } from '@testing-library/react';

import Preview from './Preview';

describe('Preview', () => {
  describe('when pass the preview props', () => {
    it('renders on screen the preview', () => {
      render(<Preview>test</Preview>);
      const preview = screen.getByText(/test/i);
      expect(preview).toBeInTheDocument();
    });
  });
});
