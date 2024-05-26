/* eslint-disable -- TODO @alvarogfn [2024-02-29]: to be fixed in next pull request */
import { useState } from 'react';

import scss from './SocialAccordion.module.scss';

import iconPlaceholderForIcon from './assets/facebook.svg';

import Accordion from '~components/Accordion/Accordion';
import { AccountCard } from '~components/AccountCard/AccountCard';
import { SocialAccordionProps } from './SocialAccordion.type';
import Icon from '~components/Icon/Icon';
import { useSocialMediaStore } from '~stores/useSocialMediaStore';

function SocialAccordion(props: SocialAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { socialMedias } = useSocialMediaStore();

  const handleOpenAccordion = () => setIsOpen((prev) => !prev);

  const renderError = () => <span className={scss.error}>error!!!!</span>;

  const renderAccordionMap = () =>
    props.accounts.map((account) => (
      <li key={account.id}>
        <AccountCard
          isEnabled={account.valid}
          username={account.userName}
          avatarURL={account.avatar}
        />
      </li>
    ));

  const renderAccordionContent = () => (
    <ul role="listitem">{renderAccordionMap()}</ul>
  );

  return (
    <Accordion
      className={scss.wrapper}
      isOpen={isOpen}
      header={
        <button
          className={scss.container}
          id="btn-accordion"
          aria-expanded={isOpen}
          onClick={handleOpenAccordion}
          aria-controls="content-accordion"
        >
          <div className={scss.header}>
            <div className={scss.socialInfo}>
              <img className={scss.icon} src={iconPlaceholderForIcon} />
              <span>{socialMedias.get(props.socialMediaId)?.name}</span>
            </div>
            {props.error && renderError()}
            <div className={scss.accordionInfo}>
              <span className={scss.accountQuantity}>
                {props.accounts.length}+
              </span>
              <Icon
                size={16}
                icon={isOpen ? 'dropDownArrow' : 'left-arrow'}
                aria-label={
                  isOpen ? 'Accordion is open' : 'Accordion is closed'
                }
              />
            </div>
          </div>
        </button>
      }
      content={renderAccordionContent()}
    />
  );
}

export default SocialAccordion;
