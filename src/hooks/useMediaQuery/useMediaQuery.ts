import { useEffect, useState } from 'react';

// Reference: src/styles/breakpoints.scss
const breakpoints = {
  lg: '1240px',
  md: '905px',
  sm: '600px',
  xl: '1440px',
} as const;

type Breakpoints = keyof typeof breakpoints;

/**
 * Hook to match the media query.
 * @param {Breakpoints} query The media query string. Should be in the format `sm`, `md`, `lg`, `xl`.
 * @returns {boolean} Returns true if the media query matches, otherwise false.
 */
export function useMediaQuery(query: Breakpoints): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoints[query]})`);
    setMatches(mediaQuery.matches);

    mediaQuery.addEventListener('change', (event) => {
      setMatches(event.matches);
    });

    const handleChange = (event: MediaQueryListEvent): void => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}
