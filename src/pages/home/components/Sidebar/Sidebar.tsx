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
  const [isOpen, setOpen] = useState(false);
  const inputSearchRef = useRef<TInputComponent | null>(null);

  const handleToggleModal = () => {
    setOpen((isOpen) => !isOpen);
  };

  const renderSearchClue = () => {
    if (!value) return null;

    return (
      <SearchClue
        clearInput={inputSearchRef.current?.clearInput}
        value={value}
        label="Searching for"
      />
    );
  };

  return (
    <AccordionTab title="Select Social Media" hideCloseButton>
      <div className={scss.content}>
        <InputSearch
          className={scss.searchBar}
          onChange={(value) => setValue(value as string)}
          placeholder="Search for social media"
          ref={inputSearchRef}
          error={false}
        />

        {renderSearchClue()}

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
          onClick={handleToggleModal}
          className={scss.newAccountButton}
          variant="container"
        >
          + &ensp; New Account
        </Button>

        <Modal isOpen={isOpen} onClickOutside={() => setOpen(false)}>
          Octopost
        </Modal>
      </div>
    </AccordionTab>
  );
}

export default Sidebar;
