import { useState } from 'react';

import { Story } from '@ladle/react';

import Button from '~components/Button/Button';

import Portal from './Modal';

export const ModalStories: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} type='button'>open portal</button>
      <Portal
        footer={
          <>
            <div>Footer example</div>
            <Button type="button" variant="container">
              Clica aqui
            </Button>
          </>
        }
        isOpen={isOpen}
        onClickOutside={() => setIsOpen(false)}
        title="Modal Title"
      >
        CONTENT
      </Portal>
    </div>
  );
};
