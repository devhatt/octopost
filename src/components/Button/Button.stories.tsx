import { Story } from '@ladle/react';

import Icon from '~components/Icon/Icon';

import Button from './Button';

import { ICircleButtonProps, ITextButtonProps } from './Button.types';

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

export const ButtonText: Story<ITextButtonProps> = (props) => (
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

export const CircleButton: Story<ICircleButtonProps> = (props) => (
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
