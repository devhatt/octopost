import type { Story } from '@ladle/react';

import UserImage from './UserImage';

import { IUserImage } from './UserImage.type';

export const UserImageComponent: Story<IUserImage> = (props) => {
  return <UserImage accountName={props.accountName} image={props.image} />;
};

UserImageComponent.args = {
  accountName: 'Jhon doe',
  image:
    'https://pbs.twimg.com/profile_images/1539832609315987456/vaTzT3Co_400x400.jpg',
};
