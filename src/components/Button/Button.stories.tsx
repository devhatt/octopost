import { Story } from '@ladle/react';

import Button from './Button';
import LocationIcon from './icons/LocationIcon';

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
    <Button circle icon={<LocationIcon />} />
    <Button variant="container" circle icon={<LocationIcon />} />
    <Button variant="outlined" circle icon={<LocationIcon />} />
    <br />
    <Button color="secondary" circle icon={<LocationIcon />} />
    <Button
      color="secondary"
      variant="container"
      circle
      icon={<LocationIcon />}
    />
    <Button
      color="secondary"
      variant="outlined"
      circle
      icon={<LocationIcon />}
    />
  </div>
);
