import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputImage from './InputImage';

describe('InputImage', () => {
  it('renders the icon', () => {
    render(<InputImage />);
    const icon = screen.getByRole('img');
    expect(icon).toBeInTheDocument();
  });

  describe('when clicking the icon', () => {
    it('triggers the file input', () => {
      render(<InputImage />);

      const icon = screen.getByRole('img');
      userEvent.click(icon);

      const input = screen.getByRole('imageInput');
      expect(input).toHaveAttribute('type', 'file');
    });
  });
});
