/* eslint-disable -- TODO @alvarogfn [2024-02-29]: to be fixed in next pull request */
import { useState } from 'react';

import scss from './SocialAccordion.module.scss';

import iconPlaceholderForIcon from './assets/facebook.svg';

import Accordion from '../../../../../../components/Accordion/Accordion';
import { AccountCard } from '~components/AccountCard/AccountCard';
import { ISocialAccordion } from './SocialAccordion.type';

function SocialAccordion(props: ISocialAccordion) {
  const [isOpen, setIsOpen] = useState(false);

  const openLabel = isOpen ? 'open' : 'closed';

  const handleOpenAccordion = () => setIsOpen((prev) => !prev);

  const renderError = () => <span className={scss.error}>error!!!!</span>;

  const renderAccountQuantity = () => (
    <>
      <span>{props.accountList.length}+</span>
      <p>{openLabel}</p>
    </>
  );

  const renderAccordionMap = () =>
    props.accountList.map((accounts) => (
      <li key={accounts.id}>
        <AccountCard username={accounts.userName} avatarURL={accounts.avatar} />
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
