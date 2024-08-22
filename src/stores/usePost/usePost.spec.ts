import { act, renderHook } from '@testing-library/react';
import { nanoid } from 'nanoid';

import * as usePostStoreHook from '~stores/usePost/usePost';

import { PostModes } from './usePost.types';

vi.mock('nanoid', () => ({
  nanoid: vi.fn(() => 'someNanoId'),
}));

const nanoId = nanoid();

const mockAccount = {
  avatar: 'https://example.com/image1.jpg',
  expiresAt: '',
  generatedAt: '',
  id: '1',
  socialMediaId: 'DISCORD_EXAMPLE_ID',
  token: 'DISCORD_EXAMPLE_TOKEN_1',
  userName: 'Discord User 1',
  valid: false,
};

const mockAccountSocialMedia = {
  icon: 'Icon',
  id: 'DISCORD_EXAMPLE_ID',
  name: 'Discord',
  postModes: [
    {
      id: 'DISCORD_STORY_POSTMODE_ID',
      name: 'TesteStory',
      previewComponent: 'Teste',
      validators: {
        media: {
          ar: ['4:3'],
          maxDuration: 1000,
          maxFileSize: 20_000_000,
          maxHeight: 600,
          maxWidth: 700,
        },
        text: {
          maxLength: 20,
        },
      },
      widgets: [
        {
          component: 'Teste',
          icon: 'Teste',
          name: 'Teste',
        },
      ],
    },
    {
      id: 'DISCORD_POST_POSTMODE_ID',
      name: 'TestePost',
      previewComponent: 'Teste',
      validators: {
        media: {
          ar: ['16:9'],
          maxDuration: 1100,
          maxHeight: 700,
          maxSize: 10_000,
          maxWidth: 900,
        },
        text: {
          maxLength: 3,
        },
      },
      widgets: [
        {
          component: 'Teste',
          icon: 'Teste',
          name: 'Teste',
        },
      ],
    },
    {
      id: 'DISCORD_REELS_POSTMODE_ID',
      name: 'TesteReels',
      previewComponent: 'Teste',
      validators: {
        media: {
          ar: ['5:3'],
          maxDuration: 5000,
          maxHeight: 1080,
          maxSize: 30_000,
          maxWidth: 1920,
        },
        text: {
          maxLength: 12,
        },
      },
      widgets: [
        {
          component: 'Teste',
          icon: 'Teste',
          name: 'Teste',
        },
      ],
    },
  ],
};

const postModes = mockAccountSocialMedia.postModes.reduce<PostModes>(
  (acc, postMode) => {
    acc[postMode.id] = {};
    return acc;
  },
  {}
);

describe('usePostStore', () => {
  it('adds a post', () => {
    const { result } = renderHook(() => usePostStoreHook.usePostStore());

    act(() => {
      result.current.add(mockAccount, mockAccountSocialMedia.postModes);
    });

    const expectedPosts = {
      someNanoId: {
        accountId: mockAccount.id,
        id: nanoId,
        postModes: postModes,
        socialMediaId: mockAccount.socialMediaId,
      },
    };

    expect(result.current.posts).toStrictEqual(expectedPosts);
  });

  it('removes a post', () => {
    const { result } = renderHook(() => usePostStoreHook.usePostStore());

    act(() => {
      result.current.add(mockAccount, mockAccountSocialMedia.postModes);
    });

    act(() => {
      result.current.remove('someNanoId');
    });

    expect(result.current.posts).toStrictEqual({});
  });

  it('updates main content', () => {
    const { result } = renderHook(() => usePostStoreHook.usePostStore());

    const newMainContent = 'testing';

    act(() => {
      result.current.updateMainContent(newMainContent);
    });

    expect(result.current.mainContent).toBe(newMainContent);
  });

  it('updates text', () => {
    const { result } = renderHook(() => usePostStoreHook.usePostStore());

    const newText = 'someText';
    const postModeId = mockAccountSocialMedia.postModes[0].id;

    act(() => {
      result.current.add(mockAccount, mockAccountSocialMedia.postModes);
    });

    const expectedPosts = {
      someNanoId: {
        accountId: mockAccount.id,
        id: nanoId,
        postModes: {
          ...postModes,
          [postModeId]: {
            text: newText,
          },
        },
        socialMediaId: mockAccount.socialMediaId,
      },
    };

    act(() => {
      result.current.updateText({
        postId: 'someNanoId',
        postModeId,
        text: newText,
      });
    });

    expect(result.current.posts).toStrictEqual(expectedPosts);
  });
});
