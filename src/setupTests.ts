// add Vitest functions here globally
import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { expect, afterEach } from 'vitest';

// Extend Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// Run cleanup after each test case (e.g., clearing jsdom)
afterEach(() => {
  vi.clearAllMocks();
  cleanup();
});

beforeEach(() => {
  // https://github.com/vitest-dev/vitest/issues/4223
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  window.scrollTo = vi.fn<any>();
});
