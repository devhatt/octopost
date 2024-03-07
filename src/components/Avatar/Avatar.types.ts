import { ComponentPropsWithRef } from 'react';

type AvatarBaseProps = ComponentPropsWithRef<'img'>;

export type AvatarProps = AvatarBaseProps & {
  image?: string;
  username: string;
};
