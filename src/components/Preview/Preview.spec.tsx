import { render, screen } from '@testing-library/react';

import Preview from './Preview';
describe('Preview', () => {
  describe('when pass the preview props', () => {
    it('should render on screen the preview', () => {
      render(<Preview previewText="test" />);
      const preview = screen.getByText(/test/i);
      expect(preview).toBeInTheDocument();
    });
  });
});
