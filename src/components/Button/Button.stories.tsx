import { Story } from '@ladle/react';

import { Icon } from '~components/Icon/Icon';

import Button from './Button';

import { ICircleButtonProps } from './Button.types';

export const ButtonStories: Story = () => (
  <div>
    <Button>Primary Text</Button>
    <Button variant="container">Primary Container</Button>
    <Button variant="outlined">Primary Outlined</Button>
    <br />
    <Button color="secondary">Secondary Text</Button>
    <Button color="secondary" variant="container">
      Secondary Container
    </Button>
    <Button color="secondary" variant="outlined">
      Secondary Outlined
    </Button>
    <br />
    <Button circle icon={<Icon icon="alert" />} />
    <Button circle icon={<Icon icon="check" />} variant="container" />
    <Button circle icon={<Icon icon="close" />} variant="outlined" />
    <br />
    <Button circle color="secondary" icon={<Icon icon="star" />} />
    <Button
      circle
      color="secondary"
      icon={<Icon icon="right-arrow" />}
      variant="container"
    />
    <Button
      circle
      color="secondary"
      icon={<Icon icon="star" />}
      variant="outlined"
    />
  </div>
);
ButtonStories.args = {
  color: 'primary',
  variant: 'container',
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
  variant: 'container',
};
