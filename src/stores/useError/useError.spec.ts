import { act, renderHook } from '@testing-library/react';

import { useError } from './useError';

describe('useError', () => {
  it('starts with an empty error object', () => {
    const { result } = renderHook(() => useError());

    expect(result.current.errors).toEqual({});
  });

  it('adds an error to error object', () => {
    const { result } = renderHook(() => useError());

    let errorId = '';
    act(() => {
      errorId = result.current.setError('Something went wrong');
    });

    expect(result.current.errors[errorId]).toEqual({
      id: errorId,
      message: 'Something went wrong',
    });
  });

  it('removes an error from error object', () => {
    const { result } = renderHook(() => useError());

    let errorId = '';
    act(() => {
      errorId = result.current.setError('Something went wrong');
    });

    act(() => {
      result.current.removeError(errorId);
    });

    expect(result.current.errors).not.toHaveProperty(errorId);
  });
});
