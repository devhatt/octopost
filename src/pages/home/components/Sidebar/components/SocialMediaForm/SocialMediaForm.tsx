import { ReactNode } from 'react';

import Button from '~components/Button/Button';

import scss from './SocialMediaList.module.scss';

import { socialMedias } from './data.ts';
import FacebookIcon from './images/facebook.svg?react';
// import InstagramIcon from './images/instagram.svg?react';
// import TiktokIcon from './images/tiktok.svg?react';
// import TwitterIcon from './images/twitter.svg?react';
import { SocialMediaFormProps } from './SocialMediaForm.types';

function SocialMediaForm({
  onHandleToggleModal,
}: SocialMediaFormProps): ReactNode {
  return (
    <ul className={scss.selection}>
      {socialMedias.map((socialMedia) => (
        <li className={scss.socialItem} key={socialMedia.id}>
          <button type="button">
            <FacebookIcon className={scss.socialImage} fill="#000" width={50} />
            <span className={scss.socialTitle}>{socialMedia.name}</span>
            <Button
              className={scss.socialButton}
              onClick={onHandleToggleModal}
              variant="outlined"
            >
              Connect Account
            </Button>
            {socialMedia.hasGroup && (
              <Button
                className={scss.socialButton}
                onClick={onHandleToggleModal}
                variant="container"
              >
                Connect Group
              </Button>
            )}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default SocialMediaForm;
