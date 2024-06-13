import { mockFileVideo } from '~mocks/mockMedias/mockFiles';
import { mockVideo } from '~mocks/mockMedias/mockVideo';

import { MediaValidators } from '../mediaValidators';

const videoValidator = new MediaValidators(mockFileVideo);

document.createElement = vi
  .fn()
  .mockImplementation(mockVideo(1300, 900, 20_000));

describe('check videos', () => {
  describe('video resolution', () => {
    it('lower resolution limit', async () => {
      const limitWidth = 700;
      const limitHeight = 600;

      expect(await videoValidator.resolution(limitWidth, limitHeight)).toBe(
        false
      );
    });

    it('higher resolution limit', async () => {
      const limitWidth = 1920;
      const limitHeight = 1080;

      expect(await videoValidator.resolution(limitWidth, limitHeight)).toBe(
        true
      );
    });

    it('equal resolution limit', async () => {
      const limitWidth = 1300;
      const limitHeight = 900;

      expect(await videoValidator.resolution(limitWidth, limitHeight)).toBe(
        true
      );
    });
  });

  describe('video aspect ratio', () => {
    it('lower aspect ratio limit', async () => {
      const limitAspectRatio = '4:3';

      expect(await videoValidator.aspectRatio(limitAspectRatio)).toBe(false);
    });

    it('higher aspect ratio limit', async () => {
      const limitAspectRatio = '16:9';

      expect(await videoValidator.aspectRatio(limitAspectRatio)).toBe(true);
    });

    it('equal aspect ratio limit', async () => {
      const limitAspectRatio = '14:9';

      expect(await videoValidator.aspectRatio(limitAspectRatio)).toBe(true);
    });
  });

  describe('video duration', () => {
    it('lower duration limit', async () => {
      const limitDuration = 10_000;

      expect(await videoValidator.duration(limitDuration)).toBe(false);
    });

    it('higher duration limit', async () => {
      const limitDuration = 30_000;

      expect(await videoValidator.duration(limitDuration)).toBe(true);
    });

    it('equal duration limit', async () => {
      const limitDuration = 20_000;

      expect(await videoValidator.duration(limitDuration)).toBe(true);
    });
  });
});
