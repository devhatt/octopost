import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  mockedAccounts,
  mockedAddAccount,
  mockedSocialMedias,
  mockedUseSocialMediaStore,
} from '~stores/__mocks__/useSocialMediaStore.mock';

import PostModes from './PostModes';

vi.mock(
  '~stores/useSocialMediaStore/useSocialMediaStore',
  () => mockedUseSocialMediaStore
);

const mockAccount = {
  id: '1',
  socialMediaId: 'DISCORD_EXAMPLE_ID',
  userName: 'Discord User 1',
};
const mockChangePostMode = vi.fn();
const mockCurrentPostModeId = '1';

describe('PostModes', () => {
  beforeEach(() => {
    vi.spyOn(
      mockedUseSocialMediaStore,
      'useSocialMediaStore'
    ).mockImplementation(() => ({
      accounts: mockedAccounts(),
      addAccount: mockedAddAccount,
      socialMedias: mockedSocialMedias(),
    }));
  });

  it('renders correctly', () => {
    render(
      <PostModes
        currentPostModeId={mockCurrentPostModeId}
        currentTab={mockAccount}
        onChangePostMode={mockChangePostMode}
      />
    );
    const socialMedia = mockedSocialMedias().get(mockAccount.socialMediaId);
    if (!socialMedia?.postModes) {
      throw new Error(
        `Social media or post modes not found for ID ${mockAccount.socialMediaId}`
      );
    }
    const { postModes } = socialMedia;
    const firstPostModeName = postModes[0].name;

    const postMode = screen.getByText(firstPostModeName);

    expect(postMode).toBeInTheDocument();
  });

  describe('PostModes button', () => {
    it('calls onChangePostMode when is clicked', async () => {
      render(
        <PostModes
          currentPostModeId={mockCurrentPostModeId}
          currentTab={mockAccount}
          onChangePostMode={mockChangePostMode}
        />
      );
      const user = userEvent.setup();

      const socialMedia = mockedSocialMedias().get(mockAccount.socialMediaId);
      if (!socialMedia?.postModes) {
        throw new Error(
          `Social media or post modes not found for ID ${mockAccount.socialMediaId}`
        );
      }
      const { postModes } = socialMedia;
      const firstPostModeName = postModes[0].name;
      const postMode = screen.getByText(firstPostModeName);

      await user.click(postMode);
      expect(mockChangePostMode).toHaveBeenCalled();
    });
  });

  describe('PostModes checkbox', () => {
    it('add post mode when checkbox is checked', async () => {
      render(
        <PostModes
          currentPostModeId={mockCurrentPostModeId}
          currentTab={mockAccount}
          onChangePostMode={mockChangePostMode}
        />
      );
      const user = userEvent.setup();

      const socialMedia = mockedSocialMedias().get(mockAccount.socialMediaId);
      if (!socialMedia?.postModes) {
        throw new Error(
          `Social media or post modes not found for ID ${mockAccount.socialMediaId}`
        );
      }
      const { postModes } = socialMedia;
      const firstPostModeName = postModes[0].name;
      const postModeCheckbox = screen.getByLabelText(
        `Check the post mode ${firstPostModeName}`
      );

      await user.click(postModeCheckbox);

      expect(postModeCheckbox).toBeChecked();
    });

    it('remove post mode when checkbox is not checked', async () => {
      render(
        <PostModes
          currentPostModeId={mockCurrentPostModeId}
          currentTab={mockAccount}
          onChangePostMode={mockChangePostMode}
        />
      );
      const user = userEvent.setup();

      const socialMedia = mockedSocialMedias().get(mockAccount.socialMediaId);
      if (!socialMedia?.postModes) {
        throw new Error(
          `Social media or post modes not found for ID ${mockAccount.socialMediaId}`
        );
      }
      const { postModes } = socialMedia;
      const firstPostModeName = postModes[0].name;
      const postModeCheckbox = screen.getByLabelText(
        `Check the post mode ${firstPostModeName}`
      );

      await user.click(postModeCheckbox);
      await user.click(postModeCheckbox);

      expect(postModeCheckbox).not.toBeChecked();
    });
  });
});
