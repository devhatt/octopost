import { useMedia } from 'react-use';

/**
 * Hook to match the media query.
 * @param {string} queryString The media query string. Should be in the format 'media-query: 600px'.
 * @returns {boolean} Returns true if the media query matches, otherwise false.
 */
export function useMediaQuery(queryString: string): boolean {
  const isMatched = useMedia(`(${queryString})`);
  return isMatched;
}
