import { SVGProps } from 'react';

import { icons } from './data';

export type TIconsType = keyof typeof icons;

export interface IIconProps extends SVGProps<SVGSVGElement> {
  icon: TIconsType;
  size?: number;
}
