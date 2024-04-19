import { expect, test } from '@playwright/experimental-ct-react';

import InputMediaGroup from './InputMediaGroup';

test.describe('ManyInputs', () => {
  test.describe('when click on input', () => {
    test('upload the image', async ({ mount }) => {
      const component = await mount(<InputMediaGroup />);

      await component
        .getByTestId('imageInput')
        .setInputFiles('src/assets/logo.png');

      await expect(component.getByAltText('logo.png')).toBeVisible();
    });

    test('upload two images', async ({ mount }) => {
      const component = await mount(<InputMediaGroup />);

      await component
        .getByTestId('imageInput')
        .setInputFiles(['src/assets/logo.png', 'src/assets/imagetest.jpg']);

      await expect(component.getByAltText('logo.png')).toBeVisible();
      await expect(component.getByAltText('imagetest.jpg')).toBeVisible();
    });

    test.describe('when the file is diferent from image or video', () => {
      test('doesnt select the file', async ({ mount }) => {
        const mediaSelected: string | null = null;

        const component = await mount(<InputMediaGroup />);
        await component
          .getByTestId('imageInput')
          .setInputFiles('public/robots.txt');
        expect(mediaSelected).toBeNull();
      });
    });

    test.describe('when add img and click on remove button', () => {
      test('remove image', async ({ mount }) => {
        const component = await mount(<InputMediaGroup />);

        await component
          .getByTestId('imageInput')
          .setInputFiles('src/assets/logo.png');

        await expect(component.getByAltText('logo.png')).toBeHidden();

        await component.getByTestId('closeButton').click();

        await expect(component.getByAltText('logo.png')).not.toBeVisible();
      });
    });
  });
});
