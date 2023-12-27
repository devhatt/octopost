import { useState } from 'react';

import { Story } from '@ladle/react';

import Button from '~components/Button/Button';
import FirstComment from '~components/FirstComment/FirstComment';

import Portal from './Modal';

export const ModalStories: Story = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>open portal</button>
      <Portal
        isOpen={isOpen}
        header={<FirstComment />}
        onClickOutside={() => setOpen(false)}
      >
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        <Button type="button" variant="outlined">
          Clica
        </Button>
      </Portal>
    </div>
  );
};
