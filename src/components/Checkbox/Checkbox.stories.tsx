import type { Story, StoryDefault } from '@ladle/react';

import { Checkbox } from './Checkbox';

import { CheckboxProps } from './Checkbox.types';

export default {
  title: 'Checkbox',
} satisfies StoryDefault;

export const UncontrolledCheckbox: Story<CheckboxProps> = (props) => (
  <Checkbox {...props} />
);
export const ControlledCheckbox: Story<CheckboxProps> = (props) => {
  const test = false;

  return <Checkbox {...props} checked={test} />;
};

UncontrolledCheckbox.args = {
  children: 'Hello',
};

ControlledCheckbox.args = {
  children: 'Hello',
};
