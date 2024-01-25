import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputMedia from '~components/InputMedia/InputMedia';

import MediaInputs from './MediaInput';

vi.mock('nanoid', () => ({
  nanoid: vi.fn(() => 'sua-string-especifica-aqui'),
}));

describe('MediaInputs', () => {
  it('renders the  media inputs', () => {
    render(<MediaInputs />);

    const manyMediaComponent = screen.getAllByTestId('manyMediaInputs');
    expect(manyMediaComponent.length).toBeGreaterThan(0);
  });
});
