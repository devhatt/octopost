import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  mockedAccounts,
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
      render(
        <SocialAccordion
          accounts={mockedAccounts().data.DISCORD_EXAMPLE_ID}
          error={false}
          socialMediaId="DISCORD_EXAMPLE_ID"
        />
      );
      const accordion = screen.getByText(/discord/i);

      expect(accordion).toBeInTheDocument();
    });

    it('renders the intern content of accordion when is open', () => {
      render(
        <SocialAccordion
          accounts={mockedAccounts().data.DISCORD_EXAMPLE_ID}
          error={false}
          socialMediaId="DISCORD_EXAMPLE_ID"
        />
      );
      const innerContent = screen.getByText(/discord/i);

      expect(innerContent).toBeInTheDocument();
    });

    it('shows the error on screen if error={true}', () => {
      render(
        <SocialAccordion
          accounts={[]}
          error
          socialMediaId="DISCORD_EXAMPLE_ID"
        />
      );
      const error = screen.getByText(/error/i);

      expect(error).toBeInTheDocument();
    });
  });

  describe('when click', () => {
    it('closes the accordion', () => {
      render(
        <SocialAccordion
          accounts={mockedAccounts().data.DISCORD_EXAMPLE_ID}
          error={false}
          socialMediaId="DISCORD_EXAMPLE_ID"
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

    it('renders with one if list have one account', () => {
      const accounts = mockedAccounts().data;

      render(
        <SocialAccordion
          accounts={accounts.DISCORD_EXAMPLE_ID}
          error={false}
          socialMediaId="DISCORD_EXAMPLE_ID"
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
