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
    <Button circle icon={<Icon icon="pin" />} variant="container" />
    <Button circle icon={<Icon icon="hashtag" />} variant="outlined" />
    <br />
    <Button circle color="secondary" icon={<Icon icon="error" />} />
    <Button
      circle
      color="secondary"
      icon={<Icon icon="emote" />}
      variant="container"
    />
    <Button
      circle
      color="secondary"
      icon={<Icon icon="canva" />}
      variant="outlined"
    />
  </div>
);
