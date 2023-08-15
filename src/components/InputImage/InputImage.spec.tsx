import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputImage from './InputImage';

test('render the icon', () => {
  render(<InputImage />);
  const icon = screen.getByRole('img');
  expect(icon).toBeInTheDocument();
});

test('clicking icon trigger file input', () => {
  render(<InputImage />);

  const icon = screen.getByRole('img');
  userEvent.click(icon);

  const input = screen.getByRole('imageInput');
  expect(input).toHaveAttribute('type', 'file');
});
