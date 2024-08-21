import { act, renderHook } from '@testing-library/react';

import * as usePostStoreHook from '~stores/usePost/usePost';

vi.mock('~services/api/social-media/social-media', () => ({
  SocialMediaService: {
    fetch: vi.fn().mockResolvedValue([
      { icon: 'discord-icon', id: 'DISCORD_EXAMPLE_ID', name: 'Discord' },
      { icon: 'twitter-icon', id: 'TWITTER_EXAMPLE_ID', name: 'Twitter' },
    ]),
  },
}));

vi.mock('~services/api/accounts/accounts', () => ({
  AccountsService: {
    fetchAll: vi.fn().mockResolvedValue([
      {
        avatar: 'https://example.com/image1.jpg',
        expiresAt: 'Fri May 17 2024 22:57:54 GMT-0300 (Brasilia Standard Time)',
        generatedAt:
          'Fri May 17 2024 22:57:54 GMT-0300 (Brasilia Standard Time)',
        id: 1,
        socialMediaId: 'DISCORD_EXAMPLE_ID',
        token: 'DISCORD_EXAMPLE_TOKEN_1',
        userName: 'Discord User 1',
        valid: true,
      },
      {
        avatar: 'https://example.com/image2.jpg',
        expiresAt: 'Fri May 17 2024 22:57:54 GMT-0300 (Brasilia Standard Time)',
        generatedAt:
          'Fri May 17 2024 22:57:54 GMT-0300 (Brasilia Standard Time)',
        id: 14,
        socialMediaId: 'TWITTER_EXAMPLE_ID',
        token: 'TWITTER_EXAMPLE_TOKEN_14',
        userName: 'Twitter User 14',
        valid: true,
      },
    ]),
  },
}));

describe('useSocialMediaStore', () => {
  it('adds a post', async () => {
    const { result } = renderHook(() =>
      usePostStoreHook.usePostStore()
    );

  });

  it('checks if getAllAccounts correctly retrieves and validates social media accounts', async () => {
    const updatedAccounts = {
      DISCORD_EXAMPLE_ID: [
        {
          avatar: 'https://example.com/image1.jpg',
          expiresAt:
            'Fri May 17 2024 22:57:54 GMT-0300 (Brasilia Standard Time)',
          generatedAt:
            'Fri May 17 2024 22:57:54 GMT-0300 (Brasilia Standard Time)',
          id: 1,
          socialMediaId: 'DISCORD_EXAMPLE_ID',
          token: 'DISCORD_EXAMPLE_TOKEN_1',
          userName: 'Discord User 1',
          valid: false,
        },
      ],
      TWITTER_EXAMPLE_ID: [
        {
          avatar: 'https://example.com/image2.jpg',
          expiresAt:
            'Fri May 17 2024 22:57:54 GMT-0300 (Brasilia Standard Time)',
          generatedAt:
            'Fri May 17 2024 22:57:54 GMT-0300 (Brasilia Standard Time)',
          id: 14,
          socialMediaId: 'TWITTER_EXAMPLE_ID',
          token: 'TWITTER_EXAMPLE_TOKEN_14',
          userName: 'Twitter User 14',
          valid: false,
        },
      ],
    };

    const { result } = renderHook(() =>
      useSocialMediaStoreHook.useSocialMediaStore()
    );

    await act(async () => {
      await result.current.getAllAccounts();
    });

    expect(result.current.accounts.data).toEqual(updatedAccounts);
  });
});
