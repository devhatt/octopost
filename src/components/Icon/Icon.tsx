import React, { SVGProps } from 'react';

import omit from 'lodash.omit';

import Alert from './icons/alert.svg?react';
import Check from './icons/check.svg?react';
import Close from './icons/close.svg?react';
import Hamburguer from './icons/hamburguer.svg?react';
import LeftArrow from './icons/left-arrow.svg?react';
import Mag from './icons/mag.svg?react';
import Minus from './icons/minus.svg?react';
import Plus from './icons/plus.svg?react';
import RightArrow from './icons/right-arrow.svg?react';
import SmallCircleFilled from './icons/small-circle-filled.svg?react';
import StarFilled from './icons/star-filled.svg?react';
import Star from './icons/star.svg?react';

const icons = {
  alert: Alert,
  check: Check,
  close: Close,
  hamburguer: Hamburguer,
  'left-arrow': LeftArrow,
  mag: Mag,
  minus: Minus,
  plus: Plus,
  'right-arrow': RightArrow,
  'small-circle-filled': SmallCircleFilled,
  star: Star,
  'star-filled': StarFilled,
};

export type TIconsType = keyof typeof icons;

export interface IIconProps extends SVGProps<SVGSVGElement> {
  icon: TIconsType;
  size?: number;
}

function Icon(props: IIconProps): React.ReactNode {
  const Component = icons[props.icon];

  return (
    <Component
      {...omit(props, ['icon', 'size'])}
      height={props.size}
      width={props.size}
    />
  );
}

export default Icon;
