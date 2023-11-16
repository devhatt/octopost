import { useState } from 'react';

import { Story } from '@ladle/react';

import Checkbox from './Checkbox';

import { TCheckboxProps } from './Checkbox.types';

export const CheckboxStories: Story<TCheckboxProps> = (props) => {
  const [checked, handleChange] = useState(false);

  return (
    <Checkbox {...props} checked={checked} onChange={handleChange}>
      Checkbox
    </Checkbox>
  );
};
