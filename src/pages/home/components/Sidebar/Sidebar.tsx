import scss from './Sidebar.module.scss';

import dotSvg from './images/dot.svg';

function Sidebar() {
  return (
    <aside className={scss.sidebar}>
      <div className={scss.titleContainer}>
        <img src={dotSvg} className={scss.dotSvg} />
        <p>Select Social Media</p>
      </div>
      Item 1
    </aside>
  );
}

export default Sidebar;
