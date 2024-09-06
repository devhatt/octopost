import { ReactNode } from 'react';

import Button from '~components/Button/Button';
import Icon from '~components/Icon/Icon';

import scss from './SocialLogin.module.scss';

function SocialLogin(): ReactNode {
  return (
    <aside className={scss.socialLogin}>
      <section className={scss.desktopTitleWrapper}>
        <div className={scss.divider} />
        <span className={scss.title}>or sign up with</span>
        <div className={scss.divider} />
      </section>
      <section className={scss.mobileTitleWrapper}>
        <span className={scss.title}>or continue with</span>
      </section>
      <div className={scss.iconsContainer}>
        <Button
          circle
          className={scss.button}
          color="gray"
          icon={<Icon aria-label="twitter logo" icon="twitter" size={24} />}
        />

        <Button
          circle
          className={scss.button}
          color="gray"
          icon={<Icon aria-label="tiktok logo" icon="tiktok" size={24} />}
        />

        <Button
          circle
          className={scss.button}
          color="gray"
          icon={<Icon aria-label="instagram logo" icon="instagram" size={24} />}
        />
      </div>
    </aside>
  );
}

export default SocialLogin;
