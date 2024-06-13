import { mockFileImage } from '~mocks/mockMedias/mockFiles';
import { mockImage } from '~mocks/mockMedias/mockImage';

import { MediaValidators } from '../mediaValidators';

const imageValidator = new MediaValidators(mockFileImage);
global.Image = vi.fn().mockImplementation(mockImage);

describe('check images', () => {
  describe('image resolution', () => {
    it('lower resolution limit', async () => {
      const limitWidth = 700;
      const limitHeight = 600;

      expect(await imageValidator.resolution(limitWidth, limitHeight)).toBe(
        false
      );
    });

    it('higher resolution limit', async () => {
      const limitWidth = 1920;
      const limitHeight = 1080;

      expect(await imageValidator.resolution(limitWidth, limitHeight)).toBe(
        true
      );
    });

    it('equal resolution limit', async () => {
      const limitWidth = 1300;
      const limitHeight = 900;

      expect(await imageValidator.resolution(limitWidth, limitHeight)).toBe(
        true
      );
    });
  });

  describe('image aspect ratio', () => {
    it('lower aspect ratio limit', async () => {
      const limitAspectRatio = '4:3';

      expect(await imageValidator.aspectRatio(limitAspectRatio)).toBe(false);
    });

    it('highr aspect ratio limit', async () => {
      const limitAspectRatio = '16:9';

      expect(await imageValidator.aspectRatio(limitAspectRatio)).toBe(true);
    });

    it('equal aspect ratio limit', async () => {
      const limitAspectRatio = '14:9';

      expect(await imageValidator.aspectRatio(limitAspectRatio)).toBe(true);
    });
  });
});
