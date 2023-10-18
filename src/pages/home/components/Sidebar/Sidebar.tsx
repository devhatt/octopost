import { useState } from 'react';

import InputSearch from '~components/InputSearch/InputSearch';
import SearchClue from '~components/SearchClue/SearchClue';

import scss from './Sidebar.module.scss';

function Sidebar() {
  const [value, setValue] = useState('');

  const handleClear = () => {};
  return (
    <aside className={scss.sidebar}>
      <div className={scss.titleContainer}>
        <span>Select Social Media</span>
      </div>
      <div className={scss.sidebarMain}>
        <InputSearch
          handleClear={handleClear}
          value={value}
          setValue={setValue}
          placeholder="Search for social media"
          error={false}
        />

        {value.length !== 0 ? (
          <SearchClue setValue={setValue} value={value} label="Searching for" />
        ) : null}

        <div className={scss.itemsContainer}>
          Item 1 <br /> Item2 <br /> Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br /> Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br /> Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br /> Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br /> Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br /> Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br /> Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br /> Item 1 <br /> Item2 <br />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
