import { renderHook } from '@testing-library/react';

import { useMediaQuery } from './useMediaQuery';

describe('useMediaQuery', () => {
  it('should return true for matching media query', () => {
    // Simulate a screen with width greater than 600px
    window.innerWidth = 800;

    const queryString = 'min-width: 600px';
    const { result } = renderHook(() => useMediaQuery(queryString));

    expect(result.current).toBe(true);
  });

  it('should return false for non-matching media query', () => {
    // Simulate a screen with width less than 600px
    window.innerWidth = 500;

    const queryString = 'min-width: 600px';
    const { result } = renderHook(() => useMediaQuery(queryString));

    expect(result.current).toBe(false);
  });
});
