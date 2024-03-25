import { render, screen } from '@testing-library/react';

import InputMediaComposer from './InputMediaComposer';

vi.mock('nanoid', () => ({
  nanoid: vi.fn(() => 'sua-string-especifica-aqui'),
}));

describe('MediaInputs', () => {
  it('renders the  media inputs', () => {
    render(<InputMediaComposer />);

    const manyMediaComponent = screen.getAllByTestId('manyMediaInputs');
    expect(manyMediaComponent.length).toBeGreaterThan(0);
  });
});
