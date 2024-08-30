import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import scss from './Footer.module.scss';

function Footer(): ReactNode {
  return (
    <footer className={scss.footer}>
      <p>
        Already have an account <NavLink to="login">Sign In</NavLink>
      </p>
    </footer>
  );
}

export default Footer;
