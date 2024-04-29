import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SocialAccordion from './SocialAccordion';

import { IAccountList } from './SocialAccordion.type';

const mockList: IAccountList[] = [
  {
    id: '123',
    image: 'userImage',
    username: 'jhon doe',
  },
];

vi.spyOn(window, 'scrollTo');

describe('SocialAccordion', () => {
  describe('when initilize', () => {
    it('renders the component', () => {
      render(
        <SocialAccordion
          accountList={mockList}
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
          accountList={mockList}
          error={false}
          socialMediaName="facebook"
        />
      );
      const innerContent = screen.getByText(/facebook/i);

      expect(innerContent).toBeInTheDocument();
    });

    it('shows the error on screen if error={true}', () => {
      render(
        <SocialAccordion accountList={[]} error socialMediaName="facebook" />
      );
      const error = screen.getByText(/error/i);

      expect(error).toBeInTheDocument();
    });
  });

  describe('when click', () => {
    it('closes the accordion', async () => {
      render(
        <SocialAccordion
          accountList={mockList}
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
