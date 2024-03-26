import { ComponentPropsWithoutRef } from 'react';

import { icons } from './data';

export type IconsType = keyof typeof icons;

export type IconProps = ComponentPropsWithoutRef<'svg'> & {
  icon: IconsType;
  size?: number;
};
