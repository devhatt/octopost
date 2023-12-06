import { render, screen } from '@testing-library/react';

import Accordion from './Accordion';

import type { TAccordionProps } from './Accordion.types';

afterEach(() => {
  vi.clearAllMocks();
});

const makeSut = ({
  header = <div>header</div>,
  content = <div>content</div>,
  isOpen = false,
  ...props
}: Partial<TAccordionProps>) => {
  return render(
    <Accordion isOpen={isOpen} header={header} content={content} {...props} />
  );
};

describe('Accordion', () => {
  describe('when isOpen is false', () => {
    it('body cannot render', () => {
      makeSut({ isOpen: false });

      const content = screen.queryByText('content');

      expect(content).not.toBeInTheDocument();
    });
  });

  describe('when isOpen is true', () => {
    it('body can render', () => {
      makeSut({ isOpen: true });

      const content = screen.getByText('content');

      expect(content).toBeVisible();
    });
  });
});
