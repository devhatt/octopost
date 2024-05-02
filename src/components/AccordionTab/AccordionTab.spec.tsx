import { render, screen } from '@testing-library/react';

import AccordionTab from './AccordionTab';

afterEach(() => {
  vi.clearAllMocks();
});

describe('AccordionTab', () => {
  describe('when [hideCloseButton] is false', () => {
    it.only('not render close button', () => {
      render(<AccordionTab />);

      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
    });
  });
});
