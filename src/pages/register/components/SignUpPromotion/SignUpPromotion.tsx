import { ReactNode } from 'react';

import scss from './SignUpPromotion.module.scss';

function DesktopCall(): ReactNode {
  return (
    <section className={scss.signUpPromotion}>
      <h2>Join us right now!</h2>
      <h3>Register your account now!</h3>
    </section>
  );
}

export default DesktopCall;
