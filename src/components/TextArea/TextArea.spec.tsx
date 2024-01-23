import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CustomTextArea from './TextArea';

describe('CustomTextArea', () => {
  const mockOnChange = vi.fn();

  it('renders the component textarea', () => {
    render(<CustomTextArea onTextChange={mockOnChange} />);

    const inputElement = screen.getByPlaceholderText('Digite algo aqui...');
    expect(inputElement).toBeInTheDocument();
  });

  it('updates input value when typing', async () => {
    render(<CustomTextArea onTextChange={mockOnChange} />);

    const inputElement: HTMLInputElement = screen.getByPlaceholderText(
      'Digite algo aqui...'
    );
    const testInputValue = 'Testing TextArea input';

    await userEvent.type(inputElement, testInputValue);

    expect(inputElement.value).toBe(testInputValue);
    expect(mockOnChange).toHaveBeenCalledWith(testInputValue);
  });
});
