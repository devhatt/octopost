import { ReactElement, useRef, useState } from 'react';

import AccordionTab from '~components/AccordionTab/AccordionTab';
import Button from '~components/Button/Button';
import InputSearch from '~components/InputSearch/InputSearch';
import { TInputComponent } from '~components/InputSearch/InputSearch.types';
import Modal from '~components/Modal/Modal';
import SearchClue from '~components/SearchClue/SearchClue';

import scss from './Sidebar.module.scss';

function Sidebar(): ReactElement {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputSearchRef = useRef<null | TInputComponent>(null);

  const handleToggleModal = (): void => {
    setIsOpen((isOpen) => !isOpen);
  };

  const renderSearchClue = (): ReactElement => ( // Tipo de retorno ReactElement adicionado
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
          onChange={() => setValue(value)}
          placeholder="Search for social media"
          ref={inputSearchRef}
        />

        {value ? null : renderSearchClue()}

        <div className={scss.items}>{/* Itens listados aqui */}</div>

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
