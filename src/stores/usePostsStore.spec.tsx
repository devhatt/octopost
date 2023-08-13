import { renderHook, act } from '@testing-library/react';
import * as zustand from 'zustand';

import { usePostsStore } from './usePostsStore';

import { myCustomCreate, storeResetFns } from './__mocks__/zunstandMock';

jest.spyOn(zustand, 'create').mockImplementation(myCustomCreate as never);

describe('usePostsStore', () => {
  afterEach(() => {
    act(() => {
      storeResetFns.forEach((resetFn) => {
        resetFn();
      });
    });
  });

  describe('when initialize', () => {
    it('posts should be zero', () => {
      const { result } = renderHook(() => usePostsStore((state) => state));
      expect(result.current.postsQuantity).toBe(0);
    });
  });

  describe('when increased the number of posts', () => {
    it('set value to tree', () => {
      const { result } = renderHook(() => usePostsStore((state) => state));

      act(() => {
        result.current.increase(3);
      });

      expect(result.current.postsQuantity).toBe(3);
    });
  });

  describe('when we reset the number of posts', () => {
    it('change to tree and reset to zero', () => {
      const { result } = renderHook(() => usePostsStore((state) => state));

      act(() => {
        result.current.increase(2);
      });

      act(() => {
        result.current.reset();
      });

      expect(result.current.postsQuantity).toBe(0);
    });
  });
});
