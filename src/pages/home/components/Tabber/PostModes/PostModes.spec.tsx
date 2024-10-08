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
        changePostModeId={mockChangePostMode}
        postId={mockAccount.id}
        postModeId={mockCurrentPostModeId}
        socialMediaId={mockAccount.socialMediaId}
      />
    );
    const socialMedia = mockedSocialMedias().get(mockAccount.socialMediaId);

    const postModes = socialMedia?.postModes;
    const firstPostModeName = postModes ? postModes[0].name : '';

    const postMode = screen.getByText(firstPostModeName);

    expect(postMode).toBeInTheDocument();
  });

  describe('PostModes button', () => {
    it('calls onChangePostMode when is clicked', async () => {
      render(
        <PostModes
          changePostModeId={mockChangePostMode}
          postId={mockAccount.id}
          postModeId={mockCurrentPostModeId}
          socialMediaId={mockAccount.socialMediaId}
        />
      );
      const user = userEvent.setup();

      const socialMedia = mockedSocialMedias().get(mockAccount.socialMediaId);

      const postModes = socialMedia?.postModes;
      const firstPostModeName = postModes ? postModes[0].name : '';

      const postMode = screen.getByText(firstPostModeName);

      await user.click(postMode);
      expect(mockChangePostMode).toHaveBeenCalled();
    });
  });

  describe('PostModes checkbox', () => {
    it('add post mode when checkbox is checked', async () => {
      render(
        <PostModes
          changePostModeId={mockChangePostMode}
          postId={mockAccount.id}
          postModeId={mockCurrentPostModeId}
          socialMediaId={mockAccount.socialMediaId}
        />
      );
      const user = userEvent.setup();

      const socialMedia = mockedSocialMedias().get(mockAccount.socialMediaId);

      const postModes = socialMedia?.postModes;
      const firstPostModeName = postModes ? postModes[0].name : '';

      const postModeCheckbox = screen.getByLabelText(
        `Check the post mode ${firstPostModeName}`
      );

      await user.click(postModeCheckbox);

      expect(postModeCheckbox).toBeChecked();
    });

    it('remove post mode when checkbox is not checked', async () => {
      render(
        <PostModes
          changePostModeId={mockChangePostMode}
          postId={mockAccount.id}
          postModeId={mockCurrentPostModeId}
          socialMediaId={mockAccount.socialMediaId}
        />
      );
      const user = userEvent.setup();

      const socialMedia = mockedSocialMedias().get(mockAccount.socialMediaId);

      const postModes = socialMedia?.postModes;
      const firstPostModeName = postModes ? postModes[0].name : '';

      const postModeCheckbox = screen.getByLabelText(
        `Check the post mode ${firstPostModeName}`
      );

      await user.click(postModeCheckbox);
      await user.click(postModeCheckbox);

      expect(postModeCheckbox).not.toBeChecked();
    });
  });
});
