import { Story } from '@ladle/react';

import Icon from '~components/Icon/Icon';

import Button from './Button';

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
    <Button circle icon={<Icon icon="alert" width={32} />} />
    <Button
      circle
      icon={<Icon icon="check" width={32} />}
      variant="container"
    />
    <Button circle icon={<Icon icon="close" width={32} />} variant="outlined" />
    <br />
    <Button
      circle
      color="secondary"
      icon={<Icon icon="hamburguer" width={32} />}
    />
    <Button
      circle
      color="secondary"
      icon={<Icon icon="left-arrow" width={32} />}
      variant="container"
    />
    <Button
      circle
      color="secondary"
      icon={<Icon icon="plus" width={32} />}
      variant="outlined"
    />
  </div>
);
