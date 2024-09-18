import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import scss from './AlreadyHaveAnAccount.module.scss';

function AlreadyHaveAnAccount(): ReactNode {
  return (
    <section className={scss.alreadyHaveAnAccount}>
      <p className={scss.text}>
        Already have an account{' '}
        <NavLink className={scss.link} to="login">
          Sign In
        </NavLink>
      </p>
    </section>
  );
}

export default AlreadyHaveAnAccount;
