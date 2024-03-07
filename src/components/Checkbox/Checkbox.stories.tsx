import type { Story, StoryDefault } from '@ladle/react';

import { Checkbox } from './Checkbox';

import { CheckboxProps } from './Checkbox.types';

export default {
  title: 'Checkbox',
} satisfies StoryDefault;

export const StoryCheckbox: Story<CheckboxProps> = (props) => (
  <Checkbox {...props} />
);

StoryCheckbox.args = {
  children: 'Hello',
};
