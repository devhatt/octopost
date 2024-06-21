import { ReactNode } from 'react';

import Button from '~components/Button/Button';

// import FacebookIcon from './images/facebook.svg?react'
import scss from './SocialMediaList.module.scss';

import FacebookIcon from './images/facebook.svg?react';
import InstagramIcon from './images/instagram.svg?react';
import TiktokIcon from './images/tiktok.svg?react';
import TwitterIcon from './images/twitter.svg?react';
import { SocialMediaFormProps } from './SocialMediaForm.types';

function SocialMediaForm({
  onHandleToggleModal,
}: SocialMediaFormProps): ReactNode {
  return (
    <ul className={scss.selection}>
      <li className={scss.socialItem}>
        <button type="button">
          <FacebookIcon className={scss.socialImage} fill="#000" width={50} />
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
          <TiktokIcon className={scss.socialImage} fill="#000" width={50} />
          <span className={scss.socialTitle}>TikTok</span>
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
          <TwitterIcon className={scss.socialImage} fill="#000" width={50} />
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
          <InstagramIcon className={scss.socialImage} fill="#000" width={50} />
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
