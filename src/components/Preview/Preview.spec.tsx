import { render, screen } from '@testing-library/react';

import Preview from './Preview';

describe('Preview', () => {
  describe('when initialized', () => {
    it('renders the element preview inside the container', () => {
      render(
        <Preview>
          <h1> teste </h1>
        </Preview>
      );

      const titleComponent = screen.getByText('teste');
      expect(titleComponent).toBeInTheDocument();
    });
  });
});
