import { Story } from '@ladle/react';

import Icon from './Icon';

export const iconFont: Story = () => (
  <div style={{ fontFamily: 'Icomoon' }}>
    <Icon icon="at" color="active" size="large" />
  </div>
);
