import { useRef, useState } from 'react';

import InputSearch, { TQuadrado } from '~components/InputSearch/InputSearch';
import SearchClue from '~components/SearchClue/SearchClue';

import scss from './Sidebar.module.scss';

function Sidebar() {
  const [value, setValue] = useState('');

  const inputSearchRef = useRef<TQuadrado | null>(null);

  return (
    <aside className={scss.sidebar}>
      <div className={scss.titleContainer}>
        <span>Select Social Media</span>
      </div>
      <div className={scss.sidebarMain}>
        <InputSearch
          value={value}
          setValue={setValue}
          placeholder="Search for social media"
          ref={inputSearchRef}
          error={false}
        />

        {value && (
          <SearchClue
            clearInput={inputSearchRef.current?.clearInput}
            setValue={setValue}
            value={value}
            label="Searching for"
          />
        )}

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
