import { renderHook } from '@testing-library/react';

import { useMediaQuery } from './useMediaQuery';

window.matchMedia = vi.fn().mockImplementation((query: string) => {
  const width = window.innerWidth; // Returns the size of the screen
  const queryValue = query.match(/\d+/g) as RegExpMatchArray; // converts (min-width: 600px) to ['600']
  const matches = width >= Number(queryValue[0]);

  return {
    addEventListener: vi.fn(),
    addListener: vi.fn(),
    matches: matches,
    removeEventListener: vi.fn(),
    removeListener: vi.fn(),
  };
});

describe('useMediaQuery', () => {
  it('should return true for matching media query', () => {
    // Simulate a screen with width greater than sm
    window.innerWidth = 800;

    const queryString = 'from600';
    const { result } = renderHook(() => useMediaQuery(queryString));

    expect(result.current).toBe(true);
  });

  it('should return false for non-matching media query', () => {
    // Simulate a screen with width less than sm
    window.innerWidth = 500;

    const queryString = 'from600';
    const { result } = renderHook(() => useMediaQuery(queryString));

    expect(result.current).toBe(false);
  });
});
