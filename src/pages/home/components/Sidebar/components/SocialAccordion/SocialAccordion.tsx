import { ReactNode, useState } from 'react';

import { useAccountStore } from '~stores/useAccountStore';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';
import { StoreAccount } from '~stores/useSocialMediaStore/useSocialMediaStore.types';

import Accordion from '~components/Accordion/Accordion';
import { AccountCard } from '~components/AccountCard/AccountCard';
import Icon from '~components/Icon/Icon';

import scss from './SocialAccordion.module.scss';

import iconPlaceholderForIcon from './assets/facebook.svg';

import { SocialAccordionProps } from './SocialAccordion.type';

function SocialAccordion(props: SocialAccordionProps): ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const { socialMedias } = useSocialMediaStore();
  const { addAccount, removeAccount } = useAccountStore();

  const handleOpenAccordion = (): void => setIsOpen((prev) => !prev);

  const activateSocialTab = (enabled: boolean, account: StoreAccount): void => {
    enabled ? addAccount(account) : removeAccount(account.id);
  };

  const renderError = (): ReactNode => (
    <span className={scss.error}>error!!!!</span>
  );

  const renderAccordionMap = (): ReactNode =>
    props.accounts.map((account) => (
      <li key={account.id}>
        <AccountCard
          avatarURL={account.avatar}
          isEnabled={account.valid}
          onEnableChange={(enable) => activateSocialTab(enable, account)}
          username={account.userName}
        />
      </li>
    ));

  const renderAccordionContent = (): ReactNode => (
    <ul role="listitem">{renderAccordionMap()}</ul>
  );

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
              <span>{socialMedias.get(props.socialMediaId)?.name}</span>
            </div>
            {props.error && renderError()}
            <div className={scss.accordionInfo}>
              <span className={scss.accountQuantity}>
                {props.accounts.length}+
              </span>
              <Icon
                aria-label={
                  isOpen ? 'Accordion is open' : 'Accordion is closed'
                }
                icon={isOpen ? 'dropDownArrow' : 'left-arrow'}
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
