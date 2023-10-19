import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputMedia from './InputMedia';

jest.mock('nanoid', () => {
  return {
    nanoid: jest.fn(() => 'sua-string-especifica-aqui'),
  };
});

describe('InputMedia', () => {
  it('renders the icon', () => {
    render(<InputMedia onChange={() => {}} />);
    const icon = screen.getByRole('img');
    expect(icon).toBeInTheDocument();
  });

  describe('when clicking the icon', () => {
    it('triggers the file input', () => {
      render(<InputMedia onChange={() => {}} />);

      const icon = screen.getByRole('img');
      userEvent.click(icon);

      const input = screen.getByTestId('imageInput');
      expect(input).toHaveAttribute('type', 'file');
    });
  });
});
