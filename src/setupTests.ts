// add Vitest functions here globally
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

// global mocks
window.scrollTo = vi.fn<unknown[]>();
