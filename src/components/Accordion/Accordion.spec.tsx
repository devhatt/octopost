import { render, RenderResult, screen } from '@testing-library/react';

import Accordion from './Accordion';

import type { TAccordionProps } from './Accordion.types';

afterEach(() => {
  vi.clearAllMocks();
});

const makeSut = ({
  content = <div>content</div>,
  header = <div>header</div>,
  isOpen = false,
  ...props
}: Partial<TAccordionProps>): RenderResult =>
  render(
    <Accordion content={content} header={header} isOpen={isOpen} {...props} />
  );

describe('Accordion', () => {
  describe('when isOpen is false', () => {
    it('body is collapsed', () => {
      makeSut({ isOpen: false });

      const contentWrapper = screen.getByTestId('accordion-content');

      expect(contentWrapper).toHaveStyle('height: 0');
    });
  });

  describe('when isOpen is true', () => {
    it('body can render', () => {
      makeSut({ isOpen: true });

      const contentWrapper = screen.getByTestId('accordion-content');

      expect(contentWrapper).toHaveStyle('height: auto');
    });
  });
});
