import { render, screen } from '@testing-library/react';

import AccordionTab from './AccordionTab';

beforeEach(() => {
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
