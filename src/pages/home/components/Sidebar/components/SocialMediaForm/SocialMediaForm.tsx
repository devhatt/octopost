import { ReactNode } from 'react';

import Button from '~components/Button/Button';
import Modal from '~components/Modal/Modal';

import scss from './SocialMediaList.module.scss';

import { SocialMediaFormProps } from './SocialMediaForm.types';

function SocialMediaForm({
  isOpen,
  setIsOpen,
}: SocialMediaFormProps): ReactNode {
  function handleModal(): void {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onClickOutside={() => setIsOpen(false)}
      title="selecione sua rede social"
    >
      <ul className={scss.selection}>
        <li className={scss.socialItem}>
          <button onClick={handleModal} type="button">
            <img alt="instagram" src="./social-github.svg" />
            <p>Facebook</p>
            <Button className={scss.button} variant="outlined">
              Connect Account
            </Button>
            <Button className={scss.button} variant="container">
              Connect Group
            </Button>
          </button>
        </li>
        <li className={scss.socialItem}>
          <button onClick={handleModal} type="button">
            <img alt="" src="./social-github.svg" />
            <p>linkedin</p>
            <Button className={scss.button} variant="outlined">
              Connect Account
            </Button>
            <Button className={scss.button} variant="container">
              Connect Group
            </Button>
          </button>
        </li>
        <li className={scss.socialItem}>
          <button onClick={handleModal} type="button">
            <img alt="" src="./social-github.svg" />
            <p>twitter</p>
            <Button className={scss.button} variant="container">
              Connect Account
            </Button>
          </button>
        </li>
        <li className={scss.socialItem}>
          <button onClick={handleModal} type="button">
            <img alt="" src="./social-github.svg" />
            <p>facebook</p>
            <Button className={scss.button} variant="outlined">
              Connect Account
            </Button>
            <Button className={scss.button} variant="container">
              Connect Group
            </Button>
          </button>
        </li>
      </ul>
    </Modal>
  );
}

export default SocialMediaForm;
