import { act, renderHook } from '@testing-library/react';
import * as zustand from 'zustand';

import { useError } from './useError';

import { myCustomCreate, storeResetFns } from '../__mocks__/zunstandMock';

vi.mock('zustand', async () => {
  const actualZustand = await vi.importActual('zustand');

  return {
    __esModule: true,
    ...actualZustand,
  };
});

vi.spyOn(zustand, 'create').mockImplementation(myCustomCreate as never);

describe('useError', () => {
  afterEach(() => {
    act(() => {
      for (const resetFn of storeResetFns) {
        resetFn();
      }
    });
  });

  describe('when initialize', () => {
    it('errors array is empty', () => {
      const { result } = renderHook(() => useError((state) => state));
      expect(result.current.errors).toEqual([]);
    });
  });

  describe('when add a new error message', () => {
    it('adds the new error message to the errors array', () => {
      const { result } = renderHook(() => useError((state) => state));

      act(() => {
        result.current.setErrors('new error message');
      });

      expect(result.current.errors).toEqual(['new error message']);
    });
  });
});
