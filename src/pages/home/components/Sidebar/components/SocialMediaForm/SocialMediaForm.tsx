import { ReactNode } from 'react';

import scss from './SocialMediaForm.module.scss';

import { socialMedias } from './data.ts';
import {
  ConnectAccountButton,
  ConnectAccountButtonDisabled,
  ConnectGroupButton,
} from './SocialMediaForm.components.tsx';
import { SocialMediaFormProps } from './SocialMediaForm.types';

function SocialMediaForm({ onOpenModal }: SocialMediaFormProps): ReactNode {
  return (
    <ul className={scss.selectionGrid}>
      {socialMedias.map((socialMedia) => (
        <li className={scss.socialItem} key={socialMedia.name}>
          <div className={scss.socialCard}>
            <div className={scss.socialIconGroup}>
              <socialMedia.icon className={scss.socialIcon} />
              <span className={scss.socialTitle}>{socialMedia.name}</span>
            </div>

            <div className={scss.buttonContainer}>
              {socialMedia.hasAccount ? (
                <ConnectAccountButton onOpenModal={onOpenModal} />
              ) : (
                <ConnectAccountButtonDisabled />
              )}

              {socialMedia.hasGroup && (
                <ConnectGroupButton onOpenModal={onOpenModal} />
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SocialMediaForm;
