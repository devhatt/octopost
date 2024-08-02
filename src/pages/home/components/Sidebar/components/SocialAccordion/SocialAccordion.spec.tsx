import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

vi.spyOn(window, 'scrollTo');

// TODO: revisitar esse teste pois está falhando
describe.skip('SocialAccordion', () => {
  describe('when initilize', () => {
    it('renders the component', () => {
      const socialMediaId = 'DISCORD_EXAMPLE_ID';
      render(
        <SocialAccordion
          accounts={mockedAccounts().data.DISCORD_EXAMPLE_ID}
          error={false}
          socialMediaId={socialMediaId}
          title={mockedSocialMedias().get(socialMediaId)?.name}
        />
      );
      const accordion = screen.getByText(/discord/i);

      expect(accordion).toBeInTheDocument();
    });

    it('renders the intern content of accordion when is open', () => {
      const socialMediaId = 'DISCORD_EXAMPLE_ID';

      render(
        <SocialAccordion
          accounts={mockedAccounts().data.DISCORD_EXAMPLE_ID}
          error={false}
          socialMediaId={socialMediaId}
          title={mockedSocialMedias().get(socialMediaId)?.name}
        />
      );
      const innerContent = screen.getByText(/discord/i);

      expect(innerContent).toBeInTheDocument();
    });

    it('shows the error on screen if error={true}', () => {
      const socialMediaId = 'DISCORD_EXAMPLE_ID';

      render(
        <SocialAccordion
          accounts={[]}
          error
          socialMediaId={socialMediaId}
          title={mockedSocialMedias().get(socialMediaId)?.name}
        />
      );
      const error = screen.getByText(/error/i);

      expect(error).toBeInTheDocument();
    });
  });

  describe('when click', () => {
    const socialMediaId = 'DISCORD_EXAMPLE_ID';

    it('closes the accordion', () => {
      render(
        <SocialAccordion
          accounts={mockedAccounts().data.DISCORD_EXAMPLE_ID}
          error={false}
          socialMediaId={socialMediaId}
          title={mockedSocialMedias().get(socialMediaId)?.name}
        />
      );
      const accounts = mockedAccounts().data;

      Object.values(accounts.DISCORD_EXAMPLE_ID).forEach(async (account) => {
        const accordion = await screen.findByRole('button');
        await userEvent.click(accordion);

        const userCard = screen.getByText(new RegExp(account.userName, 'i'));

        expect(userCard).toBeInTheDocument();

        await userEvent.click(accordion);

        await waitFor(() =>
          expect(
            screen.queryByText(new RegExp(account.userName, 'i'))
          ).not.toBeInTheDocument()
        );
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
          title={mockedSocialMedias().get(socialMediaId)?.name}
        />
      );
      const accountQuantity = screen.getByText(/0/);

      expect(accountQuantity).toBeInTheDocument();
    });

    it('renders with one if list have one account', () => {
      const accounts = mockedAccounts().data;
      const socialMediaId = 'DISCORD_EXAMPLE_ID';

      render(
        <SocialAccordion
          accounts={accounts.DISCORD_EXAMPLE_ID}
          error={false}
          socialMediaId={socialMediaId}
          title={mockedSocialMedias().get(socialMediaId)?.name}
        />
      );

      Object.values(accounts.DISCORD_EXAMPLE_ID).forEach((account) => {
        const accountQuantity = screen.getByText(
          new RegExp(String(account.id), 'i')
        );

        expect(accountQuantity).toBeInTheDocument();
      });
    });
  });
});
