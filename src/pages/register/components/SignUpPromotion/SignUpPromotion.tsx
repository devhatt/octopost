import { ReactNode } from 'react';

import scss from './SignUpPromotion.module.scss';

function DesktopCall(): ReactNode {
  return (
    <section className={scss.signUpPromotion}>
      <h2 className={scss.title}>Join us right now!</h2>
      <h3 className={scss.description}>Register your account now!</h3>
    </section>
  );
}

export default DesktopCall;
