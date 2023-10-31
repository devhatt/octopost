import { useRef, useState } from 'react';

import InputSearch from '~components/InputSearch/InputSearch';
import { TInputComponent } from '~components/InputSearch/InputSearch.types';
import SearchClue from '~components/SearchClue/SearchClue';

import scss from './Sidebar.module.scss';

function Sidebar() {
  const [value, setValue] = useState('');
  const inputSearchRef = useRef<TInputComponent | null>(null);

  return (
    <aside className={scss.sidebar}>
      <div className={scss.titleContainer}>
        <span>Select Social Media</span>
      </div>
      <div className={scss.sidebarMain}>
        <InputSearch
          onChange={(value) => setValue(value as string)}
          placeholder="Search for social media"
          ref={inputSearchRef}
          error={false}
        />

        {value && (
          <SearchClue
            clearInput={inputSearchRef.current?.clearInput}
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
