import { ReactNode } from 'react';

import Modal from '~components/Modal/Modal';

import scss from './SocialMediaList.module.scss';

import { SocialMediaFormProps } from './SocialMediaForm.types';

function SocialMediaForm({
  isOpen,
  setIsOpen,
}: SocialMediaFormProps): ReactNode {
  return (
    <Modal
      isOpen={isOpen}
      onClickOutside={() => setIsOpen(false)}
      title="selecione sua rede social"
    >
      <ul className={scss.selection}>
        <li className={scss.socialItem}>
          <img alt="instagram" src="./social-github.svg" />
          <p>instagram</p>
        </li>
        <li className={scss.socialItem}>
          <img alt="" src="./social-github.svg" />
          <p>linkedin</p>
        </li>
        <li className={scss.socialItem}>
          <img alt="" src="./social-github.svg" />
          <p>twitter</p>
        </li>
        <li className={scss.socialItem}>
          <img alt="" src="./social-github.svg" />
          <p>facebook</p>
        </li>
      </ul>
    </Modal>
  );
}

export default SocialMediaForm;
