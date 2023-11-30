import { render, screen } from '@testing-library/react';

import MediaInputs from './MediaInput';

vi.mock('nanoid', () => {
  return {
    nanoid: vi.fn(() => 'sua-string-especifica-aqui'),
  };
});

describe('MediaInputs', () => {
  it('renders the  media inputs', () => {
    render(<MediaInputs />);

    const manyMediaComponent = screen.getAllByTestId('manyMediaInputs');
    expect(manyMediaComponent.length).toBeGreaterThan(0);
  });
});
