import { render, screen } from '@testing-library/react';

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

  // describe('when add img and click on remove button', () => {
  //   test('remove image', () => {
  //     render(<MediaInputs />);

  //     screen.getByTestId('removeFile').click();

  //     console.log(result);
  //     // expect(component).not.toBeVisible();
  //   });
  // });
});
