import { Story } from '@ladle/react';

import Checkbox from './Checkbox';

import { TCheckboxProps } from './Checkbox.types';

export const CheckboxStories: Story<TCheckboxProps> = (props) => {
  return <Checkbox {...props}>Checkbox</Checkbox>;
};
