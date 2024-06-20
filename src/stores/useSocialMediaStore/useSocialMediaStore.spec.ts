import { act, renderHook } from '@testing-library/react';

import * as useSocialMediaStoreHook from '~stores/useSocialMediaStore/useSocialMediaStore';

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

/*

The expected behavior of the useSocialMediaStore hook is that, when its called, 
it calls the getAllAccounts method and it happens when the hook is used on the 
components.

On the tests we need to manually call for getAllAccounts on the renderHook to force 
its call and mock its return.

The way we're doing the store initialization was based on this thread:  

You can check here:
https://github.com/pmndrs/zustand/discussions/2563#discussioncomment-9489004

*/

describe('useSocialMediaStore', () => {
  it('populates the socialMedias store from user accounts data', async () => {
    const { result } = renderHook(() =>
      useSocialMediaStoreHook.useSocialMediaStore()
    );

    await act(async () => {
      await result.current.getAllAccounts();
    });

    const expectedMap = new Map([
      [
        'DISCORD_EXAMPLE_ID',
        {
          icon: 'discord-icon',
          id: 'DISCORD_EXAMPLE_ID',
          name: 'Discord',
        },
      ],
      [
        'TWITTER_EXAMPLE_ID',
        {
          icon: 'twitter-icon',
          id: 'TWITTER_EXAMPLE_ID',
          name: 'Twitter',
        },
      ],
    ]);

    expect(result.current.socialMedias).toEqual(expectedMap);
  });

  it('checks if getAllAccounts correctly retrieves and validates social media accounts', async () => {
    const updatedAccounts = [
      { id: 1, socialMediaId: 'DISCORD_EXAMPLE_ID', valid: false },
      { id: 14, socialMediaId: 'TWITTER_EXAMPLE_ID', valid: false },
    ];

    const { result } = renderHook(() =>
      useSocialMediaStoreHook.useSocialMediaStore()
    );

    await act(async () => {
      await result.current.getAllAccounts();
    });

    expect(result.current.accounts.data).toEqual(
      expect.arrayContaining(
        updatedAccounts.map((account) => expect.objectContaining(account))
      )
    );
  });
});
