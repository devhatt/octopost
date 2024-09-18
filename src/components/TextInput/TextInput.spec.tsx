import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextInput from './TextInput';

const mockProps = {
  error: false,
  label: 'Test Label',
  name: 'testInput',
  onChange: vi.fn(),
  onFocus: vi.fn(),
  placeholder: 'Test Placeholder',
  required: false,
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

  it('call right icon action correctly', async () => {
    const handleRightIconClickMock = vi.fn();
    render(
      <TextInput
        {...mockProps}
        handleRightIconClick={handleRightIconClickMock}
        rightIcon="close"
      />
    );

    const icon = screen.getByRole('button');

    await userEvent.click(icon);

    expect(handleRightIconClickMock).toHaveBeenCalled();
  });
});
