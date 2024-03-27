import { Story } from '@ladle/react';

import { CustomInputRef } from './CustomInput';

import { TInputProps } from './CustomInput.types';

export default {
  component: CustomInputRef,
  title: 'CustomInput',
};

const Template: Story<TInputProps> = (args) => (
  <CustomInputRef {...args} ref={undefined} />
);
export const InputSearchComponent = Template.bind({});
InputSearchComponent.args = {
  error: false,
  errorMessage: 'Erro no campo de entrada',
  name: 'Input Search',
  placeholder: 'Search Social Media',
  required: true,
};
