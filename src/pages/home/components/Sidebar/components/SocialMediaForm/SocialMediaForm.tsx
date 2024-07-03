import { ReactNode } from 'react';

import Button from '~components/Button/Button';

import scss from './SocialMediaList.module.scss';

import { socialMedias } from './data.ts';
import { SocialMediaFormProps } from './SocialMediaForm.types';

function SocialMediaForm({
  onHandleToggleModal,
}: SocialMediaFormProps): ReactNode {
  return (
    <ul className={scss.selectionGrid}>
      {socialMedias.map((socialMedia) => (
        <li className={scss.socialItem} key={socialMedia.name}>
          <button className={scss.socialCard} type="button">
            <div>
              <socialMedia.icon className={scss.socialIcon} />
              <span className={scss.socialTitle}>{socialMedia.name}</span>
            </div>

            <div className={scss.buttonContainer}>
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
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default SocialMediaForm;
