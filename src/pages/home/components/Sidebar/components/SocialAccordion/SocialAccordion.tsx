import { ReactNode, useState } from 'react';

import { useAccountStore } from '~stores/useAccountStore/useAccountStore';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';
import { StoreAccount } from '~stores/useSocialMediaStore/useSocialMediaStore.types';

import Accordion from '~components/Accordion/Accordion';
import { AccountCard } from '~components/AccountCard/AccountCard';
import Icon from '~components/Icon/Icon';

import scss from './SocialAccordion.module.scss';

import iconPlaceholderForIcon from './assets/facebook.svg';

import { AccountQuantity } from './SocialAccordion.components';
import { SocialAccordionProps } from './SocialAccordion.type';

function SocialAccordion(props: SocialAccordionProps): ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const { removeFavoriteAccount, setFavoriteAccount, socialMedias } =
    useSocialMediaStore();
  const { addAccount, removeAccount } = useAccountStore();

  const handleOpenAccordion = (): void => setIsOpen((prev) => !prev);

  const activateSocialTab = (enabled: boolean, account: StoreAccount): void => {
    if (enabled) addAccount(account);
    if (!enabled) removeAccount(account.id);
  };

  const favoriteAccount = (
    isFavorited: boolean,
    account: StoreAccount
  ): void => {
    if (isFavorited) return setFavoriteAccount(account.id);
    removeFavoriteAccount(account.id);
  };

  const renderError = (): ReactNode => (
    <span className={scss.error}>error!!!!</span>
  );

  const renderAccordionMap = (): ReactNode =>
    props.accounts.map((account) => (
      <li key={account.id}>
        <AccountCard
          avatarURL={account.avatar}
          invalid={!account.valid}
          isEnabled={account.valid}
          isFavorited={props.isFavoriteAccordion}
          onEnableChange={(enable) => activateSocialTab(enable, account)}
          onFavoriteChange={(isFavorited) => {
            favoriteAccount(isFavorited, account);
          }}
          username={account.userName}
        />
      </li>
    ));

  const renderAccordionContent = (): ReactNode => (
    <ul role="listitem">{renderAccordionMap()}</ul>
  );

  const hasInvalidAccount = props.accounts.some(({ valid }) => !valid);

  const socialMediaName = socialMedias.get(props.socialMediaId)?.name;

  return (
    <Accordion
      className={scss.wrapper}
      content={renderAccordionContent()}
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
              <span>
                {props.isFavoriteAccordion ? 'Favoritos' : socialMediaName}
              </span>
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
