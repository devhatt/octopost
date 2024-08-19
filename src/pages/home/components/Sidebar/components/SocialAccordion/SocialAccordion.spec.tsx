import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Mock } from 'vitest';

import {
  mockedAccounts,
  mockedSocialMedias,
  mockedUseSocialMediaStore,
} from '~stores/__mocks__/useSocialMediaStore.mock.ts';

import SocialAccordion from './SocialAccordion';

const mockAddAccount = vi.fn();
const mockRemoveAccount = vi.fn();

vi.mock('~stores/useAccountStore/useAccountStore', () => ({
  useAccountStore: (): {
    addAccount: Mock;
    removeAccount: Mock;
  } => ({
    addAccount: mockAddAccount,
    removeAccount: mockRemoveAccount,
  }),
}));

vi.mock(
  '~stores/useSocialMediaStore/useSocialMediaStore',
  () => mockedUseSocialMediaStore
);

vi.spyOn(window, 'scrollTo');

const mockDiscordData = mockedAccounts().data.DISCORD_EXAMPLE_ID;

describe('SocialAccordion', () => {
  it('renders the component', () => {
    const socialMediaId = 'DISCORD_EXAMPLE_ID';
    render(
      <SocialAccordion
        accounts={mockDiscordData}
        error={false}
        socialMediaId={socialMediaId}
        title={mockedSocialMedias().get(socialMediaId)?.name as string}
      />
    );
    const accordion = screen.getByText(/discord/i);

    expect(accordion).toBeInTheDocument();
  });

  it('renders the intern content of accordion when is open', async () => {
    const socialMediaId = 'DISCORD_EXAMPLE_ID';

    render(
      <SocialAccordion
        accounts={mockDiscordData}
        error={false}
        socialMediaId={socialMediaId}
        title={mockedSocialMedias().get(socialMediaId)?.name as string}
      />
    );

    const accordion = screen.getByText(/discord/i);
    await userEvent.click(accordion);

    const innerContent = screen.getByText(mockDiscordData[0].userName);

    expect(innerContent).toBeInTheDocument();
  });

  it('shows the error on screen if error={true}', () => {
    const socialMediaId = 'DISCORD_EXAMPLE_ID';

    render(
      <SocialAccordion
        accounts={[]}
        error
        socialMediaId={socialMediaId}
        title={mockedSocialMedias().get(socialMediaId)?.name as string}
      />
    );
    const error = screen.getByText(/error/i);

    expect(error).toBeInTheDocument();
  });

  describe('social tab switch', () => {
    it('activates social tab when is enable', async () => {
      const socialMediaId = 'DISCORD_EXAMPLE_ID';

      render(
        <SocialAccordion
          accounts={mockDiscordData}
          error={false}
          socialMediaId={socialMediaId}
          title={mockedSocialMedias().get(socialMediaId)?.name as string}
        />
      );

      const accordion = screen.getByText(/discord/i);
      await userEvent.click(accordion);

      const [firstAccountSwitch] = screen.getAllByRole('checkbox');

      await userEvent.click(firstAccountSwitch);

      expect(mockAddAccount).toHaveBeenCalled();

      expect(mockAddAccount).toHaveBeenCalledWith(mockDiscordData[0]);
    });
    it('deactivates social tab when is disable', async () => {
      const socialMediaId = 'DISCORD_EXAMPLE_ID';

      render(
        <SocialAccordion
          accounts={mockDiscordData}
          error={false}
          socialMediaId={socialMediaId}
          title={mockedSocialMedias().get(socialMediaId)?.name as string}
        />
      );

      const accordion = screen.getByText(/discord/i);
      await userEvent.click(accordion);

      const [firstAccountSwitch] = screen.getAllByRole('checkbox');

      await userEvent.click(firstAccountSwitch);
      await userEvent.click(firstAccountSwitch);

      const [firstAccount] = mockDiscordData;

      expect(mockRemoveAccount).toHaveBeenLastCalledWith(firstAccount.id);
    });
  });

  describe('when click 2 times', () => {
    it('closes the accordion', async () => {
      const socialMediaId = 'DISCORD_EXAMPLE_ID';

      render(
        <SocialAccordion
          accounts={mockedAccounts().data.DISCORD_EXAMPLE_ID}
          error={false}
          socialMediaId={socialMediaId}
          title={mockedSocialMedias().get(socialMediaId)?.name as string}
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
      const socialMediaId = 'DISCORD_EXAMPLE_ID';

      render(
        <SocialAccordion
          accounts={[]}
          error={false}
          socialMediaId={socialMediaId}
          title={mockedSocialMedias().get(socialMediaId)?.name as string}
        />
      );
      const accountQuantity = screen.getByText(/0/);

      expect(accountQuantity).toBeInTheDocument();
    });

    it('renders with one account if list have one account', () => {
      const [account] = mockDiscordData;
      const socialMediaId = 'DISCORD_EXAMPLE_ID';

      render(
        <SocialAccordion
          accounts={[{ ...account, valid: true }]}
          error={false}
          socialMediaId={socialMediaId}
          title={mockedSocialMedias().get(socialMediaId)?.name as string}
        />
      );

      const accountQuantity = screen.getByText(/1/);

      expect(accountQuantity).toBeInTheDocument();
    });
  });
});
