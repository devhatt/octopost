import {
  mockFileImage,
  mockFileVideo,
} from '~utils/validateMediaAndText/mocks/mockFiles';
import { mockLoadVideo } from '~utils/validateMediaAndText/mocks/mockLoadVideo';

import {
  validateVideoDuration,
  validateVideoResolution,
} from './validateVideo';

describe('validate videos', () => {
  beforeEach(() => {
    mockLoadVideo();
  });

  it('validate video resolution', async () => {
    const limitWidth = 600;
    const limitHeight = 300;

    expect(
      await validateVideoResolution(mockFileVideo, limitWidth, limitHeight)
    ).toBe(false);
    await expect(
      validateVideoResolution(mockFileImage, limitWidth, limitHeight)
    ).rejects.toThrow('File is not a video');
  });

  it('validate video duration', async () => {
    const limitDuration = 2000;

    expect(await validateVideoDuration(mockFileVideo, limitDuration)).toBe(
      false
    );
    await expect(
      validateVideoDuration(mockFileImage, limitDuration)
    ).rejects.toThrow('File is not a video');
  });
});
