import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as useSocialMediaStoreModule from '~stores/useSocialMediaStore';

import Sidebar from './Sidebar';

vi.mock('framer-motion', () => ({
  motion: {
    div: (props: any) => <div {...props} />,
    // adicione mais mocks conforme necessário
  },
}));

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
const mockSocialMedias = [
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
];

// TODO: revisitar esse teste pois está falhando
describe('Sidebar component', () => {
  it('renders correctly', () => {
    render(<Sidebar />);

    const sideBarComponentEvidence = screen.getByText(/Select Social Media/);

    expect(sideBarComponentEvidence).toBeInTheDocument();
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

  it.only('filters the accounts by username with search input', async () => {
    vi.spyOn(useSocialMediaStoreModule, 'useSocialMediaStore').mockReturnValue({
      accounts: mockAccounts,
      socialMedias: mockSocialMedias,
    });

    render(<Sidebar />);

    const inputSearchComponent = screen.getByPlaceholderText(
      'Search for social media'
    );
    await userEvent.type(inputSearchComponent, '4');

    // const discordAccordion = screen.getByText('Discord');
    // expect(discordAccordion).not.toBeInTheDocument();

    // const accordion = screen.('Discord');
    // await userEvent.click(accordionHeader);

    // const evidence = screen.getByText('Discord User 1');
    // expect(evidence).toBeInTheDocument();
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
});
