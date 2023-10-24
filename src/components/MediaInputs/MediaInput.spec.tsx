import { render, screen } from '@testing-library/react';

import MediaInputs from './MediaInput';

jest.mock('nanoid', () => {
  return {
    nanoid: jest.fn(() => 'sua-string-especifica-aqui'),
  };
});

describe('MediaInputs', () => {
  it('renders the  media inputs', () => {
    render(<MediaInputs />);

    const manyMediaComponent = screen.getAllByTestId('manyMediaInputs');
    expect(manyMediaComponent.length).toBeGreaterThan(0);
  });
});
