import { ReactNode, useState } from 'react';

import { useAccountStore } from '~stores/useAccountStore/useAccountStore';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';
import { StoreAccount } from '~stores/useSocialMediaStore/useSocialMediaStore.types';

import Accordion from '~components/Accordion/Accordion';
import Icon from '~components/Icon/Icon';

import scss from './SocialAccordion.module.scss';

import iconPlaceholderForIcon from './assets/facebook.svg';

import {
  AccordionContent,
  AccountQuantity,
} from './SocialAccordion.components';
import { SocialAccordionProps } from './SocialAccordion.type';

function SocialAccordion(props: SocialAccordionProps): ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const { favoriteAccount } = useSocialMediaStore();
  const { addAccount, removeAccount } = useAccountStore();

  const handleOpenAccordion = (): void => setIsOpen((prev) => !prev);

  const activateSocialTab = (enabled: boolean, account: StoreAccount): void => {
    if (enabled) addAccount(account);
    if (!enabled) removeAccount(account.id);
  };

  const favorite = (isFavorited: boolean, account: StoreAccount): void => {
    void favoriteAccount(account.id, isFavorited);
  };

  const renderError = (): ReactNode => (
    <span className={scss.error}>error!!!!</span>
  );

  const hasInvalidAccount = props.accounts.some(({ valid }) => !valid);

  return (
    <Accordion
      className={scss.wrapper}
      content={
        <AccordionContent
          accounts={props.accounts}
          enableChange={(enable, account) => activateSocialTab(enable, account)}
          favoriteChange={(isFavorite, account) =>
            favorite(isFavorite, account)
          }
        />
      }
      header={
        <button
          aria-controls="content-accordion"
          aria-expanded={isOpen}
          className={scss.container}
          id="btn-accordion"
          onClick={handleOpenAccordion}
        >
          <div className={scss.header}>
            <div className={scss.socialInfo}>
              <img
                alt="social media"
                className={scss.icon}
                src={iconPlaceholderForIcon}
              />
              <span>{props.title}</span>
            </div>
            {props.error && renderError()}
            <div className={scss.accordionInfo}>
              {hasInvalidAccount ? (
                <Icon className={scss.alertIcon} icon="alert" size={16} />
              ) : (
                <AccountQuantity accountQuantity={props.accounts.length} />
              )}

              <Icon
                aria-label={
                  isOpen ? 'Accordion is open' : 'Accordion is closed'
                }
                className={isOpen ? scss.rotateIconUp : scss.rotateIconDown}
                icon={isOpen ? 'triangle-drop-arrow' : 'triangle-left-arrow'}
                size={16}
              />
            </div>
          </div>
        </button>
      }
      isOpen={isOpen}
    />
  );
}

export default SocialAccordion;
