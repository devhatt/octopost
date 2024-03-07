import { renderHook } from '@testing-library/react';

import { useMediaQuery } from './useMediaQuery';

// window.matchMedia = vi.fn().mockImplementation(query => ({
//     addEventListener: vi.fn(),
//     addListener: vi.fn(),
//     matches: false, // <- red-flag
//     removeEventListener: vi.fn(),
//     removeListener: vi.fn()
//   }));

describe('useMediaQuery', () => {
  it('should return true for matching media query', () => {
    // Simulate a screen with width greater than 600px
    window.innerWidth = 800;

    const queryString = '600px';
    const { result } = renderHook(() => useMediaQuery(queryString));

    expect(result.current).toBe(true);
  });

  it('should return false for non-matching media query', () => {
    // Simulate a screen with width less than 600px
    window.innerWidth = 500;

    const queryString = '600px';
    const { result } = renderHook(() => useMediaQuery(queryString));

    expect(result.current).toBe(false);
  });
});
