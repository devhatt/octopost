import { ReactNode } from 'react';

import Icon from '~components/Icon/Icon';

import scss from './SocialLogin.module.scss';

function SocialLogin(): ReactNode {
  return (
    <aside className={scss.socialLogin}>
      <span className={scss.title}>or continue with</span>
      <div className={scss.iconsContainer}>
        <button className={scss.button}>
          <Icon aria-label="twitter logo" icon="twitter" size={20} />
        </button>

        <button className={scss.button}>
          <Icon aria-label="tiktok logo" icon="tiktok" size={20} />
        </button>

        <button className={scss.button}>
          <Icon aria-label="instagram logo" icon="instagram" size={20} />
        </button>
      </div>
    </aside>
  );
}

export default SocialLogin;
