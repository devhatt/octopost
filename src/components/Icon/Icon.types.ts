import { ComponentPropsWithoutRef } from 'react';

import { icons } from './data';

export type Icons = keyof typeof icons;

export type IconProps = ComponentPropsWithoutRef<'svg'> & {
  icon: Icons;
  size?: number;
};
