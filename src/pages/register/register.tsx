import { ReactNode } from 'react';

import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Hero from './components/Hero/Hero';
import SocialLogin from './components/SocialLogin/SocialLogin';

import scss from './register.module.scss';

function Home(): ReactNode {
  return (
    <>
      <Hero />
      <main className={scss.main}>
        <Form />
        <SocialLogin />
      </main>
      <Footer />
    </>
  );
}

export default Home;
