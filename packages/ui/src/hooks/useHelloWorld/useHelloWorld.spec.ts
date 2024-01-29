import { renderHook } from '@testing-library/react';

import { useHelloWorld } from './useHelloWorld';

describe('useHelloWorld', () => {
  test('should output hello world', () => {
    const { result } = renderHook(() => useHelloWorld());

    expect(result.current).toBe('Hello World!');
  });
});
