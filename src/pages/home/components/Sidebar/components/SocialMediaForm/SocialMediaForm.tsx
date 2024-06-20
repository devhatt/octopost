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
          <img
            alt="facebook"
            className={scss.socialImage}
            src="./social-github.svg"
          />
          <span className={scss.socialTitle}>Facebook</span>
          <Button
            className={scss.socialButton}
            onClick={onHandleToggleModal}
            variant="outlined"
          >
            Connect Account
          </Button>
          <Button
            className={scss.socialButton}
            onClick={onHandleToggleModal}
            variant="container"
          >
            Connect Group
          </Button>
        </button>
      </li>
      <li className={scss.socialItem}>
        <button type="button">
          <img
            alt="linkedin"
            className={scss.socialImage}
            src="./social-github.svg"
          />
          <span className={scss.socialTitle}>Linkedin</span>
          <Button
            className={scss.socialButton}
            onClick={onHandleToggleModal}
            variant="outlined"
          >
            Connect Account
          </Button>
          <Button
            className={scss.socialButton}
            onClick={onHandleToggleModal}
            variant="container"
          >
            Connect Group
          </Button>
        </button>
      </li>
      <li className={scss.socialItem}>
        <button type="button">
          <img
            alt="twitter"
            className={scss.socialImage}
            src="./social-github.svg"
          />
          <span className={scss.socialTitle}>Twitter</span>
          <Button
            className={scss.socialButton}
            onClick={onHandleToggleModal}
            variant="container"
          >
            Connect Account
          </Button>
        </button>
      </li>
      <li className={scss.socialItem}>
        <button type="button">
          <img
            alt="instagram"
            className={scss.socialImage}
            src="./social-github.svg"
          />
          <span className={scss.socialTitle}>Instagram</span>
          <Button
            className={scss.socialButton}
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
