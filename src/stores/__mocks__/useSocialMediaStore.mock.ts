import { SocialMedia } from '~services/api/social-media/social-media.types.ts';
import type { StoreAccount } from '~stores/useSocialMediaStore/useSocialMediaStore.types.ts';

export const mockedAddAccount = vi.fn();

export const mockedAccounts = vi.fn(() => ({
  data: [
    {
      avatar: 'https://example.com/image1.jpg',
      expiresAt: '2022-12-31T23:59:59Z',
      generatedAt: '2022-01-01T00:00:00Z',
      id: '1',
      socialMediaId: 'DISCORD_EXAMPLE_ID',
      token: 'DISCORD_EXAMPLE_TOKEN_1',
      userName: 'Discord User 1',
      valid: true,
    },
    {
      avatar: 'https://example.com/image2.jpg',
      expiresAt: '2022-12-31T23:59:59Z',
      generatedAt: '2022-01-01T00:00:00Z',
      id: '14',
      socialMediaId: 'TWITTER_EXAMPLE_ID',
      token: 'TWITTER_EXAMPLE_TOKEN_14',
      userName: 'Twitter User 14',
      valid: true,
    },
    {
      avatar: 'https://example.com/image3.jpg',
      expiresAt: '2022-12-31T23:59:59Z',
      generatedAt: '2022-01-01T00:00:00Z',
      id: '2',
      socialMediaId: 'DISCORD_EXAMPLE_ID',
      token: 'DISCORD_EXAMPLE_TOKEN_2',
      userName: 'Discord User 2',
      valid: false,
    },
    {
      avatar: 'https://example.com/image4.jpg',
      expiresAt: '2022-12-31T23:59:59Z',
      generatedAt: '2022-01-01T00:00:00Z',
      id: '3',
      socialMediaId: 'DISCORD_EXAMPLE_ID',
      token: 'DISCORD_EXAMPLE_TOKEN_3',
      userName: 'Discord User 3',
      valid: true,
    },
  ] as StoreAccount[],
  error: '',
  loading: false,
}));

export const mockedSocialMedias = vi.fn(
  () =>
    new Map<SocialMedia['id'], SocialMedia>([
      [
        'DISCORD_EXAMPLE_ID',
        {
          icon: 'discord',
          id: 'DISCORD_EXAMPLE_ID',
          name: 'Discord',
          postModes: [
            {
              id: 'DISCORD_STORY_POSTMODE_ID',
              name: 'TesteStory',
              previewComponent: 'Teste',
              validators: {
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
              id: 'DISCORD_REELS_POST_ID',
              name: 'TestePost',
              previewComponent: 'Teste',
              validators: {
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
          ],
        },
      ],
      [
        'TWITTER_EXAMPLE_ID',
        {
          icon: 'twitter',
          id: 'TWITTER_EXAMPLE_ID',
          name: 'Twitter',
          postModes: [
            {
              id: 'TWITTER_THREAD_POST_ID',
              name: 'TestePost',
              previewComponent: 'Teste',
              validators: {
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
              id: 'TWITTER_THREAD_POSTMODE_ID',
              name: 'TesteThread',
              previewComponent: 'Teste',
              validators: {
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
          ],
        },
      ],
    ])
);

export const mockedUseSocialMediaStore = {
  useSocialMediaStore: vi.fn(() => ({
    accounts: mockedAccounts(),
    addAccount: mockedAddAccount,
    socialMedias: mockedSocialMedias(),
  })),
};
