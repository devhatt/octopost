import { act, renderHook } from '@testing-library/react';

import useKeyPress from './useKeyPress';

describe('useKeyPress', () => {
  let action: (event: KeyboardEvent) => void;
  let targetKey: string;

  beforeEach(() => {
    action = vi.fn();
    targetKey = 'Enter';
  });

  test('should call action function when target key is pressed', () => {
    renderHook(() => useKeyPress(targetKey, action));

    act(() => {
      const event = new KeyboardEvent('keydown', { key: targetKey });
      window.dispatchEvent(event);
    });

    expect(action).toHaveBeenCalled();
  });

  test('should not call action function when a different key is pressed', () => {
    renderHook(() => useKeyPress(targetKey, action));

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'Escape' });
      window.dispatchEvent(event);
    });

    expect(action).not.toHaveBeenCalled();
  });
});
