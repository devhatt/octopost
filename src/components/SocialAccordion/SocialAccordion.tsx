import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import ToggleSocialMedia from '../ToggleSocialMedia/ToggleSocialMedia';

import scss from './SocialAccordion.module.scss';

import imagePlaceholderForIcon from '../../../assets/logo.png';

import { ISocialAccordion } from './SocialAccordion.type';

const accordionVariants = {
  expanded: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  collapsed: { opacity: 0, y: -100, transition: { duration: 0.2 } },
};

function SocialAccordion(props: ISocialAccordion) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={scss.wrapper}>
      <button
        id="btn-accordion"
        aria-expanded={isOpen}
        aria-controls="content-accordion"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <header className={scss.header}>
          <div className={scss.socialInfo}>
            <img className={scss.icon} src={imagePlaceholderForIcon} />
            <p>{props.socialMediaName}</p>
          </div>

          <div className={scss.accordionInfo}>
            {props.isError ? (
              <span className={scss.error}>error!!!!</span>
            ) : (
              <>
                <span>{props.accountList.length}+</span>
                <p>{isOpen ? 'open' : 'closed'}</p>
              </>
            )}
          </div>
        </header>
      </button>
      <AnimatePresence>
        {isOpen && (
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
            {props.accountList.map((accounts) => (
              <motion.li key={accounts.id}>
                <ToggleSocialMedia
                  accountName={accounts.username}
                  accountImage={accounts.image}
                />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SocialAccordion;
