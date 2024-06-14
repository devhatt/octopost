import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mockedUseSocialMediaStore } from '~stores/__mocks__/useSocialMediaStore.mock.ts';
import { StoreAccount } from '~stores/useSocialMediaStore.types';

import SocialAccordion from './SocialAccordion';

const mockList: StoreAccount[] = [
  {
    avatar: 'https://example.com/avatar1.jpg',
    expiresAt: '2022-12-31T23:59:59Z',
    generatedAt: '2022-01-01T00:00:00Z',
    id: '1',
    socialMediaId: 'social1',
    token: 'token1',
    userName: 'User 1',
    valid: true,
  },
  {
    avatar: 'https://example.com/avatar2.jpg',
    expiresAt: '2023-12-31T23:59:59Z',
    generatedAt: '2023-01-01T00:00:00Z',
    id: '2',
    socialMediaId: 'social2',
    token: 'token2',
    userName: 'User 2',
    valid: false,
  },
];

vi.mock('~stores/useSocialMediaStore', () => mockedUseSocialMediaStore);

vi.spyOn(window, 'scrollTo');
global.scrollTo = vi.fn((..._args: unknown[]) => _args);

describe('SocialAccordion', () => {
  describe('when initilize', () => {
    it('renders the component', () => {
      render(
        <SocialAccordion
          accounts={mockList}
          error={false}
          socialMediaId="FACEBOOK_SOCIAL_MEDIA_ID"
        />
      );
      const accordion = screen.getByText(/facebook/i);

      expect(accordion).toBeInTheDocument();
    });

    it('renders the intern content of accordion when is open', () => {
      render(
        <SocialAccordion
          accounts={mockList}
          error={false}
          socialMediaId="FACEBOOK_SOCIAL_MEDIA_ID"
        />
      );
      const innerContent = screen.getByText(/facebook/i);

      expect(innerContent).toBeInTheDocument();
    });

    it('shows the error on screen if error={true}', () => {
      render(
        <SocialAccordion
          accounts={[]}
          error
          socialMediaId="FACEBOOK_SOCIAL_MEDIA_ID"
        />
      );
      const error = screen.getByText(/error/i);

      expect(error).toBeInTheDocument();
    });
  });

  describe('when click', () => {
    it('closes the accordion', async () => {
      render(
        <SocialAccordion
          accounts={mockList}
          error={false}
          socialMediaId="FACEBOOK_SOCIAL_MEDIA_ID"
        />
      );
      const openAccordion = await screen.findByRole('button');
      await userEvent.click(openAccordion);

      const userCard = screen.getByText(/user 1/i);

      expect(userCard).toBeInTheDocument();

      await userEvent.click(openAccordion);

      await waitFor(() =>
        expect(screen.queryByText(/user 1/i)).not.toBeInTheDocument()
      );
    });
  });

  describe('account list', () => {
    it('renders with zero if list is empty', () => {
      render(
        <SocialAccordion
          accounts={[]}
          error={false}
          socialMediaId="FACEBOOK_SOCIAL_MEDIA_ID"
        />
      );
      const accountQuantity = screen.getByText(/0/);

      expect(accountQuantity).toBeInTheDocument();
    });

    it('renders with one if list have one account', () => {
      render(
        <SocialAccordion
          accounts={[mockList[0]]}
          error={false}
          socialMediaId="FACEBOOK_SOCIAL_MEDIA_ID"
        />
      );
      const accountQuantity = screen.getByText(/1/);

      expect(accountQuantity).toBeInTheDocument();
    });
  });
});
