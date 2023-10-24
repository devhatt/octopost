import { act, render, screen, waitFor } from '@testing-library/react';
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

jest.spyOn(window, 'scrollTo');

describe('SocialAccordion', () => {
  describe('when initilize', () => {
    it('renders the component', () => {
      render(
        <SocialAccordion
          error={false}
          accountList={mockList}
          socialMediaName="facebook"
        />
      );
      expect(screen.getByText(/facebook/i)).toBeInTheDocument();
    });

    it('renders the intern content of accordion when is open', () => {
      render(
        <SocialAccordion
          error={false}
          accountList={mockList}
          socialMediaName="facebook"
        />
      );
      expect(screen.getByText(/jhon doe/i)).toBeInTheDocument();
    });

    it('shows the error on screen if error={true}', () => {
      render(
        <SocialAccordion error accountList={[]} socialMediaName="facebook" />
      );
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });

  describe('when click', () => {
    it('closes the accordion', async () => {
      render(
        <SocialAccordion
          error={false}
          accountList={mockList}
          socialMediaName="facebook"
        />
      );

      const openAccordion = screen.getByText(/facebook/i);

      expect(screen.getByText(/jhon doe/i)).toBeInTheDocument();
      await act(async () => userEvent.click(openAccordion));
      await waitFor(() =>
        expect(screen.queryByText(/jhon doe/i)).not.toBeInTheDocument()
      );
    });
  });

  describe('account list', () => {
    it('renders with zero if list is empty', () => {
      render(
        <SocialAccordion
          error={false}
          accountList={[]}
          socialMediaName="facebook"
        />
      );
      expect(screen.getByText(/0/)).toBeInTheDocument();
    });

    it('renders with one if list have one account', () => {
      render(
        <SocialAccordion
          error={false}
          accountList={mockList}
          socialMediaName="facebook"
        />
      );
      expect(screen.getByText(/1/)).toBeInTheDocument();
    });
  });
});
