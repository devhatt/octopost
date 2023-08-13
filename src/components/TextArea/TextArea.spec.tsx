import { render, fireEvent, screen } from '@testing-library/react';

import CustomTextArea from './TextArea';

describe('Textarea Component', () => {
  it('textarea worked', () => {
    render(<CustomTextArea />);
    const textAreaElement = screen.getByPlaceholderText('Digite algo aqui...');

    expect(textAreaElement).toBeInTheDocument();
  });

  it('update input value when typed', () => {
    const { getByPlaceholderText } = render(<CustomTextArea />);
    const inputElement = getByPlaceholderText(
      'Digite algo aqui...'
    ) as HTMLTextAreaElement;

    fireEvent.change(inputElement, { target: { value: 'Test Input' } });

    expect(inputElement.value).toBe('Test Input');
  });
});
