import { ReactNode, useRef, useState } from 'react';

import useKeyPress from '~hooks/useKeyPress/useKeyPress';

import AccordionTab from '~components/AccordionTab/AccordionTab';
import Button from '~components/Button/Button';
import InputSearch from '~components/InputSearch/InputSearch';
import { TInputComponent } from '~components/InputSearch/InputSearch.types';
import Modal from '~components/Modal/Modal';
import SearchClue from '~components/SearchClue/SearchClue';

import scss from './Sidebar.module.scss';

function Sidebar(): ReactNode {
  const [value, setValue] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const inputSearchRef = useRef<TInputComponent | null>(null);

  const handleToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const renderSearchClue = (): ReactNode => (
    <SearchClue
      clearInput={inputSearchRef.current?.clearInput}
      label="Searching for"
      value={value}
    />
  );

  useKeyPress('Escape', (e: KeyboardEvent) => {
    e.preventDefault();
    setIsOpen(false);
  });

  return (
    <AccordionTab hideCloseButton title="Select Social Media">
      <div className={scss.content}>
        <InputSearch
          error={false}
          onChange={(currentValue) => setValue(currentValue as string)}
          placeholder="Search for social media"
          ref={inputSearchRef}
        />

        {value ? renderSearchClue() : null}

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

        <Modal isOpen={isOpen} onClickOutside={() => setIsOpen(false)}>
          Octopost
        </Modal>
      </div>
    </AccordionTab>
  );
}

export default Sidebar;
