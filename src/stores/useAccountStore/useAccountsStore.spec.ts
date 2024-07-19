import { act, renderHook } from '@testing-library/react';

import { useAccountStore } from './useAccountStore';

describe('useAccountStore', () => {
  it('should update mainContent correctly', () => {
    const { result } = renderHook(() => useAccountStore());

    const newContent = 'Test content';

    act(() => {
      result.current.updateMainContent(newContent);
    });

    expect(result.current.mainContent).toBe(newContent);
  });

  it('should update main content image correctly', () => {
    const mockImages = [
      {
        file: new File([], 'image.jpg'),
        id: '1',
        type: 'image/jpeg',
        url: 'http://example.com/image.jpg',
      },
    ];

    const { result } = renderHook(() => useAccountStore());

    act(() => {
      result.current.updateMainContentImage(mockImages);
    });

    expect(result.current.mainContentImage).toEqual(mockImages);
  });
});
