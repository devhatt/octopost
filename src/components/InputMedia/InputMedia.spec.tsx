import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputMedia from './InputMedia';

describe('InputMedia', () => {
  it('renders the icon', () => {
    render(<InputMedia />);
    const icon = screen.getByRole('img');
    expect(icon).toBeInTheDocument();
  });

  describe('when clicking the icon', () => {
    it('triggers the file input', () => {
      render(<InputMedia />);

      const icon = screen.getByRole('img');
      userEvent.click(icon);

      const input = screen.getByTestId('imageInput');
      expect(input).toHaveAttribute('type', 'file');
    });
  });
});
