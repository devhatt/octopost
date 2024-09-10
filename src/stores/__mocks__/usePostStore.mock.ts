import { PostModes } from '~stores/usePostStore/usePostStore.types';

const mockAccount = {
  id: '1',
  socialMediaId: 'DISCORD_EXAMPLE_ID',
};

const mockAccountSocialMedia = {
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

export const mockedPostModesPost =
  mockAccountSocialMedia.postModes.reduce<PostModes>((acc, postMode) => {
    acc[postMode.id] = {};
    return acc;
  }, {});

export const mockAddPost = vi.fn();
export const mockRemovePost = vi.fn();
export const mockUpdateTextPost = vi.fn();
export const mockUpdateMainContent = vi.fn();
export const mockPosts = vi.fn(() => ({
  someNanoId: {
    accountId: mockAccount.id,
    id: 'SomeNanoId',
    postModes: mockedPostModesPost,
    socialMediaId: mockAccount.socialMediaId,
  },
}));

export const mockedUsePostStore = {
  usePostStore: vi.fn(() => ({
    add: mockAddPost,
    posts: mockPosts(),
    remove: mockRemovePost,
    updateMainContent: mockUpdateMainContent,
    updateText: mockUpdateTextPost,
  })),
};
