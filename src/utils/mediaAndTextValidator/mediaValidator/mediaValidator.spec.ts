import { mockFileImage, mockFileVideo } from '~mocks/mockMedias/mockFiles';

import { MediaValidator } from './mediaValidator';

const image = new MediaValidator(mockFileImage);
const video = new MediaValidator(mockFileVideo);

describe('check medias', () => {
  it('limit media size', () => {
    const limitSize = 9999;

    expect(image.checkSize(limitSize)).toBe(true);
    expect(video.checkSize(limitSize)).toBe(true);
  });
});
