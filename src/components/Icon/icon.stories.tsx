import { Story } from '@ladle/react';

import Icon from './Icon';

import { IIconProps } from './icon.types';

export const iconFont: Story<IIconProps> = (props) => {
  return (
    <div>
      <Icon {...props} />
    </div>
  );
};

iconFont.args = {
  color: 'active',
  icon: 'at',
  size: 'large',
};
