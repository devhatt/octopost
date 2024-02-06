import React, { SVGProps } from 'react';

import omit from 'lodash.omit';

// import { Check, LeftArrow, RightArrow } from './icons';

import { IIconProps } from './Icon.types';
import Alert from './icons/alert.svg?react';
import Check from './icons/check.svg?react';
import CheckboxCheckedFilled from './icons/checkbox-checked-filled.svg?react';
import CheckboxChecked from './icons/checkbox-checked.svg?react';
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

const icons = (
  props: Omit<IIconProps, 'icon' | 'size'>
): Record<IIconProps['icon'], React.ReactNode> => ({
  alert: <Alert />,
  check: <Check {...props} />,
  close: <Close {...props} />,
  hamburguer: <Hamburguer {...props} />,
  'left-arrow': <LeftArrow {...props} />,
  mag: <Mag />,
  minus: <Minus />,
  plus: <Plus {...props} />,
  'right-arrow': <RightArrow {...props} />,
  'small-circle-filled': <SmallCircleFilled />,
  star: <Star />,
  'star-filled': <StarFilled />,
});

function Icon(props: IIconProps): React.ReactNode {
  const { size, ...rest } = props;

  if (size !== undefined) {
    rest.width = size;
    rest.height = size;
  }

  return <div>{icons(omit(rest, ['icon', 'size']))[props.icon]}</div>;
}

export default Icon;
