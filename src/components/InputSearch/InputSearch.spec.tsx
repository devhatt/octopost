import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import InputSearch from './InputSearch';

// Mock das props
const mockProps = {
  name: 'testInput',
  placeholder: 'Test Placeholder',
  type: 'text',
  readonly: false,
  value: '',
  onFocus: jest.fn(),
  errorMessage: 'Test Error Message',
  errors: false,
};

test('renders InputSearch component', () => {
  const { getByLabelText, getByPlaceholderText } = render(
    <InputSearch {...mockProps} />
  );

  const inputElement = getByPlaceholderText('Test Placeholder');
  const labelElement = getByLabelText('Test Placeholder');

  expect(inputElement).toBeInTheDocument();
  expect(labelElement).toBeInTheDocument();
});

test('handles input value correctly', () => {
  const { getByPlaceholderText } = render(<InputSearch {...mockProps} />);
  const inputElement = getByPlaceholderText('Test Placeholder');

  fireEvent.change(inputElement, { target: { value: 'Test Value' } });

  expect(inputElement.value).toBe('Test Value');
});

test('handles onFocus callback', () => {
  const { getByPlaceholderText } = render(<InputSearch {...mockProps} />);
  const inputElement = getByPlaceholderText('Test Placeholder');

  fireEvent.focus(inputElement);

  expect(mockProps.onFocus).toHaveBeenCalled();
});

test('displays error message when errors prop is true', () => {
  const { getByText } = render(<InputSearch {...mockProps} errors={true} />);

  const errorMessage = getByText('Test Error Message');
  expect(errorMessage).toBeInTheDocument();
});

test('clears input value on clear button click', () => {
  const { getByPlaceholderText, getByTestId } = render(
    <InputSearch {...mockProps} />
  );
  const inputElement = getByPlaceholderText('Test Placeholder');
  const clearButton = getByTestId('clear-button');

  fireEvent.change(inputElement, { target: { value: 'Test Value' } });

  expect(inputElement.value).toBe('Test Value');

  fireEvent.click(clearButton);

  expect(inputElement.value).toBe('');
});
