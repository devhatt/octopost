import { useEffect, useState } from 'react';
import variables from '../../styles/breakpoints.module.scss';

const {phoneScreen, 
  tabletScreen, 
  desktopScreen,
largeDesktopScreen,
} = variables

const breakpoints = {
  from600: phoneScreen,
  from905: tabletScreen,
  from1240: desktopScreen,
  from1440: largeDesktopScreen,
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
