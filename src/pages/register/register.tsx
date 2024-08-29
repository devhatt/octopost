import { ReactNode } from 'react';

import Hero from './components/Hero/Hero';

import scss from './home.module.scss';

function Home(): ReactNode {
  return (
    <>
      <div className={scss.header}>
        <Hero />
      </div>
      <main className={scss.content} />
    </>
  );
}

export default Home;
