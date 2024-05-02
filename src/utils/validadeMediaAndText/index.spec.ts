import {
  validateImageAspectRatio,
  validateImageResolution,
  validateMediaSize,
  validateTextLength,
  validateVideoDuration,
  validateVideoResolution,
} from '.';

const mockFileImage = new File([new ArrayBuffer(10 * 10 + 1)], 'mockfile.jpg', {
  type: 'image/jpeg',
});

const mockFileVideo = new File([new ArrayBuffer(10 * 10 + 1)], 'mockfile.mp4', {
  type: 'video/mp4',
});

describe('validate texts', () => {
  it('validate text length', () => {
    const limiteLength = 2000;

    expect(validateTextLength('Bom dia!', limiteLength)).toBe(true);
  });
});

describe('validate medias', () => {
  it('validate media size', () => {
    const limitSize = 9999;

    expect(validateMediaSize(mockFileImage, limitSize)).toBe(true);
  });
});

describe('validate images', () => {
  beforeEach(() => {
    let img = '';
    global.Image = vi.fn().mockImplementation(() => ({
      addEventListener: (event: string, cb: () => void): void => {
        const intervalId = setInterval(() => {
          if (event === 'load' && img) {
            cb();
            clearInterval(intervalId);
          }
        }, 100);
      },
      set src(value: string) {
        setTimeout(() => {
          img = value;
        }, 1000);
      },
    }));
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
    const limiteAspectRatio = 2;

    expect(
      await validateImageAspectRatio(mockFileImage, limiteAspectRatio)
    ).toBe(false);
    await expect(
      validateImageAspectRatio(mockFileVideo, limiteAspectRatio)
    ).rejects.toThrow('File is not a image');
  });
});

describe('validate videos', () => {
  const mockWidth = 1300;
  const mockHeight = 900;
  const mockDuration = 20_000;

  beforeEach(() => {
    let video = '';
    document.createElement = vi
      .fn()
      .mockImplementation((elementType: string) => {
        if (elementType === 'video') {
          return {
            addEventListener: (event: string, cb: () => void): void => {
              const intervalId = setInterval(() => {
                if (event === 'loadeddata' && video) {
                  cb();
                  clearInterval(intervalId);
                }
              }, 100);
            },
            mockDuration,
            mockHeight,
            mockWidth,
            set src(value: string) {
              setTimeout(() => {
                video = value;
              }, 1000);
            },
          };
        }
      });
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
