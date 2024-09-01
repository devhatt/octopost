import { ReactNode } from 'react';

import DesktopHero from './components/DesktopHero/Hero';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import MobileHero from './components/MobileHero/Hero';
import SocialLogin from './components/SocialLogin/SocialLogin';

import scss from './register.module.scss';

function Home(): ReactNode {
  return (
    <div className={scss.wrapper}>
      <DesktopHero /> {/* only on desktops */}
      <MobileHero /> {/* only on mobiles */}
      <main className={scss.main}>
        <Form />
        <SocialLogin />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
