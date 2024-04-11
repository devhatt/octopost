import { expect, test } from '@playwright/experimental-ct-react';

import { InputMediaForTest } from './InputMedia.mock';

test.describe('MediaButton', () => {
  test.describe('when click on input', () => {
    test('changes the image', async ({ mount }) => {
      let mediaSelected: string | null = null;

      const component = await mount(
        <InputMediaForTest
          onChange={(mediaName) => (mediaSelected = mediaName)}
        />
      );

      const imageInput = await component.evaluateHandle(() =>
        document.querySelector('[data-testid="imageInput"]')
      );

      await imageInput.asElement()?.setInputFiles('src/assets/logo.png');

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
        const imageInput = await component.evaluateHandle(() =>
          document.querySelector('[data-testid="imageInput"]')
        );

        await imageInput.asElement()?.setInputFiles('public/robots.txt');

        expect(mediaSelected).toBeNull();
      });
    });
  });
});
