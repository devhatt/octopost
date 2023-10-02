import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import InputSearch from './InputSearch';

// Mock das props
const mockProps = {
  name: 'testInput',
  type: 'text',
  value: '',
  required: false,
  placeholder: 'Test Placeholder',
  errorMessage: 'Test Error Message',
  readonly: false,
  errors: false,
  onFocus: jest.fn(),
  handleClear: jest.fn(),
  onChange: jest.fn(),
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
    const { getByText } = render(<InputSearch {...mockProps} errors={true} />);

    const errorMessage = getByText('Test Error Message');
    expect(errorMessage).toBeInTheDocument();
  });

  it('clears input value on clear button click', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <InputSearch {...mockProps} />
    );
    const inputElement = getByPlaceholderText(
      'Test Placeholder'
    ) as HTMLInputElement;
    const clearButton = getByTestId('clear-button');

    fireEvent.change(inputElement, { target: { value: 'Value' } });

    expect(inputElement.value).toBe('Value');

    fireEvent.click(clearButton);

    expect(inputElement.value).toBe('');
  });
});
