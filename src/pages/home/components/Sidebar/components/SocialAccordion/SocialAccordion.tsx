/* eslint-disable -- TODO @alvarogfn [2024-02-29]: to be fixed in next pull request */
import { useState } from 'react';

import scss from './SocialAccordion.module.scss';

import iconPlaceholderForIcon from './assets/facebook.svg';

import Accordion from '~components/Accordion/Accordion';
import { AccountCard } from '~components/AccountCard/AccountCard';
import { SocialAccordionProps } from './SocialAccordion.type';

function SocialAccordion(props: SocialAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenAccordion = () => setIsOpen((prev) => !prev);

  const renderError = () => <span className={scss.error}>error!!!!</span>;

  const renderAccountQuantity = () => (
    <>
      <span>{props.accounts.length}+</span>
      <p>{openLabel}</p>
    </>
  );

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
          id="btn-accordion"
          aria-expanded={isOpen}
          onClick={handleOpenAccordion}
          aria-controls="content-accordion"
        >
          <header className={scss.header}>
            <div className={scss.socialInfo}>
              <img className={scss.icon} src={iconPlaceholderForIcon} />
              <p>{props.socialMediaName}</p>
            </div>

            <div className={scss.accordionInfo}>
              {props.error ? renderError() : renderAccountQuantity()}
            </div>
          </header>
        </button>
      }
      content={renderAccordionContent()}
    />
  );
}

export default SocialAccordion;
