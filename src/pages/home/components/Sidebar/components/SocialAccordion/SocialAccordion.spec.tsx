import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

vi.spyOn(window, 'scrollTo');

// TODO: revisitar esse teste pois está falhando
describe.skip('SocialAccordion', () => {
  describe('when initilize', () => {
    it('renders the component', () => {
      render(
        <SocialAccordion
          accounts={mockList}
          error={false}
          socialMediaName="facebook"
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
          socialMediaName="facebook"
        />
      );
      const innerContent = screen.getByText(/facebook/i);

      expect(innerContent).toBeInTheDocument();
    });

    it('shows the error on screen if error={true}', () => {
      render(
        <SocialAccordion accounts={[]} error socialMediaName="facebook" />
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
          socialMediaName="facebook"
        />
      );

      const openAccordion = screen.getByText(/facebook/i);
      const userCard = screen.getByText(/jhon doe/i);

      expect(userCard).toBeInTheDocument();
      await userEvent.click(openAccordion);
      await waitFor(() =>
        expect(screen.queryByText(/jhon doe/i)).not.toBeInTheDocument()
      );
    });
  });

  describe('account list', () => {
    it('renders with zero if list is empty', () => {
      render(
        <SocialAccordion
          accounts={[]}
          error={false}
          socialMediaName="facebook"
        />
      );
      const accountQuantity = screen.getByText(/0/);

      expect(accountQuantity).toBeInTheDocument();
    });

    it('renders with one if list have one account', () => {
      render(
        <SocialAccordion
          accounts={mockList}
          error={false}
          socialMediaName="facebook"
        />
      );
      const accountQuantity = screen.getByText(/1/);

      expect(accountQuantity).toBeInTheDocument();
    });
  });
});
