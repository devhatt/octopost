import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import ToggleSocialMedia from '~components/ToggleSocialMedia/ToggleSocialMedia';

import scss from './SocialAccordion.module.scss';

import iconPlaceholderForIcon from './assets/facebook.svg';

import { ISocialAccordion } from './SocialAccordion.type';

const accordionVariants = {
  expanded: {
    height: 'auto',
    transition: { duration: 0.3 },
  },
  collapsed: { height: 0, transition: { duration: 0.3 } },
};

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
          accountName={accounts.username}
          accountImage={accounts.image}
        />
      </li>
    ));

  const renderAccordionContent = () => (
    <motion.ul
      role="listitem"
      exit="collapsed"
      animate="expanded"
      initial="collapsed"
      className={scss.list}
      id="content-accordion"
      variants={accordionVariants}
      aria-labelledby="btn-accordion"
    >
      {renderAccordionMap()}
    </motion.ul>
  );

  return (
    <div className={scss.wrapper}>
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
      <AnimatePresence>{isOpen && renderAccordionContent()}</AnimatePresence>
    </div>
  );
}

export default SocialAccordion;
