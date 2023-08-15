import { useState } from 'react';

import { Story } from '@ladle/react';

import Switch from './Switch';

export const SwitchComponent: Story = () => {
  const [checked, setChecked] = useState(false);

  return <Switch checked={checked} setChecked={setChecked} />;
};
