import { useEffect, useState } from 'react';

import variables from '~/styles/breakpoints.module.scss';

const { desktopScreen, largeDesktopScreen, phoneScreen, tabletScreen } =
  variables;

const breakpoints = {
  from1240: desktopScreen,
  from1440: largeDesktopScreen,
  from600: phoneScreen,
  from905: tabletScreen,
} as const;

type Breakpoints = keyof typeof breakpoints;

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

    return (): void => mediaQuery.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}
