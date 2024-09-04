import React, { useMemo, useState } from 'react';

import classNames from 'classnames';
import debounce from 'lodash.debounce';

import useKeyPress from '~hooks/useKeyPress/useKeyPress';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';

import AccordionTab from '~components/AccordionTab/AccordionTab';
import Button from '~components/Button/Button';
import Icon from '~components/Icon/Icon';
import InputSearch from '~components/InputSearch/InputSearch';
import Modal from '~components/Modal/Modal';

import SocialMediaForm from './components/SocialMediaForm/SocialMediaForm';

import scss from './Sidebar.module.scss';

import { EmptyResult, FilteredAccounts } from './Sidebar.components';
import { FilteredSocialMedia } from './Sidebar.types';

const HALF_SECOND = 500;

const format = (userName: string): string => userName.toLowerCase().trim();

function Sidebar(): React.ReactNode {
  const { accounts } = useSocialMediaStore();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const filteredAccountsResult = useMemo(() => {
    const filtered: FilteredSocialMedia[] = [];

    Object.entries(accounts.data).forEach(
      ([socialMediaId, socialMediaAccounts]) => {
        if (!socialMediaAccounts) return;
        const filteredAccounts = socialMediaAccounts.filter((account) =>
          format(account.userName).includes(format(inputValue))
        );

        if (filteredAccounts.length > 0) {
          filtered.push({
            socialMediaAccounts: filteredAccounts,
            socialMediaId,
          });
        }
      }
    );

    return filtered;
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

          {filteredAccountsResult.length > 0 ? (
            <div className={scss.accountWrapper}>
              <FilteredAccounts socialMedia={filteredAccountsResult} />
            </div>
          ) : (
            <EmptyResult />
          )}

          <div className={scss.newAccountButtonMobileContainer}>
            <div className={scss.mobileContainer}>
              <p className={scss.selectSocialAccountText}>
                Select social account
              </p>
              <Button
                className={scss.newAccountButton}
                onClick={handleToggleModal}
                variant="container"
              >
                <Icon icon="plus" size={12} />
                New Account
              </Button>
            </div>

            <div className={scss.newAccountButtonMobileContainer}>
              <Button
                circle
                className={scss.newAccountButtonMobile}
                icon={<Icon icon="plus" size={10} />}
                onClick={handleToggleModal}
                variant="container"
              />
            </div>
            <Modal
              isOpen={isOpen}
              onClickOutside={() => setIsOpen(false)}
              title="Connect a social media"
            >
              <SocialMediaForm onOpenModal={handleSelectSocialMedia} />
            </Modal>
          </div>
        </div>
      </AccordionTab>
    </div>
  );
}

export default Sidebar;
