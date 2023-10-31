import React from 'react';

import { Story } from '@ladle/react';

import InputSearch from './InputSearch';

import { TInputProps } from './InputSearch.types';

export default {
  title: 'InputSearch',
  component: InputSearch,
};

const Template: Story<TInputProps> = (args) => (
  <InputSearch {...args} ref={undefined} />
);

export const InputSearchComponent = Template.bind({});
InputSearchComponent.args = {
  name: 'Input Search',
  placeholder: 'Search Social Media',
  required: true,
  error: false,
  errorMessage: 'Erro no campo de entrada',
};
