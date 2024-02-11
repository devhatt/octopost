import { render, screen } from '@testing-library/react';

import { AccordionTab } from './AccordionTab';
import { AccordionTabProps } from './AccordionTab.types';

const makeSut = ({
  isOpen = false,
  title = 'title',
  ...props
}: Partial<AccordionTabProps>) =>
  render(<AccordionTab isOpen={isOpen} title={title} {...props} />);

describe('AccordionTab', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-arguments, @typescript-eslint/no-explicit-any -- there is a issue with the typescript generic on vitest
    window.scrollTo = vi.fn<any>();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('when [hideCloseButton] is false', () => {
    it('not render close button', () => {
      makeSut({});

      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
    });
  });
});
