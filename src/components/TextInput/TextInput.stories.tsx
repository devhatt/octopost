import { Story } from '@ladle/react';

import TextInput from './TextInput';

import { TInputProps } from './TextInput.types';

export default {
  component: TextInput,
  title: 'TextInput',
};

const Template: Story<TInputProps> = (args) => (
  <TextInput {...args} ref={undefined} />
);

export const InputSearchComponent = Template.bind({});
InputSearchComponent.args = {
  error: false,
  name: 'Input Search',
  placeholder: 'Search Social Media',
  required: true,
  supportText: 'Erro no campo de entrada',
};
