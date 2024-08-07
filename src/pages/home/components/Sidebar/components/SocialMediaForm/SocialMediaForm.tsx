import { ReactNode } from 'react';

import scss from './SocialMediaList.module.scss';

import ConnectAccountButton from './components/ConnectAccountButton.tsx';
import ConnectAccountButtonDisabled from './components/ConnectAccountButtonDisabled.tsx';
import ConnectGroupButton from './components/ConnectGroupButton.tsx';
import { socialMedias } from './data.ts';
import { SocialMediaFormProps } from './SocialMediaForm.types';

function SocialMediaForm({
  onHandleToggleModal,
}: SocialMediaFormProps): ReactNode {
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
                <ConnectAccountButton
                  onHandleToggleModal={onHandleToggleModal}
                />
              ) : (
                <ConnectAccountButtonDisabled />
              )}

              {socialMedia.hasGroup && (
                <ConnectGroupButton onHandleToggleModal={onHandleToggleModal} />
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SocialMediaForm;
