import { ReactNode, useRef, useState } from 'react';

import classNames from 'classnames';

import useKeyPress from '~hooks/useKeyPress/useKeyPress';

import AccordionTab from '~components/AccordionTab/AccordionTab';
import Button from '~components/Button/Button';
import InputSearch from '~components/InputSearch/InputSearch';
import { TInputComponent } from '~components/InputSearch/InputSearch.types';
import Modal from '~components/Modal/Modal';
import SearchClue from '~components/SearchClue/SearchClue';

import { PlusIcon } from './components/PlusIcon';

import scss from './Sidebar.module.scss';

function Sidebar(): ReactNode {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
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
    <>
      <Button onClick={() => setMobileIsOpen(!mobileIsOpen)} variant="outlined">
        Abre
      </Button>
      <AccordionTab
        className={classNames(scss.mobile, { [scss.openMobile]: mobileIsOpen })}
        hideCloseButton
        title="Select Social Media"
      >
        <div className={scss.content}>
          <InputSearch
            error={false}
            onChange={(data) => setValue(data as string)}
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
            {' '}
            + &ensp; New Account
          </Button>

          <div className={scss.newAccountButtonMobileContainer}>
            <Button
              circle
              className={scss.newAccountButtonMobile}
              icon={<PlusIcon />}
              onClick={handleToggleModal}
              variant="container"
            />
          </div>

          <Modal
            footer={<div>footer</div>}
            isOpen={isOpen}
            onClickOutside={() => setIsOpen(false)}
            title="Adcionar Social"
          >
            Octopost
          </Modal>
        </div>

        <Button
          className={scss.newAccountButton}
          onClick={handleToggleModal}
          variant="container"
        >
          {' '}
          + &ensp; New Account
        </Button>

        <div className={scss.newAccountButtonMobileContainer}>
          <Button
            className={scss.newAccountButton}
            onClick={handleToggleModal}
            variant="container"
          >
            + &ensp; New Account
          </Button>
          <div className={scss.newAccountButtonMobileContainer}>
            <Button
              circle
              className={scss.newAccountButtonMobile}
              icon={<PlusIcon />}
              onClick={handleToggleModal}
              variant="container"
            />
          </div>
          <Modal
            footer={<div>footer</div>}
            isOpen={isOpen}
            onClickOutside={() => setIsOpen(false)}
            title="Adcionar Social"
          >
            Octopost
          </Modal>
        </div>

        <Modal
          footer={<div>footer</div>}
          isOpen={isOpen}
          onClickOutside={() => setIsOpen(false)}
          title="Adcionar Social"
        >
          Octopost
        </Modal>
      </AccordionTab>
    </>
  );
}

export default Sidebar;
