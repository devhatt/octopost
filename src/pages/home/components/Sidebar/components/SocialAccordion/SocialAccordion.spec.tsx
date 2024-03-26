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

      const accordion = screen.getByTestId('accordion');
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
      const openAccordion = screen.getByText(/jhon doe/i);
      expect(openAccordion).toBeInTheDocument();
    });

    it('shows the error on screen if error={true}', () => {
      render(
        <SocialAccordion accountList={[]} error socialMediaName="facebook" />
      );
      const accordion = screen.getByText(/error/i);
      expect(accordion).toBeInTheDocument();
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
      const accordion = screen.getByText(/jhon doe/i);

      expect(accordion).toBeInTheDocument();

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
          accountList={[]}
          error={false}
          socialMediaName="facebook"
        />
      );
      const zero = screen.getByText(/0/);
      expect(zero).toBeInTheDocument();
    });

    it('renders with one if list have one account', () => {
      render(
        <SocialAccordion
          accountList={mockList}
          error={false}
          socialMediaName="facebook"
        />
      );
      const one = screen.getByText(/1/);
      expect(one).toBeInTheDocument();
    });
  });
});
