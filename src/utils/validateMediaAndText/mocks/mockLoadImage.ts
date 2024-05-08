import { vi } from 'vitest';

export function mockLoadImage(): void {
  let img = '';
  const intervalTime = 100;
  const timeoutTime = 1000;
  global.Image = vi.fn().mockImplementation(() => ({
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
  }));
}
