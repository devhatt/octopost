import { vi } from 'vitest';

const mockWidth = 1300;
const mockHeight = 900;
const mockDuration = 20_000;

export function mockLoadVideo(): void {
  let video = '';
  const intervalTime = 100;
  const timeoutTime = 1000;
  document.createElement = vi.fn().mockImplementation((elementType: string) => {
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
        mockDuration,
        mockHeight,
        mockWidth,
        set src(value: string) {
          setTimeout(() => {
            video = value;
          }, timeoutTime);
        },
      };
    }
  });
}
