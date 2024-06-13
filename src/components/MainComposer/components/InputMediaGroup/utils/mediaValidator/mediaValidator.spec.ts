import { mockFileImage, mockFileVideo } from '~mocks/mockMedias/mockFiles';

import { MediaValidators } from './mediaValidators';

const imageValidator = new MediaValidators(mockFileImage);
const videoValidator = new MediaValidators(mockFileVideo);

describe('check medias', () => {
  describe('check image', () => {
    it('lower media limit', () => {
      const limitSize = 100;

      expect(imageValidator.size(limitSize)).toBe(false);
    });

    it('higher media limit', () => {
      const limitSize = 20_000;

      expect(imageValidator.size(limitSize)).toBe(true);
    });

    it('equal media limit', () => {
      const limitSize = 10_000;

      expect(imageValidator.size(limitSize)).toBe(true);
    });
  });

  describe('check video', () => {
    it('lower media limit', () => {
      const limitSize = 100;

      expect(videoValidator.size(limitSize)).toBe(false);
    });

    it('higher media limit', () => {
      const limitSize = 20_000;

      expect(videoValidator.size(limitSize)).toBe(true);
    });

    it('equal media limit', () => {
      const limitSize = 10_000;

      expect(videoValidator.size(limitSize)).toBe(true);
    });
  });
});
