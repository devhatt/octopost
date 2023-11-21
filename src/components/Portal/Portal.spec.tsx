import { render, screen } from '@testing-library/react';

import Portal from './Portal';

import { TPortalProps } from './Portal.types';

const makeSut = ({
  isOpen = false,
  children = <div>content</div>,
}: Partial<TPortalProps>) => {
  return render(<Portal isOpen={isOpen}>{children}</Portal>);
};

describe('Portal', () => {
  describe('when [isOpen] is true', () => {
    it('renders children', () => {
      makeSut({ isOpen: true });

      const content = screen.getByText('content');

      expect(content).toBeInTheDocument();
    });
  });

  describe('when [isOpen] is false', () => {
    it('not renders children', () => {
      makeSut({ isOpen: false });

      const titleComponent = screen.queryByText('content');
      expect(titleComponent).not.toBeInTheDocument();
    });
  });
});
