import { RefObject, useCallback, useRef, useState } from 'react';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);

const TWO = 2;

export const useHorizontalScroll = (): {
  containerRef: RefObject<HTMLDivElement>;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  hasMoreOnLeft: boolean;
  hasMoreOnRight: boolean;
  scrollToElement: (element: HTMLElement) => void;
} => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasMoreOnRight, setHasMoreOnRight] = useState(false);
  const [hasMoreOnLeft, setHasMoreOnLeft] = useState(false);

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
          onUpdate: updateScrollStatus,
          scrollTo: { x: newScrollPosition },
        });
      }
    },
    [updateScrollStatus]
  );

  const handleMouseEnter = useCallback(() => {
    window.addEventListener('wheel', scrollHorizontally, { passive: false });
    updateScrollStatus();
  }, [scrollHorizontally, updateScrollStatus]);

  const handleMouseLeave = useCallback(() => {
    window.removeEventListener('wheel', scrollHorizontally);
  }, [scrollHorizontally]);

  const scrollToElement = useCallback(
    (element: HTMLElement) => {
      const container = containerRef.current;

      if (container) {
        const containerRect = container.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();

        const isElementVisible =
          elementRect.left >= containerRect.left &&
          elementRect.right <= containerRect.right;

        if (!isElementVisible) {
          const offset = elementRect.left - containerRect.left;
          const newScrollPosition =
            container.scrollLeft +
            offset -
            container.clientWidth / TWO +
            elementRect.width / TWO;

          gsap.to(container, {
            duration: 0.6,
            ease: 'power3.out',
            onUpdate: updateScrollStatus,
            scrollTo: { x: newScrollPosition },
          });
        }
      }
    },
    [updateScrollStatus]
  );

  return {
    containerRef,
    handleMouseEnter,
    handleMouseLeave,
    hasMoreOnLeft,
    hasMoreOnRight,
    scrollToElement,
  };
};
