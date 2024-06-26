import React, { useMemo, useState } from 'react';

import classNames from 'classnames';
import debounce from 'lodash.debounce';
import groupBy from 'lodash.groupby';

import useKeyPress from '~hooks/useKeyPress/useKeyPress';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';
import { StoreAccount } from '~stores/useSocialMediaStore/useSocialMediaStore.types';

import AccordionTab from '~components/AccordionTab/AccordionTab';
import Button from '~components/Button/Button';
import Icon from '~components/Icon/Icon';
import InputSearch from '~components/InputSearch/InputSearch';
import Modal from '~components/Modal/Modal';

import AddAccount from './components/AddAccount/AddAccount';
import SocialAccordion from './components/SocialAccordion/SocialAccordion';

import scss from './Sidebar.module.scss';

const HALF_SECOND = 500;

const format = (userName: string): string => userName.toLowerCase().trim();

function Sidebar(): React.ReactNode {
  const { accounts } = useSocialMediaStore();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const filteredAccounts = useMemo(() => {
    if (accounts.data.length === 0) return [];
    let data: StoreAccount[] = [];

    data = accounts.data.filter((account) =>
      format(account.userName).includes(format(inputValue))
    );
    return Object.entries(groupBy(data, 'socialMediaId')).map(
      ([socialMediaId, socialMediaAccounts]) => ({
        socialMediaAccounts,
        socialMediaId,
      })
    );
  }, [accounts, inputValue]);

  const handleToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectSocialMedia = (): void => {
    setIsOpen(false);
  };

  const debouncedSearch = debounce((value: string): void => {
    setInputValue(value);
  }, HALF_SECOND);

  useKeyPress('Escape', (e: KeyboardEvent) => {
    e.preventDefault();
    setIsOpen(false);
  });

  return (
    <div className={scss.container}>
      <AccordionTab
        className={classNames(scss.mobile, [scss.openMobile])}
        hideCloseButton
        isOpen
        title="Select Social Media"
      >
        <div className={scss.content}>
          <InputSearch
            error={false}
            onChange={debouncedSearch}
            placeholder="Search for social media"
          />

          {filteredAccounts.length > 0 ? (
            <div className={scss.accordionContainer}>
              {filteredAccounts.map(
                ({ socialMediaAccounts, socialMediaId }) => (
                  <SocialAccordion
                    accounts={socialMediaAccounts}
                    error={false}
                    key={socialMediaId}
                    socialMediaId={socialMediaId}
                  />
                )
              )}
            </div>
          ) : (
            <p> Não há resultados para essa busca</p>
          )}

          <div className={scss.newAccountButtonMobileContainer}>
            <Button
              className={scss.newAccountButton}
              onClick={handleToggleModal}
              variant="container"
            >
              + New Account
            </Button>
            <div className={scss.newAccountButtonMobileContainer}>
              <Button
                circle
                className={scss.newAccountButtonMobile}
                icon={<Icon icon="plus" size={16} />}
                onClick={handleToggleModal}
                variant="container"
              />
            </div>
            <Modal
              footer={<div>footer</div>}
              isOpen={isOpen}
              onClickOutside={() => setIsOpen(false)}
              title="Adicionar Social"
            >
              <AddAccount onChange={handleSelectSocialMedia} />
            </Modal>
          </div>
        </div>
      </AccordionTab>
    </div>
  );
}

export default Sidebar;
