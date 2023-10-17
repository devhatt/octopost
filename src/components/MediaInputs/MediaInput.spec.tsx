import { render, screen } from '@testing-library/react';

import MediaInputs from './MediaInput';

describe('MediaInputs', () => {
  it('renders the  media inputs', () => {
    render(<MediaInputs />);

    const manyMediaComponent = screen.getAllByTestId('manyMediaInputs');
    expect(manyMediaComponent.length).toBeGreaterThan(0);
  });
});
