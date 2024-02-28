import React from 'react';

import omit from 'lodash.omit';

import { icons } from './data';

import { IIconProps } from './Icon.types';

function Icon(props: IIconProps): React.ReactNode {
  const Component = icons[props.icon];

  return (
    <Component
      {...omit(props, ['icon', 'size'])}
      height={props.size}
      role="img"
      width={props.size}
    />
  );
}

export default Icon;
