import { fireEvent, render } from '@testing-library/react';

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
    const { getByLabelText, getByPlaceholderText } = render(
      <InputSearch {...mockProps} />
    );

    const inputElement = getByPlaceholderText('Test Placeholder');
    const labelElement = getByLabelText('Test Placeholder');

    expect(inputElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  });

  it('handles input value correctly', () => {
    const { getByPlaceholderText } = render(<InputSearch {...mockProps} />);
    const inputElement = getByPlaceholderText(
      'Test Placeholder'
    ) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'Value' } });

    expect(inputElement.value).toBe('Value');
  });

  it('handles onFocus callback', () => {
    const { getByPlaceholderText } = render(<InputSearch {...mockProps} />);
    const inputElement = getByPlaceholderText('Test Placeholder');

    fireEvent.focus(inputElement);

    expect(mockProps.onFocus).toHaveBeenCalled();
  });

  it('displays error message when errors prop is true', () => {
    const { getByText } = render(<InputSearch {...mockProps} error />);

    const errorMessage = getByText('Test Error Message');
    expect(errorMessage).toBeInTheDocument();
  });

  it('clears input value on clear button click', async () => {
    const { getByPlaceholderText, queryByTestId } = render(
      <InputSearch {...mockProps} />
    );
    const inputElement = getByPlaceholderText(
      'Test Placeholder'
    ) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'Value' } });

    const clearButton = queryByTestId('clear-button') as HTMLButtonElement;

    expect(inputElement.value).toBe('Value');
    fireEvent.click(clearButton);

    expect(inputElement.value).toBe('');
  });
});
