import type { Story, StoryDefault } from '@ladle/react';

import { Switch } from './Switch';

import { SwitchProps } from './Switch.types';

export default {
  title: 'Switch',
} satisfies StoryDefault;

export const StorySwitch: Story<SwitchProps> = (props) => <Switch {...props} />;

StorySwitch.args = {
  variant: 'default',
};

StorySwitch.argTypes = {
  variant: {
    control: { type: 'select' },
    options: ['default', 'error'],
  },
};
