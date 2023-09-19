import { fireEvent, render, screen } from '@testing-library/react';

import ManyMediaInputs from './ManyInputs';

describe('manyMediaInputs', () => {
  window.URL.createObjectURL = jest.fn();

  afterEach(() => {
    jest.spyOn(window.URL, 'createObjectURL').mockReset();
  });

  let files: File[];

  beforeEach(() => {
    files = [
      new File(['image content 1'], 'image1.png', {
        type: 'image/png',
      }),
      new File(['image content 2'], 'image2.png', {
        type: 'image/png',
      }),
      new File(['image content 3'], 'image3.png', {
        type: 'image/png',
      }),
    ];
  });

  it('renders the many media inputs', () => {
    render(<ManyMediaInputs />);

    const manyMediaComponent = screen.getAllByTestId('manyMediaInputs');
    expect(manyMediaComponent.length).toBeGreaterThan(0);
  });

  it('upload image', () => {
    render(<ManyMediaInputs />);

    const imageInput = screen.getByTestId('imageInput') as HTMLInputElement;

    fireEvent.change(imageInput, { target: { files } });
  });
});
