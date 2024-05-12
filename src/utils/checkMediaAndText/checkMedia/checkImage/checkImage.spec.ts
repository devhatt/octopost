import {
  mockFileImage,
  mockFileVideo,
} from '~utils/checkMediaAndText/mocks/mockFiles';
import { mockLoadImage } from '~utils/checkMediaAndText/mocks/mockLoadMedia';

import { checkImageAspectRatio, checkImageResolution } from './checkImage';

global.Image = vi.fn().mockImplementation(mockLoadImage);

describe('check images', () => {
  it('limit images resolution', async () => {
    const limitWidth = 1920;
    const limitHeight = 1080;

    expect(
      await checkImageResolution(mockFileImage, limitWidth, limitHeight)
    ).toBe(false);
    await expect(
      checkImageResolution(mockFileVideo, limitWidth, limitHeight)
    ).rejects.toThrow('File is not a image');
  });

  it('limit image aspect ratio', async () => {
    const limitAspectRatio = '16x9';

    expect(await checkImageAspectRatio(mockFileImage, limitAspectRatio)).toBe(
      false
    );
    await expect(
      checkImageAspectRatio(mockFileVideo, limitAspectRatio)
    ).rejects.toThrow('File is not a image');
  });
});
