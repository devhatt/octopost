import {
  mockFileImage,
  mockFileVideo,
} from '~utils/checkMediaAndText/mocks/mockFiles';
import { mockLoadVideo } from '~utils/checkMediaAndText/mocks/mockLoadMedia';

import { checkVideoDuration, checkVideoResolution } from './checkVideo';

document.createElement = vi
  .fn()
  .mockImplementation(mockLoadVideo(1300, 900, 20_000));

describe('check videos', () => {
  it('limit video resolution', async () => {
    const limitWidth = 600;
    const limitHeight = 300;

    expect(
      await checkVideoResolution(mockFileVideo, limitWidth, limitHeight)
    ).toBe(false);
    await expect(
      checkVideoResolution(mockFileImage, limitWidth, limitHeight)
    ).rejects.toThrow('File is not a video');
  });

  it('limit video duration', async () => {
    const limitDuration = 2000;

    expect(await checkVideoDuration(mockFileVideo, limitDuration)).toBe(false);
    await expect(
      checkVideoDuration(mockFileImage, limitDuration)
    ).rejects.toThrow('File is not a video');
  });
});
