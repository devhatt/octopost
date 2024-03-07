import { useEffect, useState } from 'react';

/**
 * Hook to match the media query.
 * @param {string} queryString The media query string. Should be in the format '600px'.
 * @returns {boolean} Returns true if the media query matches, otherwise false.
 */
export function useMediaQuery(queryString: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${queryString})`);
    setMatches(mediaQuery.matches);

    mediaQuery.addEventListener('change', (event) => {
      setMatches(event.matches);
    });

    const handleChange = (event: MediaQueryListEvent): void => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [queryString]);

  return matches;
}
