import { Story } from '@ladle/react';

import Icon from '~components/Icon/Icon';

import Button from './Button';

import { CircleButtonProps, TextButtonProps } from './Button.types';

export default {
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    disabled: {
      control: { type: 'check' },
      options: [''],
    },
    variant: {
      control: { type: 'select' },
      options: ['container', 'outlined', 'text'],
    },
  },
};

export const ButtonText: Story<TextButtonProps> = (props) => (
  <Button
    color={props.color}
    disabled={props.disabled}
    type={props.type}
    variant={props.variant}
  >
    Post Later
  </Button>
);
ButtonText.args = {
  color: 'primary',
  variant: 'outlined',
};

export const CircleButton: Story<CircleButtonProps> = (props) => (
  <Button
    circle
    color={props.color}
    disabled={props.disabled}
    icon={<Icon icon="plus" size={32} />}
    type={props.type}
    variant={props.variant}
  />
);
CircleButton.args = {
  color: 'primary',
  variant: 'outlined',
};
