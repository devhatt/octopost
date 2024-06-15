import { Story } from '@ladle/react';

import InputSearch from './InputSearch';

import { InputProps } from './InputSearch.types';

export default {
  component: InputSearch,
  title: 'InputSearch',
};

const Template: Story<InputProps> = (args) => (
  <InputSearch {...args} ref={undefined} />
);

export const InputSearchComponent = Template.bind({});
InputSearchComponent.args = {
  error: false,
  errorMessage: 'Erro no campo de entrada',
  name: 'Input Search',
  placeholder: 'Search Social Media',
  prefix: {
    action: (): void => console.log('Prefix action'),
    icon: 'alert',
  },
  required: true,
  suffix: {
    action: (): void => console.log('Suffix action'),
    icon: 'alert',
  },
};
