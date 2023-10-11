import { render, screen } from '@testing-library/react';

import ManyMediaInputs from './ManyInputs';

describe('manyMediaInputs', () => {
  it('renders the many media inputs', () => {
    render(<ManyMediaInputs />);

    const manyMediaComponent = screen.getAllByTestId('manyMediaInputs');
    expect(manyMediaComponent.length).toBeGreaterThan(0);
  });
});
