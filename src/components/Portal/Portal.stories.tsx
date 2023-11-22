import { useState } from 'react';

import { Story } from '@ladle/react';

import Portal from './Portal';

export const PortalStories: Story = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>open portal</button>
      <Portal isOpen={isOpen} onClickOutside={() => setOpen(false)}>
        octopost
      </Portal>
    </div>
  );
};
