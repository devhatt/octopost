import SearchClue from '~components/SearchClue/SearchClue';

import scss from './Sidebar.module.scss';

function Sidebar() {
  return (
    <aside className={scss.sidebar}>
      <div className={scss.titleContainer}>
        <span>Select Social Media</span>
      </div>
      <div className={scss.sidebarMain}>
        <SearchClue value="Facebook" label="Searching for" />
        <div className={scss.itemsContainer}>
          Item 1 <br /> Item2 <br /> Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br /> Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
