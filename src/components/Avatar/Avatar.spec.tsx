import { faker } from '@faker-js/faker';
import { render, RenderResult, screen } from '@testing-library/react';

import { Avatar } from './Avatar';

import { AvatarProps } from './Avatar.types';

const makeSut = ({
  username = faker.internet.userName(),
  ...props
}: Partial<AvatarProps>): RenderResult =>
  render(<Avatar username={username} {...props} />);

describe('Avatar', () => {
  describe('when initialize', () => {
    it('renders an image', () => {
      makeSut({ image: faker.image.url() });

      const avatar = screen.getByRole('img');

      expect(avatar).toBeInTheDocument();
    });

    it('render initial letter of username', () => {
      const username = faker.internet.userName();

      makeSut({ username });

      const avatar = screen.getByText(username.split('')[0]);

      expect(avatar).toBeInTheDocument();
    });
  });
});
