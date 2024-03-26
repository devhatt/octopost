import { act, renderHook } from '@testing-library/react';
import * as zustand from 'zustand';

import { useError } from './useError';

import { myCustomCreate, storeResetFns } from '../__mocks__/zunstandMock';

vi.mock('zustand', async () => {
  const zustandMock = (await vi.importActual('zustand'));

  return {
    __esModule: true,
    ...zustandMock,
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
    it('error message is empty', () => {
      const { result } = renderHook(() => useError((state) => state));
      expect(result.current.errorMessage).toBe('');
    });
  });

  describe('when change the error message', () => {
    it('changes the error message', () => {
      const { result } = renderHook(() => useError((state) => state));

      act(() => {
        result.current.setErrorMessage('update error message');
      });

      expect(result.current.errorMessage).toBe('update error message');
    });
  });
});
