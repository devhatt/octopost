import { mockFileImage } from '../mocks/mockFiles';
import { validateMediaSize } from './validateMedia';

describe('validate medias', () => {
  it('validate media size', () => {
    const limitSize = 9999;

    expect(validateMediaSize(mockFileImage, limitSize)).toBe(true);
  });
});
