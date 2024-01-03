import { useState } from 'react';

import { Story } from '@ladle/react';

import Button from '~components/Button/Button';
import Icon from '~components/Icon/Icon';
import { networkListMock } from '~components/Tabber/networkListMock';
import Tabber from '~components/Tabber/Tabber';

import Portal from './Modal';

export const ModalStories: Story = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>open portal</button>
      <Portal
        isOpen={isOpen}
        title="Modal Title"
        onClickOutside={() => setOpen(false)}
        footer={
          <Button type="button" variant="outlined">
            Clica
          </Button>
        }
        headerButtons={[<Icon icon="gpt" />, <Icon icon="pin" />]}
      >
        <Tabber socialList={networkListMock} />
      </Portal>
    </div>
  );
};
