import { useState } from 'react';

import { Story } from '@ladle/react';

import Portal from './Modal';

export const ModalStories: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => { setIsOpen(true); }} type="button">
        open portal
      </button>
      <Portal isOpen={isOpen} onClickOutside={() => { setIsOpen(false); }}>
        octopost
      </Portal>
    </div>
  );
};
