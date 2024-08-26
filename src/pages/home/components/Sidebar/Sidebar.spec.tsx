import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SocialMedia } from '~services/api/social-media/social-media.types';
import {
  mockedAccounts,
  mockedAddAccount,
  mockedSocialMedias,
  mockedUseSocialMediaStore,
} from '~stores/__mocks__/useSocialMediaStore.mock.ts';

import Sidebar from './Sidebar';

vi.mock(
  '~stores/useSocialMediaStore/useSocialMediaStore',
  () => mockedUseSocialMediaStore
);

beforeEach(() => {
  vi.spyOn(mockedUseSocialMediaStore, 'useSocialMediaStore').mockImplementation(
    () => ({
      accounts: mockedAccounts(),
      addAccount: mockedAddAccount,
      socialMedias: mockedSocialMedias(),
    })
  );
});

describe('Sidebar component', () => {
  it('renders correctly', () => {
    render(<Sidebar />);

    const sideBarComponentEvidence = screen.getByText(/select social media/i);

    expect(sideBarComponentEvidence).toBeInTheDocument();
  });

  it('renders all accounts from store', async () => {
    render(<Sidebar />);

    const accounts = mockedAccounts().data;

    for (var account in accounts) {
      const socialMedia = mockedSocialMedias().get(account);

      const accordionEvidence = screen.getByText(
        new RegExp(socialMedia?.name as string, 'i')
      );

      await userEvent.click(accordionEvidence);

      expect(accordionEvidence).toBeInTheDocument();
    }

    Object.values(accounts).forEach((values) => {
      values.forEach((value) => {
        const accountEvidence = screen.getByText(value.userName);

        expect(accountEvidence).toBeInTheDocument();
      });
    });
  });

  it('renders favorites accounts when exists in store', async () => {
    render(<Sidebar />);

    const favoriteAccordion = screen.getByText('Favorite');
    await userEvent.click(favoriteAccordion);

    const favoriteAccount = screen.getByText('Favorite User 15');
    expect(favoriteAccount).toBeInTheDocument();
  });

  it('dont render accounts when accounts store is empty', () => {
    vi.spyOn(mockedUseSocialMediaStore, 'useSocialMediaStore').mockReturnValue({
      accounts: {
        data: {
          DISCORD_EXAMPLE_ID: [],
          FAVORITE_ACCOUNTS_ID: [],
          TWITTER_EXAMPLE_ID: [],
        },
        error: '',
        loading: false,
      },
      addAccount: mockedAddAccount,
      socialMedias: new Map<SocialMedia['id'], SocialMedia>(),
    });

    render(<Sidebar />);

    const accounts = mockedAccounts().data;

    for (let account in accounts) {
      const socialMedia = mockedSocialMedias().get(account);

      const accordionEvidence = screen.queryByText(
        new RegExp(socialMedia?.name as string, 'i')
      );
      expect(accordionEvidence).not.toBeInTheDocument();
    }
  });

  it('renders the InputSearch', async () => {
    render(<Sidebar />);

    const inputSearchComponent = screen.getByPlaceholderText(
      /Search for social media/
    );

    expect(inputSearchComponent).toBeInTheDocument();

    await userEvent.type(inputSearchComponent, 'Test text');

    expect(inputSearchComponent).toHaveValue('Test text');
  });

  it('renders modal when the button more account is clicked', async () => {
    render(<Sidebar />);

    const buttonToOpenModal = screen.getByRole('button', {
      name: 'New Account',
    });
    await userEvent.click(buttonToOpenModal);

    const openModalEvidence = screen.getByText(/new account/i);
    expect(openModalEvidence).toBeInTheDocument();
  });

  it('closes when the esc key is pressed', async () => {
    render(<Sidebar />);

    const buttonToOpenModal = screen.getByRole('button', {
      name: 'New Account',
    });
    await userEvent.click(buttonToOpenModal);

    await userEvent.type(document.body, '{Escape}');

    await waitFor(() => {
      const closeModalEvidence = screen.queryByText(/Adicionar Social/);
      expect(closeModalEvidence).not.toBeInTheDocument();
    });
  });

  test('Closes modal when clicked outside', async () => {
    render(<Sidebar />);

    const buttonToOpenModal = screen.getByRole('button', {
      name: 'New Account',
    });
    await userEvent.click(buttonToOpenModal);

    const modalBackgroundEvidence = screen.getByTestId('portal');
    await userEvent.click(modalBackgroundEvidence);

    await waitFor(() => {
      expect(modalBackgroundEvidence).not.toBeInTheDocument();
    });
  });

  describe('when filters accordion content', () => {
    it('by account username', async () => {
      render(<Sidebar />);

      const inputSearchComponent = screen.getByPlaceholderText(
        'Search for social media'
      );

      await userEvent.type(inputSearchComponent, 'Twitter');

      const discordAccordion = screen.getByText(/discord/i);
      await waitForElementToBeRemoved(discordAccordion);

      const accordion = screen.getByText(/twitter/i);
      await userEvent.click(accordion);

      const evidence = screen.getByText('Twitter User 14');

      expect(evidence).toBeInTheDocument();
      expect(discordAccordion).not.toBeInTheDocument();
    });

    it('and theres no results', async () => {
      render(<Sidebar />);

      const inputSearchComponent = screen.getByPlaceholderText(
        'Search for social media'
      );

      await userEvent.type(inputSearchComponent, 'non existent name');

      const discordAccordion = screen.getByText('Discord');
      await waitForElementToBeRemoved(discordAccordion);

      const textNoResult = screen.getByText(
        'Não há resultados para essa busca'
      );

      expect(textNoResult).toBeInTheDocument();
      expect(discordAccordion).not.toBeInTheDocument();
    });
  });
});
