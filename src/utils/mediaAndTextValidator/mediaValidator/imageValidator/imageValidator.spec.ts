import { mockFileImage } from '~mocks/mockMedias/mockFiles';
import { mockImage } from '~mocks/mockMedias/mockImage';

import { MediaValidator } from '../mediaValidator';

const imageValidator = new MediaValidator(mockFileImage);
global.Image = vi.fn().mockImplementation(mockImage);

describe('check images', () => {
  it('limit images resolution', async () => {
    const limitWidth = 1920;
    const limitHeight = 1080;

    expect(await imageValidator.resolution(limitWidth, limitHeight)).toBe(
      false
    );
  });

  it('limit image aspect ratio', async () => {
    const limitAspectRatio = '16x9';

    expect(await imageValidator.aspectRatio(limitAspectRatio)).toBe(false);
  });
});
