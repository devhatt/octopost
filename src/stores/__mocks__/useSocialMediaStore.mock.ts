export const mockedAddAccount = vi.fn();

export const mockedUseSocialMediaStore = {
  useSocialMediaStore: (): unknown => ({
    addAccount: mockedAddAccount,
    socialMedias: new Map([['FACEBOOK_SOCIAL_MEDIA_ID', { name: 'facebook' }]]),
  }),
};
