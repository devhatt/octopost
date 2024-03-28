import { useState } from 'react';

import { Story } from '@ladle/react';

import Button from '~components/Button/Button';

import Portal from './Modal';

export const ModalStories: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} type={'button'}>
        open portal
      </button>
      <Portal
        footer={
          <div
            style={{
              display: 'flex',
              gap: '8px',
              placeContent: 'flex-end',
              width: '100%',
            }}
          >
            <Button type="button" variant="outlined">
              Button 1
            </Button>
            <Button type="button" variant="container">
              Button 2
            </Button>
          </div>
        }
        isOpen={isOpen}
        onClickOutside={() => setIsOpen(false)}
        title="Modal Title"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in r
      </Portal>
    </div>
  );
};
