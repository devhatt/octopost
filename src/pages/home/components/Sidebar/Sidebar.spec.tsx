import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SocialMedia } from '~services/api/social-media/social-media.types';
import * as useSocialMediaStoreModule from '~stores/useSocialMediaStore/useSocialMediaStore';

import Sidebar from './Sidebar';

const mockAccounts = [
  {
    avatar: 'https://example.com/image1.jpg',
    id: '1',
    socialMediaId: 'DISCORD_EXAMPLE_ID',
    token: 'DISCORD_EXAMPLE_TOKEN_1',
    userName: 'Discord User 1',
    valid: true,
  },
  {
    avatar: 'https://example.com/image2.jpg',
    id: '14',
    socialMediaId: 'TWITTER_EXAMPLE_ID',
    token: 'TWITTER_EXAMPLE_TOKEN_14',
    userName: 'Twitter User 14',
    valid: true,
  },
  {
    avatar: 'https://example.com/image3.jpg',
    id: '2',
    socialMediaId: 'DISCORD_EXAMPLE_ID',
    token: 'DISCORD_EXAMPLE_TOKEN_2',
    userName: 'Discord User 2',
    valid: false,
  },
  {
    avatar: 'https://example.com/image4.jpg',
    id: '3',
    socialMediaId: 'DISCORD_EXAMPLE_ID',
    token: 'DISCORD_EXAMPLE_TOKEN_3',
    userName: 'Discord User 3',
    valid: true,
  },
];
const mockSocialMedias = new Map<SocialMedia['id'], SocialMedia>([
  [
    'DISCORD_EXAMPLE_ID',
    {
      icon: 'Icon',
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
      icon: 'Icon',
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
]);

describe('Sidebar component', () => {
  it('renders correctly', () => {
    vi.spyOn(useSocialMediaStoreModule, 'useSocialMediaStore').mockReturnValue({
      accounts: mockAccounts,
      socialMedias: mockSocialMedias,
    });

    render(<Sidebar />);

    const sideBarComponentEvidence = screen.getByText(/Select Social Media/);

    expect(sideBarComponentEvidence).toBeInTheDocument();
  });

  it('renders all accounts from store', async () => {
    vi.spyOn(useSocialMediaStoreModule, 'useSocialMediaStore').mockReturnValue({
      accounts: {
        data: mockAccounts,
        error: '',
        loading: false,
      },
      socialMedias: mockSocialMedias,
    });

    render(<Sidebar />);

    const [account] = mockAccounts;
    const socialMedia = mockSocialMedias.get(account.socialMediaId);

    const accordionEvidence = screen.getByText(socialMedia?.name as string);
    await userEvent.click(accordionEvidence);

    const accountEvidence = screen.getByText(account.userName);

    expect(accordionEvidence).toBeInTheDocument();
    expect(accountEvidence).toBeInTheDocument();
  });

  it('dont render accounts when accounts store is empty', () => {
    vi.spyOn(useSocialMediaStoreModule, 'useSocialMediaStore').mockReturnValue({
      accounts: {
        data: mockAccounts,
        error: '',
        loading: false,
      },
      socialMedias: new Map<SocialMedia['id'], SocialMedia>(),
    });

    render(<Sidebar />);

    const [account] = mockAccounts;
    const socialMedia = mockSocialMedias.get(account.socialMediaId);

    const accordionEvidence = screen.queryByText(socialMedia?.name as string);
    expect(accordionEvidence).not.toBeInTheDocument();
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

  it('renders modal when the button is clicked', async () => {
    render(<Sidebar />);

    const buttonToOpenModal = screen.getByText(/\+ New Account/);
    await userEvent.click(buttonToOpenModal);

    const openModalEvidence = screen.getByText(/Adicionar Social/);
    expect(openModalEvidence).toBeInTheDocument();
  });

  it('closes when the esc key is pressed', async () => {
    render(<Sidebar />);

    const buttonToOpenModal = screen.getByText(/\+ New Account/);
    await userEvent.click(buttonToOpenModal);

    await userEvent.type(document.body, '{Escape}');

    await waitFor(() => {
      const closeModalEvidence = screen.queryByText(/Adicionar Social/);
      expect(closeModalEvidence).not.toBeInTheDocument();
    });
  });

  test('Closes modal when clicked outside', async () => {
    render(<Sidebar />);

    const buttonToOpenModal = screen.getByText(/\+ New Account/);
    await userEvent.click(buttonToOpenModal);

    const modalBackgroundEvidence = screen.getByTestId('portal');
    await userEvent.click(modalBackgroundEvidence);

    await waitFor(() => {
      expect(modalBackgroundEvidence).not.toBeInTheDocument();
    });
  });
  describe('when filters accordion content', () => {
    it('by account username', async () => {
      vi.spyOn(
        useSocialMediaStoreModule,
        'useSocialMediaStore'
      ).mockReturnValue({
        accounts: {
          data: mockAccounts,
          error: '',
          loading: false,
        },
        socialMedias: mockSocialMedias,
      });

      render(<Sidebar />);

      const inputSearchComponent = screen.getByPlaceholderText(
        'Search for social media'
      );

      await userEvent.type(inputSearchComponent, 'Twitter');

      const discordAccordion = screen.getByText('Discord');
      await waitForElementToBeRemoved(discordAccordion);

      const accordion = screen.getByText('Twitter');
      await userEvent.click(accordion);

      const evidence = screen.getByText('Twitter User 14');

      expect(evidence).toBeInTheDocument();
      expect(discordAccordion).not.toBeInTheDocument();
    });

    it('and theres no results', async () => {
      vi.spyOn(
        useSocialMediaStoreModule,
        'useSocialMediaStore'
      ).mockReturnValue({
        accounts: {
          data: mockAccounts,
          error: '',
          loading: false,
        },
        socialMedias: mockSocialMedias,
      });

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
