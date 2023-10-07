import { test, expect } from '@playwright/experimental-ct-react';

import InputMedia from './InputMedia';

import { InputMediaForTest } from './InputMedia.mock';

test.describe('InputMedia', () => {
  test.describe('when click on input', () => {
    test('changes the image', async ({ mount }) => {
      let mediaSelected: string | null = null;

      const component = await mount(
        <InputMediaForTest
          onChange={(mediaName) => (mediaSelected = mediaName)}
        />
      );

      await component
        .getByTestId('imageInput')
        .setInputFiles('src/assets/logo.png');

      await expect(component.getByAltText(/selected image/i)).toBeVisible();
      await expect.poll(() => mediaSelected).toBe('logo.png');
    });

    test.describe('when the file is diferent from image or video', () => {
      test('doesnt select the file', async ({ mount }) => {
        const component = await mount(<InputMedia onChange={() => {}} />);
        await component
          .getByTestId('imageInput')
          .setInputFiles('public/robots.txt');
        await expect(component.getByAltText(/selected image/i)).toBeHidden();
      });
    });
  });
});
