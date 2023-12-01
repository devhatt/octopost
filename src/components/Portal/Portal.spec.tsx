import { render, screen } from '@testing-library/react';

import Portal from './Portal';

describe('Portal', () => {
  describe('when [isOpen] is true', () => {
    it('renders children', () => {
      render(<Portal isOpen>content</Portal>);

      const content = screen.getByText('content');

      expect(content).toBeInTheDocument();
    });
  });

  describe('when [isOpen] is false', () => {
    it('not renders children', () => {
      render(<Portal isOpen={false}>content</Portal>);

      const titleComponent = screen.queryByText('content');
      expect(titleComponent).not.toBeInTheDocument();
    });
  });
});
