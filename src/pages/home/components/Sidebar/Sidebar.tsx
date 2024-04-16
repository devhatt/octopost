import { ReactNode, useRef, useState } from 'react';

import classNames from 'classnames';
import groupBy from 'lodash.groupby';

import useKeyPress from '~hooks/useKeyPress/useKeyPress';
import { useSocialMediaStore } from '~stores/useSocialMediaStore';

import AccordionTab from '~components/AccordionTab/AccordionTab';
import Button from '~components/Button/Button';
import Icon from '~components/Icon/Icon';
import InputSearch from '~components/InputSearch/InputSearch';
import { TInputComponent } from '~components/InputSearch/InputSearch.types';
import Modal from '~components/Modal/Modal';

import AddAccount from './components/AddAccount/AddAccount';
import SocialAccordion from './components/SocialAccordion/SocialAccordion';

import SocialAccordion from './components/SocialAccordion/SocialAccordion';

import scss from './Sidebar.module.scss';

import {
  mockFacebookData,
  mockInstagramData,
  mockTwitterData,
} from './components/SocialAccordion/mocksMidiaData';

function Sidebar(): ReactNode {
  const { accounts, addAccount } = useSocialMediaStore();
  const [isOpen, setIsOpen] = useState(false);
  const inputSearchRef = useRef<TInputComponent | null>(null);

  const handleToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectSocialMedia = (addonId: string): void => {
    addAccount(addonId);
    setIsOpen(false);
  };

  useKeyPress('Escape', (e: KeyboardEvent) => {
    e.preventDefault();
    setIsOpen(false);
  });

  return (
    <div className={scss.container}>
      <AccordionTab
        className={classNames(scss.mobile, [scss.openMobile])}
        hideCloseButton
        title="Select Social Media"
      >
        <div className={scss.content}>
          <InputSearch
            error={false}
            placeholder="Search for social media"
            ref={inputSearchRef}
          />

          <div className={scss.items}>
            {Object.entries(groupBy(accounts, 'socialMediaId')).map(
              ([socialMediaId, socialMediaAccounts]) => (
                <SocialAccordion
                  accounts={socialMediaAccounts}
                  error={false}
                  key={socialMediaId}
                  socialMediaName={socialMediaId}
                />
              )
            )}
          </div>

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
