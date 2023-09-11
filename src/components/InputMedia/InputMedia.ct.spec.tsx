import { test, expect } from '@playwright/experimental-ct-react';

import InputMedia from './InputMedia';

test.describe('InputMedia', () => {
  test.describe('when click on input', () => {
    test('changes the image', async ({ mount }) => {
      const component = await mount(<InputMedia />);
      await component
        .locator('#imageInput')
        .setInputFiles('src/assets/logo.png');
      await expect(component.getByAltText(/selected image/i)).toBeVisible();
    });

    test.describe('when the file is diferent from image or video', () => {
      test('doesnt select the file', async ({ mount }) => {
        const component = await mount(<InputMedia />);
        await component
          .locator('#imageInput')
          .setInputFiles('public/robots.txt');
        await expect(component.getByAltText(/selected image/i)).toBeHidden();
      });
    });
  });
});
