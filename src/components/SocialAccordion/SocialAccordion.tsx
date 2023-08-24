import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import ToggleSocialMedia from '../ToggleSocialMedia/ToggleSocialMedia';

import scss from './SocialAccordion.module.scss';

import test from '../../../assets/logo.png';

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
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <header className={scss.header}>
          <div className={scss.socialInfo}>
            <img className={scss.icon} src={test} />
            <p>{props.socialMediaName}</p>
          </div>

          <div className={scss.accordionInfo}>
            <span>{props.accountList.length}+</span>
            <p>{isOpen ? 'open' : 'closed'}</p>
          </div>
        </header>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={accordionVariants}
            className={scss.list}
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
