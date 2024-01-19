import { Story } from '@ladle/react';

import InputSearch from './InputSearch';

import { TInputProps } from './InputSearch.types';

export default {
  component: InputSearch,
  title: 'InputSearch',
};

const Template: Story<TInputProps> = (args) => (
  <InputSearch {...args} ref={undefined} />
);

export const InputSearchComponent = Template.bind({});
InputSearchComponent.args = {
  error: false,
  errorMessage: 'Erro no campo de entrada',
  name: 'Input Search',
  placeholder: 'Search Social Media',
  required: true,
};
