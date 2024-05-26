import { faker } from '@faker-js/faker';
import { render, RenderResult, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { AccountCard } from './AccountCard';

import { AccountCardProps } from './AccountCard.types';

const makeSut = ({
  username = faker.internet.userName(),
  ...props
}: Partial<AccountCardProps>): RenderResult =>
  render(<AccountCard username={username} {...props} />);

describe('AccountCard', () => {
  let user = userEvent.setup();

  beforeEach(() => {
    user = userEvent.setup();
  });

  describe('when initialize', () => {
    it('renders an avatar card', () => {
      const userName = faker.internet.userName();
      makeSut({
        avatarURL: faker.image.avatar(),
        username: userName,
      });

      const avatar = screen.getByRole('img', { name: userName });

      expect(avatar).toBeInTheDocument();
    });

    it('render an username', () => {
      const username = faker.internet.userName();

      makeSut({ username });

      const avatar = screen.getByText(username);

      expect(avatar).toBeInTheDocument();
    });
  });

  describe('when click on favorite', () => {
    it('call onFavoriteChange with true', async () => {
      const onFavoriteChange = vi.fn();

      makeSut({ onFavoriteChange });

      const star = screen.getByRole('button');

      await user.click(star);

      expect(onFavoriteChange).toHaveBeenCalledWith(true);
    });
  });

  describe('when error is true', () => {
    it('should render error switch', () => {
      makeSut({ hasError: true });

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('when click on switch', () => {
    it('call onEnableChange with true', async () => {
      const onEnableChange = vi.fn();

      makeSut({ onEnableChange });

      const checkbox = screen.getByRole('checkbox');

      await user.click(checkbox);

      expect(onEnableChange).toHaveBeenCalledWith(true);
    });
  });
});
