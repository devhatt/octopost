import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ComposerEditor from './ComposerEditor';

describe('ComposeEditor', () => {
  describe('when render component', () => {
    it('should mount a textbox', () => {
      render(<ComposerEditor inputText="" onTextChange={() => {}} />);

      const textArea = screen.getByRole('textbox');

      expect(textArea).toBeInTheDocument();
    });
  });

  describe('When user type', () => {
    it('update input value', async () => {
      const mockOnChange = vi.fn();
      render(<ComposerEditor inputText="" onTextChange={mockOnChange} />);

      const inputElement = screen.getByRole('textbox');
      const testInputValue = 'Testing TextArea input';

      await userEvent.type(inputElement, testInputValue);

      expect(inputElement).toHaveValue(testInputValue);
      expect(mockOnChange).toHaveBeenCalledWith(testInputValue);
    });
  });
});
