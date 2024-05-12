import { LoadImage, LoadVideo } from './mockLoadMedia.type';

const intervalTime = 100;
const timeoutTime = 1000;

export function mockLoadImage(): LoadImage {
  let img = '';

  return {
    addEventListener: (event: string, cb: () => void): void => {
      const intervalId = setInterval(() => {
        if (event === 'load' && img) {
          cb();
          clearInterval(intervalId);
        }
      }, intervalTime);
    },
    set src(value: string) {
      setTimeout(() => {
        img = value;
      }, timeoutTime);
    },
  };
}

export function mockLoadVideo(width: number, height: number, duration: number) {
  let video = '';

  return (elementType: string): LoadVideo | undefined => {
    if (elementType === 'video') {
      return {
        addEventListener: (event: string, cb: () => void): void => {
          const intervalId = setInterval(() => {
            if (event === 'loadeddata' && video) {
              cb();
              clearInterval(intervalId);
            }
          }, intervalTime);
        },
        duration,
        height,
        set src(value: string) {
          setTimeout(() => {
            video = value;
          }, timeoutTime);
        },
        width,
      };
    }
  };
}
