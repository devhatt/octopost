import {
  mockFileImage,
  mockFileVideo,
} from '~utils/validateMediaAndText/mocks/mockFiles';
import { mockLoadImage } from '~utils/validateMediaAndText/mocks/mockLoadImage';

import {
  validateImageAspectRatio,
  validateImageResolution,
} from './validateImage';

describe('validate images', () => {
  beforeEach(() => {
    mockLoadImage();
  });

  it('validate image resolution', async () => {
    const limitWidth = 1920;
    const limitHeight = 1080;

    expect(
      await validateImageResolution(mockFileImage, limitWidth, limitHeight)
    ).toBe(false);
    await expect(
      validateImageResolution(mockFileVideo, limitWidth, limitHeight)
    ).rejects.toThrow('File is not a image');
  });

  it('validate image aspect ratio', async () => {
    const limitAspectRatio = '16x9';

    expect(
      await validateImageAspectRatio(mockFileImage, limitAspectRatio)
    ).toBe(false);
    await expect(
      validateImageAspectRatio(mockFileVideo, limitAspectRatio)
    ).rejects.toThrow('File is not a image');
  });
});
