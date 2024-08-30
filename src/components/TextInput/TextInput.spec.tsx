import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextInput from './TextInput';

const mockProps = {
  error: false,
  handleClear: vi.fn(),
  label: 'Test Label',
  name: 'testInput',
  onChange: vi.fn(),
  onFocus: vi.fn(),
  placeholder: 'Test Placeholder',
  readonly: false,
  required: false,
  setValue: vi.fn(),
  supportText: 'Test Error Message',
  type: 'text',
  value: 'Value',
};

describe('TextInput component', () => {
  it('renders the component', () => {
    render(<TextInput {...mockProps} />);

    const inputElement = screen.getByPlaceholderText('Test Placeholder');
    const labelElement = screen.getByText('Test Label');

    expect(inputElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  });

  it('handles onFocus callback', async () => {
    render(<TextInput {...mockProps} />);
    const inputElement = screen.getByPlaceholderText('Test Placeholder');

    await userEvent.click(inputElement);

    expect(mockProps.onFocus).toHaveBeenCalled();
  });

  it('displays error message when errors prop is true', () => {
    render(<TextInput {...mockProps} error />);

    const errorMessage = screen.getByText('Test Error Message');
    expect(errorMessage).toBeInTheDocument();
  });
});
