import { Video } from './mockMedia.type';

const intervalTime = 100;
const timeoutTime = 1000;

export function mockVideo(width: number, height: number, duration: number) {
  let video = '';

  return (elementType: string): Video | undefined => {
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
