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
        <button onClick={onHandleToggleModal} type="button">
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
        <button onClick={onHandleToggleModal} type="button">
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
        <button onClick={onHandleToggleModal} type="button">
          <img alt="" src="./social-github.svg" />
          <p>twitter</p>
          <Button className={scss.button} variant="container">
            Connect Account
          </Button>
        </button>
      </li>
      <li className={scss.socialItem}>
        <button onClick={onHandleToggleModal} type="button">
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
  );
}

export default SocialMediaForm;
