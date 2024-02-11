import { render, screen } from '@testing-library/react';

import { Accordion } from './Accordion';

import type { AccordionProps } from './Accordion.types';

afterEach(() => {
  vi.clearAllMocks();
});

const makeSut = ({
  content = <div>content</div>,
  header = <div>header</div>,
  isOpen = false,
  ...props
}: Partial<AccordionProps>) =>
  render(
    <Accordion content={content} header={header} isOpen={isOpen} {...props} />
  );

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
