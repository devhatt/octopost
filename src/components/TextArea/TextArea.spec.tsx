import { render, fireEvent, screen } from '@testing-library/react';

import CustomTextArea from './TextArea';

describe('CustomTextArea', () => {
  it('should render the component textarea', () => {
    const mockOnChange = jest.fn();
    render(<CustomTextArea onTextChange={mockOnChange} />);

    const inputElement = screen.getByPlaceholderText('Digite algo aqui...');
    expect(inputElement).toBeInTheDocument();
  });

  it('should update input value when typing', () => {
    const mockOnChange = jest.fn();
    render(<CustomTextArea onTextChange={mockOnChange} />);

    const inputElement = screen.getByPlaceholderText(
      'Digite algo aqui...'
    ) as HTMLInputElement;
    const testInputValue = 'Testing TextArea input';
    fireEvent.change(inputElement, { target: { value: testInputValue } });

    expect(inputElement.value).toBe(testInputValue);
    expect(mockOnChange).toHaveBeenCalledWith(testInputValue);
  });
});
