import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);

const TWO = 2;

const updateGradientVisibility = (
  element: RefObject<HTMLDivElement>,
  condition: boolean
): void => {
  if (element.current) {
    element.current.style.display = condition ? 'block' : 'none';
  }
};

export const useHorizontalScroll = (): {
  containerRef: RefObject<HTMLDivElement>;
  firstGradient: RefObject<HTMLDivElement>;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  hasMoreOnLeft: boolean;
  hasMoreOnRight: boolean;
  lastGradient: RefObject<HTMLDivElement>;
  scrollToElement: (element: HTMLElement) => void;
} => {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstGradient = useRef<HTMLDivElement>(null);
  const lastGradient = useRef<HTMLDivElement>(null);
  const [hasMoreOnRight, setHasMoreOnRight] = useState(false);
  const [hasMoreOnLeft, setHasMoreOnLeft] = useState(false);

  updateGradientVisibility(firstGradient, hasMoreOnLeft);
  updateGradientVisibility(lastGradient, hasMoreOnRight);

  const updateScrollStatus = useCallback(() => {
    const container = containerRef.current;

    if (container) {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      setHasMoreOnLeft(container.scrollLeft > 0);
      setHasMoreOnRight(container.scrollLeft < maxScrollLeft);
    }
  }, []);

  const scrollHorizontally = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
      const scrollAmount = e.deltaY;
      const container = containerRef.current;

      if (container) {
        const newScrollPosition = container.scrollLeft + scrollAmount;
        gsap.to(container, {
          duration: 0.5,
          ease: 'power3.out',
          onComplete: updateScrollStatus,
          scrollTo: { x: newScrollPosition },
        });
      }
    },
    [updateScrollStatus]
  );

  const handleMouseEnter = useCallback(() => {
    window.addEventListener('wheel', scrollHorizontally, { passive: false });
  }, [scrollHorizontally]);

  const handleMouseLeave = useCallback(() => {
    window.removeEventListener('wheel', scrollHorizontally);
  }, [scrollHorizontally]);

  const scrollToElement = useCallback(
    (element: HTMLElement) => {
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
          duration: 0.6,
          ease: 'power3.out',
          onComplete: updateScrollStatus,
          scrollTo: { x: newScrollPosition },
        });
      }
    },
    [updateScrollStatus]
  );

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const observer = new MutationObserver(updateScrollStatus);
      observer.observe(container, { childList: true, subtree: true });

      updateScrollStatus();

      return (): void => {
        observer.disconnect();
      };
    }
  }, [containerRef, updateScrollStatus]);

  return {
    containerRef,
    firstGradient,
    handleMouseEnter,
    handleMouseLeave,
    hasMoreOnLeft,
    hasMoreOnRight,
    lastGradient,
    scrollToElement,
  };
};
