import { useState } from 'react';

import scss from './SocialAccordion.module.scss';

import iconPlaceholderForIcon from './assets/facebook.svg';

import Accordion from '../../../../../../components/Accordion/Accordion';
import ToggleSocialMedia from '../../../../../../components/ToggleSocialMedia/ToggleSocialMedia';
import { ISocialAccordion } from './SocialAccordion.type';

function SocialAccordion(props: ISocialAccordion) {
  const [isOpen, setIsOpen] = useState(true);

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
        <ToggleSocialMedia
          accountImage={accounts.image}
          accountName={accounts.username}
        />
      </li>
    ));

  const renderAccordionContent = () => (
    <ul className={scss.list} role="listitem">
      {renderAccordionMap()}
    </ul>
  );

  return (
    <Accordion
      className={scss.wrapper}
      content={renderAccordionContent()}
      header={
        <button
          aria-controls="content-accordion"
          aria-expanded={isOpen}
          id="btn-accordion"
          onClick={handleOpenAccordion}
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
      isOpen={isOpen}
    />
  );
}

export default SocialAccordion;
