import scss from './Header.module.scss';

function Header() {
  return (
    <header className={scss.header}>
      <nav className={scss.nav}>Header</nav>
    </header>
  );
}

export default Header;
