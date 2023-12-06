import { render, screen } from '@testing-library/react';

import Modal from './Modal';

describe('Modal', () => {
  describe('when [isOpen] is true', () => {
    it('renders children', () => {
      render(<Modal isOpen>content</Modal>);

      const content = screen.getByText('content');

      expect(content).toBeInTheDocument();
    });
  });

  describe('when [isOpen] is false', () => {
    it('not renders children', () => {
      render(<Modal isOpen={false}>content</Modal>);

      const titleComponent = screen.queryByText('content');
      expect(titleComponent).not.toBeInTheDocument();
    });
  });
});
