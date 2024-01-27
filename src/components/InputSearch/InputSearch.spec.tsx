import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputSearch from './InputSearch';

const mockProps = {
  error: false,
  errorMessage: 'Test Error Message',
  handleClear: vi.fn(),
  name: 'testInput',
  onChange: vi.fn(),
  onFocus: vi.fn(),
  placeholder: 'Test Placeholder',
  readonly: false,
  required: false,
  setValue: vi.fn(),
  type: 'text',
  value: 'Value',
};

describe('InputSearch component', () => {
  it('renders the component', () => {
    render(<InputSearch {...mockProps} />);

    const inputElement = screen.getByPlaceholderText('Test Placeholder');
    const labelElement = screen.getByLabelText('Test Placeholder');

    expect(inputElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  });

  it('handles input value correctly', async () => {
    render(<InputSearch {...mockProps} />);
    const inputElement = screen.getByPlaceholderText('Test Placeholder');

    await userEvent.type(inputElement, 'value');

    expect(inputElement).toHaveValue('Value');
  });

  it('handles onFocus callback', () => {
    render(<InputSearch {...mockProps} />);
    const inputElement = screen.getByPlaceholderText('Test Placeholder');

    fireEvent.focus(inputElement);

    expect(mockProps.onFocus).toHaveBeenCalled();
  });

  it('displays error message when errors prop is true', () => {
    render(<InputSearch {...mockProps} error />);

    const errorMessage = screen.getByText('Test Error Message');
    expect(errorMessage).toBeInTheDocument();
  });

  it('clears input value on clear button click', async () => {
    render(<InputSearch {...mockProps} />);
    const inputElement = screen.getByPlaceholderText('Test Placeholder');

    await userEvent.type(inputElement, 'value');

    const clearButton = screen.getByTestId('clear-button');

    expect(inputElement).toHaveValue('Value');
    await userEvent.click(clearButton);

    expect(inputElement).toHaveValue('');
  });
});
