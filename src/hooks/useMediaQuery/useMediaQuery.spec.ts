import { renderHook } from '@testing-library/react';

import { useMediaQuery } from './useMediaQuery';

vi.mock('../../styles/breakpoints.module.scss', () => ({
  default: {
    desktopScreen: '1240px',
    largeDesktopScreen: '1440px',
    phoneScreen: '600px',
    tabletScreen: '905px',
  },
}));

window.matchMedia = vi.fn().mockImplementation((query: string) => {
  const width = window.innerWidth;
  const queryValue = query.match(/\d+/g) as RegExpMatchArray;
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
    window.innerWidth = 800;

    const queryString = 'from600';
    const { result } = renderHook(() => useMediaQuery(queryString));

    expect(result.current).toBe(true);
  });

  it('should return false for non-matching media query', () => {
    window.innerWidth = 500;

    const queryString = 'from600';
    const { result } = renderHook(() => useMediaQuery(queryString));

    expect(result.current).toBe(false);
  });
});
