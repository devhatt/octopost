import { mockFileImage, mockFileVideo } from '../mocks/mockFiles';
import { checkMediaSize } from './checkMedia';

describe('check medias', () => {
  it('limit media size', () => {
    const limitSize = 9999;

    expect(checkMediaSize(mockFileImage, limitSize)).toBe(true);
    expect(checkMediaSize(mockFileVideo, limitSize)).toBe(true);
  });
});
