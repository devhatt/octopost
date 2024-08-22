import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  mockAddPost,
  mockedUsePostStore,
  mockRemovePost,
} from '~stores/__mocks__/usePostStore.mock';
import {
  mockedAccounts,
  mockedSocialMedias,
  mockedUseSocialMediaStore,
} from '~stores/__mocks__/useSocialMediaStore.mock.ts';

import SocialAccordion from './SocialAccordion';

vi.mock(
  '~stores/useSocialMediaStore/useSocialMediaStore',
  () => mockedUseSocialMediaStore
);

vi.mock('~stores/usePost/usePost', () => mockedUsePostStore);

vi.spyOn(window, 'scrollTo');

const mockDiscordData = mockedAccounts().data.DISCORD_EXAMPLE_ID;

describe('SocialAccordion', () => {
  it('renders the component', () => {
    render(
      <SocialAccordion
        accounts={mockDiscordData}
        error={false}
        socialMediaId="DISCORD_EXAMPLE_ID"
      />
    );
    const accordion = screen.getByText(/discord/i);

    expect(accordion).toBeInTheDocument();
  });

  it('renders the intern content of accordion when is open', async () => {
    render(
      <SocialAccordion
        accounts={mockDiscordData}
        error={false}
        socialMediaId="DISCORD_EXAMPLE_ID"
      />
    );

    const accordion = screen.getByText(/discord/i);
    await userEvent.click(accordion);

    const innerContent = screen.getByText(mockDiscordData[0].userName);

    expect(innerContent).toBeInTheDocument();
  });

  it('shows the error on screen if error={true}', () => {
    render(
      <SocialAccordion accounts={[]} error socialMediaId="DISCORD_EXAMPLE_ID" />
    );
    const error = screen.getByText(/error/i);

    expect(error).toBeInTheDocument();
  });

  describe('social tab switch', () => {
    it('activates social tab when is enable', async () => {
      render(
        <SocialAccordion
          accounts={mockDiscordData}
          error={false}
          socialMediaId="DISCORD_EXAMPLE_ID"
        />
      );

      const [account] = mockDiscordData;
      const socialMedias = mockedSocialMedias().get(account.socialMediaId);

      const accordion = screen.getByText(/discord/i);
      await userEvent.click(accordion);

      const [firstAccountSwitch] = screen.getAllByRole('checkbox');

      await userEvent.click(firstAccountSwitch);

      expect(mockAddPost).toHaveBeenCalled();

      expect(mockAddPost).toHaveBeenCalledWith(
        account,
        socialMedias?.postModes
      );
    });

    it('deactivates social tab when is disable', async () => {
      render(
        <SocialAccordion
          accounts={mockDiscordData}
          error={false}
          socialMediaId="DISCORD_EXAMPLE_ID"
        />
      );

      const accordion = screen.getByText(/discord/i);
      await userEvent.click(accordion);

      const [firstAccountSwitch] = screen.getAllByRole('checkbox');

      await userEvent.click(firstAccountSwitch);
      await userEvent.click(firstAccountSwitch);

      expect(mockRemovePost).toHaveBeenLastCalledWith('SomeNanoId');
    });
  });

  describe('when click 2 times', () => {
    it('closes the accordion', async () => {
      render(
        <SocialAccordion
          accounts={mockedAccounts().data.DISCORD_EXAMPLE_ID}
          error={false}
          socialMediaId="DISCORD_EXAMPLE_ID"
        />
      );

      const accordion = screen.getByText(/discord/i);
      await userEvent.click(accordion);

      const innerContent = screen.getByText(mockDiscordData[0].userName);

      expect(innerContent).toBeInTheDocument();

      await userEvent.click(accordion);

      await waitFor(() => {
        expect(innerContent).not.toBeInTheDocument();
      });
    });
  });

  describe('account list', () => {
    it('renders with zero if list is empty', () => {
      render(
        <SocialAccordion
          accounts={[]}
          error={false}
          socialMediaId="DISCORD_EXAMPLE_ID"
        />
      );
      const accountQuantity = screen.getByText(/0/);

      expect(accountQuantity).toBeInTheDocument();
    });

    it('renders with one account if list have one account', () => {
      const [account] = mockDiscordData;

      render(
        <SocialAccordion
          accounts={[{ ...account, valid: true }]}
          error={false}
          socialMediaId="DISCORD_EXAMPLE_ID"
        />
      );

      const accountQuantity = screen.getByText(/1/);

      expect(accountQuantity).toBeInTheDocument();
    });
  });
});
