import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MainComposer from './MainComposer';

describe('MainComposer', () => {
  // describe('MediaInputs', async () => {
  //   describe('when add img and click on remove button', () => {
  //     test('remove image', () => {
  //       const component = render(<MainComposer isOpen title="Main Content" />);
  
  //       screen.getByTestId('removeFile').click();
  
  //       expect(
  //         component.getByAltText('uploaded image logo.png')
  //       ).not.toBeVisible();
  //     });
  //   });
  // });

  describe('when component loads', () => {
    it('MediaInputs must be visible when component starts', async () => {
      render(<MainComposer isOpen title="main content" />);

      const mediaInputs = screen.getByTestId('mediaInputs');
      expect(mediaInputs).toBeInTheDocument();
    });
  });
});
