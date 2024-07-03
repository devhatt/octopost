import { RefObject, useCallback, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);

const TWO = 2;

export const useHorizontalScroll = (): {
  containerRef: RefObject<HTMLDivElement>;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  scrollToElement: (element: HTMLElement) => void;
} => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollHorizontally = useCallback((e: WheelEvent) => {
    e.preventDefault();
    const scrollAmount = e.deltaY;
    const container = containerRef.current;

    if (container) {
      const newScrollPosition = container.scrollLeft + scrollAmount;
      gsap.to(container, {
        duration: 0.5,
        ease: 'power3.out',
        scrollTo: { x: newScrollPosition },
      });
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    window.addEventListener('wheel', scrollHorizontally, { passive: false });
  }, [scrollHorizontally]);

  const handleMouseLeave = useCallback(() => {
    window.removeEventListener('wheel', scrollHorizontally);
  }, [scrollHorizontally]);

  const scrollToElement = useCallback((element: HTMLElement) => {
    const container = containerRef.current;

    if (container) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      const offset = elementRect.left - containerRect.left;
      const newScrollPosition =
        container.scrollLeft +
        offset -
        container.clientWidth / TWO +
        elementRect.width / TWO;

      gsap.to(container, {
        duration: 1,
        ease: 'power3.out',
        scrollTo: { x: newScrollPosition },
      });
    }
  }, []);

  return {
    containerRef,
    handleMouseEnter,
    handleMouseLeave,
    scrollToElement,
  };
};
