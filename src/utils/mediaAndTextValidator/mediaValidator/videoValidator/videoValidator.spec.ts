import { mockFileVideo } from '~mocks/mockMedias/mockFiles';
import { mockVideo } from '~mocks/mockMedias/mockVideo';

import { MediaValidator } from '../mediaValidator';

const video = new MediaValidator(mockFileVideo);

document.createElement = vi
  .fn()
  .mockImplementation(mockVideo(1300, 900, 20_000));

describe('check videos', () => {
  it('limit video resolution', async () => {
    const limitWidth = 600;
    const limitHeight = 300;

    expect(await video.resolution(limitWidth, limitHeight)).toBe(false);
  });

  it('limit video duration', async () => {
    const limitDuration = 2000;

    expect(await video.duration(limitDuration)).toBe(false);
  });
});
