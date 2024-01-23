import { render, screen } from '@testing-library/react';

import AccordionTab from './AccordionTab';

beforeEach(() => {
  // https://github.com/vitest-dev/vitest/issues/4223

  window.scrollTo = vi.fn() as unknown as typeof window.scrollTo;
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('AccordionTab', () => {
  describe('when [hideCloseButton] is false', () => {
    it('not render close button', () => {
      render(<AccordionTab />);

      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
    });
  });
});
