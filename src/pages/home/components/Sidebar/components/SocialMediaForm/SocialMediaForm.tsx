import { ReactNode } from 'react';

import Button from '~components/Button/Button';

import scss from './SocialMediaList.module.scss';

import { SocialMediaFormProps } from './SocialMediaForm.types';

function SocialMediaForm({
  onHandleToggleModal,
}: SocialMediaFormProps): ReactNode {
  return (
    <ul className={scss.selection}>
      <li className={scss.socialItem}>
        <button type="button">
          <img alt="facebook" src="./social-github.svg" />
          <p>Facebook</p>
          <Button
            className={scss.button}
            onClick={onHandleToggleModal}
            variant="outlined"
          >
            Connect Account
          </Button>
          <Button
            className={scss.button}
            onClick={onHandleToggleModal}
            variant="container"
          >
            Connect Group
          </Button>
        </button>
      </li>
      <li className={scss.socialItem}>
        <button type="button">
          <img alt="linkedin" src="./social-github.svg" />
          <p>linkedin</p>
          <Button
            className={scss.button}
            onClick={onHandleToggleModal}
            variant="outlined"
          >
            Connect Account
          </Button>
          <Button
            className={scss.button}
            onClick={onHandleToggleModal}
            variant="container"
          >
            Connect Group
          </Button>
        </button>
      </li>
      <li className={scss.socialItem}>
        <button type="button">
          <img alt="twitter" src="./social-github.svg" />
          <p>twitter</p>
          <Button
            className={scss.button}
            onClick={onHandleToggleModal}
            variant="container"
          >
            Connect Account
          </Button>
        </button>
      </li>
      <li className={scss.socialItem}>
        <button type="button">
          <img alt="instagram" src="./social-github.svg" />
          <p>Instagram</p>
          <Button
            className={scss.button}
            onClick={onHandleToggleModal}
            variant="outlined"
          >
            Connect Account
          </Button>
        </button>
      </li>
    </ul>
  );
}

export default SocialMediaForm;
