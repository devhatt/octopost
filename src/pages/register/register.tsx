import { ReactNode } from 'react';

import AlreadyHaveAnAccount from './components/AlreadyHaveAnAccount/AlreadyHaveAnAccount';
import DesktopHeader from './components/DesktopHeader/DesktopHeader';
import DesktopHero from './components/DesktopHero/Hero';
import Form from './components/Form/Form';
import MobileHero from './components/MobileHero/Hero';
import SignUpPromotion from './components/SignUpPromotion/SignUpPromotion';
import SocialLogin from './components/SocialLogin/SocialLogin';

import scss from './register.module.scss';

function Home(): ReactNode {
  return (
    <div className={scss.wrapper}>
      <DesktopHero />
      <MobileHero />
      <section className={scss.formSection}>
        <DesktopHeader />
        <main className={scss.main}>
          <SignUpPromotion />
          <Form />
          <SocialLogin />
        </main>
        <AlreadyHaveAnAccount />
      </section>
    </div>
  );
}

export default Home;
