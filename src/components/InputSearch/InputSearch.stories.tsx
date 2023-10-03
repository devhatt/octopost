import React from 'react';

import { Story } from '@ladle/react';

import InputSearch from './InputSearch';

import { IInputProps } from './IInputProps.types';

export default {
  title: 'InputSearch',
  component: InputSearch,
};

const Template: Story<IInputProps> = (args) => <InputSearch {...args} />;

export const InputSearchComponent = Template.bind({});
InputSearchComponent.args = {
  name: 'Input Search',
  placeholder: 'Search Social Media',
  required: true,
  errors: false,
  errorMessage: 'Erro no campo de entrada',
};
