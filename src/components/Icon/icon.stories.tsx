import React from 'react';

import { Story } from '@ladle/react';

import Icon from './Icon';

import { IIconProps } from './Icon.types';

export default {
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['black', 'purple', 'red', 'blue', 'violet', 'cyan'],
    },
    icon: {
      control: { type: 'select' },
      options: [
        'left-arrow',
        'right-arrow',
        'check',
        'hamburguer',
        'close',
        'plus',
        'small-circle-filled',
        'mag',
        'alert',
        'star',
        'star-filled',
        'minus',
      ],
    },
    size: {
      control: {
        max: 100,
        min: 0,
        step: 1,
        type: 'range',
      },
    },
  },
  component: Icon,
  title: 'Icon',
};

const Template: Story<IIconProps> = (args) => <Icon {...args} />;

export const DefaultIconStory: Story<IIconProps> = Template.bind({});
DefaultIconStory.args = {
  color: 'black',
  icon: 'left-arrow',
  size: 24,
};
