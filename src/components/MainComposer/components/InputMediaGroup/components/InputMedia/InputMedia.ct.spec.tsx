import { expect, test } from '@playwright/experimental-ct-react';

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
        .getByLabel('Upload media files')
        .setInputFiles('src/assets/logo.png');

      await expect.poll(() => mediaSelected).toBe('logo.png');
    });

    test.describe('when the file is diferent from image or video', () => {
      test('doesnt select the file', async ({ mount }) => {
        let mediaSelected: string | null = null;

        const component = await mount(
          <InputMediaForTest
            onChange={(mediaName) => (mediaSelected = mediaName)}
          />
        );
        await component
          .getByLabel('Upload media files')
          .setInputFiles('public/robots.txt');
        await expect(mediaSelected).toBeNull();
      });
    });
  });
});
