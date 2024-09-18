/* eslint-disable unicorn/no-unused-properties */
import { act, renderHook } from '@testing-library/react';
import { nanoid } from 'nanoid';

import { SocialMedia } from '~services/api/social-media/social-media.types';
import * as usePostStoreHook from '~stores/usePostStore/usePostStore';

import { PostModes } from './usePostStore.types';

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

const mockAccountSocialMedia: SocialMedia = {
  icon: 'alert',
  id: '',
  name: '',
  postModes: [
    {
      id: 'DISCORD_STORY_POSTMODE_ID',
      name: 'TesteStory',
      previewComponent: 'Teste',
      validators: {
        media: {
          allowedFormats: ['mp4', 'webm'],
          ar: ['4:3'],
          maxDuration: 1000,
          maxFileSize: 20_000_000,
          maxHeight: 600,
          maxWidth: 700,
          mediaQtyLimit: 1,
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
          allowedFormats: ['mp4', 'webm'],
          ar: ['16:9'],
          maxDuration: 1100,
          maxFileSize: 10_000,
          maxHeight: 700,
          maxWidth: 900,
          mediaQtyLimit: 2,
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
          allowedFormats: ['mp4', 'webm'],
          ar: ['5:3'],
          maxDuration: 5000,
          maxFileSize: 30_000,
          maxHeight: 1080,
          maxWidth: 1920,
          mediaQtyLimit: 1,
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

const mockPostModes = mockAccountSocialMedia.postModes.reduce<PostModes>(
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
        postModes: mockPostModes,
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
      result.current.updateMainContent({ text: newMainContent });
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
          ...mockPostModes,
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
