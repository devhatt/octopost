import { useRef, useState } from 'react';

import AccordionTab from '~components/AccordionTab/AccordionTab';
import Button from '~components/Button/Button';
import InputSearch from '~components/InputSearch/InputSearch';
import { TInputComponent } from '~components/InputSearch/InputSearch.types';
import Modal from '~components/Modal/Modal';
import SearchClue from '~components/SearchClue/SearchClue';

import scss from './Sidebar.module.scss';

function Sidebar() {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputSearchRef = useRef<null | TInputComponent>(null);

  const handleToggleModal = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const renderSearchClue = () => {
    return (
      <SearchClue
        clearInput={inputSearchRef.current?.clearInput}
        label="Searching for"
        value={value}
      />
    );
  };

  return (
    <AccordionTab hideCloseButton title="Select Social Media">
      <div className={scss.content}>
        <InputSearch
          className={scss.searchBar}
          error={false}
          onChange={(value) => { setValue(value as string); }}
          placeholder="Search for social media"
          ref={inputSearchRef}
        />

        {!value && renderSearchClue()}

        <div className={scss.items}>
          Item 1 <br /> Item2 <br /> Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br /> Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br /> Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br /> Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br /> Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br /> Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br /> Item 1 <br /> Item2 <br />
          Item 1 <br /> Item2 <br /> Item 1 <br /> Item2 <br />
        </div>

        <Button
          className={scss.newAccountButton}
          onClick={handleToggleModal}
          variant="container"
        >
          + &ensp; New Account
        </Button>

        <Modal isOpen={isOpen} onClickOutside={() => { setIsOpen(false); }}>
          Octopost
        </Modal>
      </div>
    </AccordionTab>
  );
}

export default Sidebar;
