import { render, fireEvent, screen, act } from '@testing-library/react';

import CustomTextArea from './TextArea';

describe('CustomTextArea', () => {
  const mockOnChange = jest.fn();
  it('renders the component textarea', () => {
    render(<CustomTextArea onTextChange={mockOnChange} />);

    const inputElement = screen.getByPlaceholderText('Digite algo aqui...');
    expect(inputElement).toBeInTheDocument();
  });

  it('updates input value when typing', () => {
    render(<CustomTextArea onTextChange={mockOnChange} />);

    const inputElement = screen.getByPlaceholderText(
      'Digite algo aqui...'
    ) as HTMLInputElement;
    const testInputValue = 'Testing TextArea input';
    act(() => {
      fireEvent.change(inputElement, { target: { value: testInputValue } });
    });

    expect(inputElement.value).toBe(testInputValue);
    expect(mockOnChange).toHaveBeenCalledWith(testInputValue);
  });
});
