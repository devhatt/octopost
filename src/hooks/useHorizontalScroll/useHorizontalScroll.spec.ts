import { act, renderHook } from '@testing-library/react';

import { useHorizontalScroll } from './useHorizontalScroll';

describe.only('useHorizontalScroll', () => {
  it('handles mouse enter', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');

    const { result } = renderHook(() => useHorizontalScroll());

    act(() => {
      result.current.handleMouseEnter();
    });

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'wheel',
      expect.any(Function),
      { passive: false }
    );
  });

  it('handles mouse leave', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

    const { result } = renderHook(() => useHorizontalScroll());

    act(() => {
      result.current.handleMouseLeave();
    });

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'wheel',
      expect.any(Function)
    );
  });
});
