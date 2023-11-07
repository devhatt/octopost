import { render, screen } from '@testing-library/react';

import PreviewContainer from './PreviewContainer';

describe('PreviewContainer', () => {
  describe('when initialized', () => {
    it('renders the element preview inside the container', () => {
      render(
        <PreviewContainer>
          <h1> teste </h1>
        </PreviewContainer>
      );

      const titleComponent = screen.getByText('teste');
      expect(titleComponent).toBeInTheDocument();
    });
  });
});
