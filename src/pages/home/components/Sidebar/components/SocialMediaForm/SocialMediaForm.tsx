import { ReactNode } from 'react';

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
            <p>instagram</p>
          </button>
        </li>
        <li className={scss.socialItem}>
          <button onClick={handleModal} type="button">
            <img alt="" src="./social-github.svg" />
            <p>linkedin</p>
          </button>
        </li>
        <li className={scss.socialItem}>
          <button onClick={handleModal} type="button">
            <img alt="" src="./social-github.svg" />
            <p>twitter</p>
          </button>
        </li>
        <li className={scss.socialItem}>
          <button onClick={handleModal} type="button">
            <img alt="" src="./social-github.svg" />
            <p>facebook</p>
          </button>
        </li>
      </ul>
    </Modal>
  );
}

export default SocialMediaForm;
