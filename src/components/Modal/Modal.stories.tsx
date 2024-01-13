import { useState } from 'react';

import { Story } from '@ladle/react';

import Portal from './Modal';

export const ModalStories: Story = () => {
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
