import { render, screen } from '@testing-library/react';

import PreviewContainer from './PreviewContainer';

const title = <h1 data-testid="custom-element"> teste </h1>;

describe('PreviewContainer', () => {
  describe('when initialized', () => {
    it('renders the element preview inside the container', () => {
      render(<PreviewContainer preview={title} />);

      const titleComponent = screen.getByTestId('custom-element');
      expect(titleComponent).toBeInTheDocument();
    });
  });
});
