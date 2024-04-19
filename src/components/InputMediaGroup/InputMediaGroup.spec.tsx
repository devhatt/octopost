import { render, screen } from '@testing-library/react';

import InputMediaGroup from './InputMediaGroup';

vi.mock('nanoid', () => ({
  nanoid: vi.fn(() => 'sua-string-especifica-aqui'),
}));

describe('MediaInputs', () => {
  it('renders the  media inputs', () => {
    render(<InputMediaGroup />);
    const manyMediaInputsLength = 0;

    const manyMediaComponent = screen.getAllByTestId('manyMediaInputs');
    expect(manyMediaComponent.length).toBeGreaterThan(manyMediaInputsLength);
  });
});
