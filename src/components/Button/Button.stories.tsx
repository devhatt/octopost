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
    <Button circle icon={<Icon icon="at" />} />
    <Button variant="container" circle icon={<Icon icon="pin" />} />
    <Button variant="outlined" circle icon={<Icon icon="hashtag" />} />
    <br />
    <Button color="secondary" circle icon={<Icon icon="error" />} />
    <Button
      color="secondary"
      variant="container"
      circle
      icon={<Icon icon="emote" />}
    />
    <Button
      color="secondary"
      variant="outlined"
      circle
      icon={<Icon icon="canva" />}
    />
  </div>
);
