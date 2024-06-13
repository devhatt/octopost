import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputMediaGroup from './InputMediaGroup';

global.URL.createObjectURL = (): string => '';

describe('InputMediaGroup', () => {
  it('renders the media inputs', async () => {
    const user = userEvent.setup();
    render(<InputMediaGroup />);

    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const changeFile = new File(['world'], 'world.png', { type: 'image/png' });

    const input = screen.getByLabelText('Upload media files');
    await user.upload(input, file);

    const changeInput = await screen.findAllByLabelText('Upload media files');
    await user.upload(changeInput[0], changeFile);

    const removeImage = await screen.findByRole('button', { name: /close/i });
    await user.click(removeImage);

    expect(removeImage).not.toBeInTheDocument();
  });
});
