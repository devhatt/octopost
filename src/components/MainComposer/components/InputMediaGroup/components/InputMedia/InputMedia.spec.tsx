import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputMedia from './InputMedia';

vi.mock('nanoid', () => ({
  nanoid: vi.fn(() => 'sua-string-especifica-aqui'),
}));

describe('InputMedia', () => {
  it('renders the icon', () => {
    render(<InputMedia onChange={vi.fn()} />);
    const icon = screen.getByRole('img');
    expect(icon).toBeInTheDocument();
  });

  test('upload the image', async () => {
    window.URL.createObjectURL = vi.fn();

    const mockOnChange = vi.fn();
    render(<InputMedia onChange={mockOnChange} />);
    const fileInput = screen.getByLabelText('Upload media files');

    const file = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' });
    await userEvent.upload(fileInput, file);

    expect(mockOnChange).toHaveBeenCalledWith([
      { file, id: 'sua-string-especifica-aqui' },
    ]);
  });

  test('upload two images', async () => {
    window.URL.createObjectURL = vi.fn();

    const mockOnChange = vi.fn();
    render(<InputMedia onChange={mockOnChange} />);
    const fileInput = screen.getByLabelText('Upload media files');

    const file = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' });
    await userEvent.upload(fileInput, file);

    const file2 = new File(['(⌐□_□)'], 'test2.png', { type: 'image/png' });
    await userEvent.upload(fileInput, file);

    expect(mockOnChange).toHaveBeenCalledWith([
      { file, id: 'sua-string-especifica-aqui' },
    ]);

    expect(mockOnChange).toHaveBeenCalledWith([
      { file: file2, id: 'sua-string-especifica-aqui' },
    ]);
  });

  describe('when the file is diferent from image or video', () => {
    test('doesnt select the file', async () => {
      window.URL.createObjectURL = vi.fn();

      const mockOnChange = vi.fn();
      render(<InputMedia onChange={mockOnChange} />);
      const fileInput = screen.getByLabelText('Upload media files');

      const file = new File([''], 'filename.txt', { type: 'text/plain' });
      await userEvent.upload(fileInput, file);

      expect(mockOnChange).not.toHaveBeenCalled();
    });
  });

  describe('when clicking the icon', () => {
    it('triggers the file input', async () => {
      render(<InputMedia onChange={vi.fn()} />);

      const icon = screen.getByRole('img');
      await userEvent.click(icon);

      const input = screen.getByLabelText('Upload media files');
      expect(input).toHaveAttribute('type', 'file');
    });
  });
});
