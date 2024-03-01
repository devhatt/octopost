import { faker } from '@faker-js/faker';
import type { Story, StoryDefault } from '@ladle/react';

import { Avatar } from './Avatar';

import { AvatarProps } from './Avatar.types';

export default {
  title: 'Avatar',
} satisfies StoryDefault;

export const StoryAvatar: Story<AvatarProps> = (props) => <Avatar {...props} />;

StoryAvatar.storyName = 'Avatar';

StoryAvatar.args = {
  image: faker.image.avatarGitHub(),
  username: faker.internet.userName(),
};

export const StoryAvatarWithoutImage: Story<AvatarProps> = (props) => (
  <Avatar {...props} image={undefined} />
);

StoryAvatarWithoutImage.storyName = 'Avatar without image';

StoryAvatarWithoutImage.args = {
  username: faker.internet.userName(),
};
