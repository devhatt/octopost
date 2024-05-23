import { Image } from './mockMedia.type';

const intervalTime = 100;
const timeoutTime = 1000;

export function mockImage(): Image {
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
