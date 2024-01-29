import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';

// Extend Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// Run cleanup after each test case (e.g., clearing jsdom)
afterEach(() => {
  vi.clearAllMocks();
  cleanup();
});

beforeEach(() => {
  /* eslint-disable-next-line 
  @typescript-eslint/no-explicit-any, 
  @typescript-eslint/no-unnecessary-type-arguments 
  --
  TODO [2024-05-01]:  https://github.com/vitest-dev/vitest/issues/4223
  */
  window.scrollTo = vi.fn<any>();
});
