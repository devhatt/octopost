import { ReactNode, useRef, useState } from 'react';

import AccordionTab from '~components/AccordionTab/AccordionTab';
import Button from '~components/Button/Button';
import InputSearch from '~components/InputSearch/InputSearch';
import { TInputComponent } from '~components/InputSearch/InputSearch.types';
import Modal from '~components/Modal/Modal';
import SearchClue from '~components/SearchClue/SearchClue';

import scss from './Sidebar.module.scss';

function Sidebar(): ReactNode {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputSearchRef = useRef<TInputComponent | null>(null);

  const handleToggleModal = (): void => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const renderSearchClue = (): ReactNode => (
    <SearchClue
      clearInput={inputSearchRef.current?.clearInput}
      label="Searching for"
      value={value}
    />
  );

  return (
    <AccordionTab hideCloseButton title="Select Social Media">
      <div className={scss.content}>
        <InputSearch
          className={scss.searchBar}
          error={false}
          onChange={(newValue) => setValue(newValue as string)}
          placeholder="Search for social media"
          ref={inputSearchRef}
        />

        {value ? null : renderSearchClue()}

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

        <Modal
          footer={undefined}
          isOpen={isOpen}
          onClickOutside={() => setIsOpen(false)}
          title={''}
        >
          Octopost
        </Modal>
      </div>
    </AccordionTab>
  );
}

export default Sidebar;
