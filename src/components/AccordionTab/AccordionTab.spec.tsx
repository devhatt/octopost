import { render, screen } from '@testing-library/react';

import AccordionTab from './AccordionTab';

beforeEach(() => {
  // https://github.com/vitest-dev/vitest/issues/4223
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  window.scrollTo = vi.fn<any>();
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
