import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CustomInputRef } from './CustomInput';

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

// TODO #380: Desejo trocar as desestruturações do componente render para usar diretamente no screen em todos esses métodos
describe('InputSearch component', () => {
  let user = userEvent.setup();

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renders the component', () => {
    render(<CustomInputRef {...mockProps} />);

    const inputElement = screen.getByPlaceholderText('Test Placeholder');
    const labelElement = screen.getByLabelText('Test Placeholder');

    expect(inputElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  });

  it('handles input value correctly', async () => {
    render(<CustomInputRef {...mockProps} />);

    const inputElement = screen.getByPlaceholderText('Test Placeholder');

    await user.type(inputElement, 'value');

    expect(inputElement).toHaveValue('value');
  });

  it('handles onFocus callback', async () => {
    render(<CustomInputRef {...mockProps} />);
    const inputElement = screen.getByPlaceholderText('Test Placeholder');

    await userEvent.click(inputElement);

    expect(mockProps.onFocus).toHaveBeenCalled();
  });

  it('displays error message when errors prop is true', () => {
    render(<CustomInputRef {...mockProps} error />);

    const errorMessage = screen.getByText('Test Error Message');
    expect(errorMessage).toBeInTheDocument();
  });

  it('clears input value on clear button click', async () => {
    render(<CustomInputRef {...mockProps} />);
    const inputElement = screen.getByPlaceholderText('Test Placeholder');

    await userEvent.type(inputElement, 'Value');

    const clearButton = screen.queryByTestId(
      'clear-button'
    ) as HTMLButtonElement;

    expect(inputElement).toHaveValue('Value');
    await userEvent.click(clearButton);

    expect(inputElement).toHaveValue('');
  });
});
